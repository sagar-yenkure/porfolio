const trpc_nextjs_from_zero_to_fullstack_hero = `


This guide walks you through integrating **tRPC** — a fully typesafe API framework — with **Next.js**, building a powerful, schema-free fullstack application.

We'll cover:
- tRPC setup
- React Query (TanStack Query) integration
- Zod for input validation
- SuperJSON for data serialization
- Middleware for role-based access control

---

## Why tRPC + Next.js?

- **tRPC** allows you to call backend functions from the frontend **without writing API schemas or REST/GraphQL endpoints**.
- **Next.js** provides server-side rendering (SSR), server components, and API routes — all ideal for tRPC.

Together, they enable **end-to-end type safety** with minimal boilerplate.

---

## Prerequisites

Make sure you have a Next.js project. If not, create one:

\`\`\`bash
npx create-next-app@latest
\`\`\`

Install the required packages:

\`\`\`bash
npm install @trpc/server @trpc/client @trpc/react-query @tanstack/react-query zod superjson
\`\`\`

---

## Optional: Prisma Zod Integration

If you're using Prisma and want to use Zod types generated from your schema:

\`\`\`bash
npm install zod-prisma-types
\`\`\`

Add this to your Prisma schema:

\`\`\`ts
generator zod {
  provider = "zod-prisma-types"
}
\`\`\`

Then run:

\`\`\`bash
npx prisma generate zod
\`\`\`

The types will be generated in \`schema/generated/zod\`.

---

## Step 1: Initialize tRPC

\`\`\`ts
// src/trpc/init.ts
import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";

export const createTRPCContext = cache(async () => {

// Here you can auth to get user session to add auth middleware

  const user = {
    name: "sager yenkure",
    id: "112233",
    role: "user",
  };

  return user || { name: null, id: null, role: null };
});

type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
\`\`\`

This sets up a reusable tRPC instance with a context containing user data — enabling role-based logic later.

---

## Step 2: Define the Router

\`\`\`ts
// src/trpc/router.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "./init";
import { createUser, getAllUsers, getUserById } from "./procedures/users";

export const userRouter = {
  getAll: publicProcedure.query(() => getAllUsers()),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => getUserById(input.id)),

  createUser: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(({ input }) => createUser(input.name)),
};

export const authRouter = {};

export const trpcRouter = createTRPCRouter({
  users: userRouter,
  auth: authRouter,
});

export type TRPCRouter = typeof trpcRouter;
\`\`\`

Each route is defined with Zod for type-safe inputs and maps directly to backend logic.

---

## Step 3: Setup the Server Caller

\`\`\`ts
// src/trpc/server.ts
import "server-only";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import { makeQueryClient } from "./query-client";
import { trpcRouter } from "./router";
import { createCallerFactory, createTRPCContext } from "./init";

export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(trpcRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof trpcRouter>(
  caller,
  getQueryClient
);
\`\`\`

This enables React Server Components (RSC) support for tRPC.

---

## Step 4: Setup Query Client

\`\`\`ts
// src/trpc/query-client.ts
import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}
\`\`\`

Creates a reusable query client for SSR and hydration.

---

## Step 5: Setup Client Provider

\`\`\`tsx
// src/trpc/client.tsx
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import SuperJSON from "superjson";
import { useState } from "react";
import { makeQueryClient } from "./query-client";
import { TRPCRouter } from "./router";
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";

export const trpc = createTRPCReact<TRPCRouter>();

let clientQueryClientSingleton: QueryClient;

function getQueryClient() {
  if (typeof window === "undefined") return makeQueryClient();
  return (clientQueryClientSingleton ??= makeQueryClient());
}

function getUrl() {
  const base = typeof window !== "undefined"
    ? ""
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return \`\${base}/api/trpc\`;
}

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          transformer: SuperJSON,
          url: getUrl(),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
\`\`\`

Wraps your app with both tRPC and React Query providers.

---

## Step 6: Wrap Your Root Layout

\`\`\`tsx
// app/layout.tsx
import { TRPCProvider } from "@/trpc/client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
\`\`\`

Makes tRPC and React Query globally available.

---

## Step 7: Use tRPC in Server Components

\`\`\`tsx
// app/page.tsx
import { trpc } from "@/trpc/server";

export default async function Home() {
  const { data, isLoading } = trpc.users.getById.useQuery({ id: 2 });
  const { data: allUsers, isLoading: allUserLoading } = trpc.users.getAll.useQuery();

  return (
    <main>
      {isLoading ? <p>Loading user...</p> : <div>{data?.name}</div>}
      <ol>
        {allUserLoading
          ? <p>Loading all users...</p>
          : allUsers?.map((user, idx) => <li key={idx}>Welcome {user.name}</li>)
        }
      </ol>
    </main>
  );
}
\`\`\`

SSR-safe queries with full type safety.

---

## Step 8: Use tRPC in Client Components

\`\`\`tsx
"use client";

import { useState } from "react";
import { trpc } from "@/trpc/client";

export default function Home() {
  const [newUserName, setNewUserName] = useState("");
  const utils = trpc.useUtils();

  const { data, isLoading } = trpc.users.getById.useQuery({ id: 2 });
  const { data: allUsers, isLoading: allUserLoading } = trpc.users.getAll.useQuery();

  const { mutate, isPending } = trpc.users.createUser.useMutation({
    onSuccess: () => utils.users.getAll.invalidate(),
    onError: (err) => console.error(err.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUserName.trim()) mutate({ name: newUserName });
  };

  return (
    <main>
      <div>{isLoading ? "Loading..." : data?.name}</div>
      <ol>
        {allUserLoading
          ? <p>Loading users...</p>
          : allUsers?.map((user, idx) => <li key={idx}>Welcome {user.name}</li>)
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button type="submit">{isPending ? "Adding..." : "Add User"}</button>
      </form>
    </main>
  );
}
\`\`\`

Client-side mutation with form state, optimistic updates, and cache invalidation.

---

## Step 9: Add Middleware for RBAC (Role-Based Access Control)

\`\`\`ts
// src/trpc/middleware.ts
import { middleware } from "./init";

export const userMiddleware = middleware(({ ctx, next }) => {
  if (!ctx?.role) throw new Error("Not logged in");
  return next({ ctx });
});

export const adminMiddleware = middleware(({ ctx, next }) => {
  if (ctx?.role !== "admin") throw new Error("Not authorized");
  return next({ ctx });
});
\`\`\`

Apply middleware in your router:

\`\`\`ts
import { adminMiddleware, userMiddleware } from "./middleware";
import { z } from "zod";

export const userRouter = {
  getAll: publicProcedure.query(() => getAllUsers()),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => getUserById(input.id)),

  createUser: publicProcedure
    .use(userMiddleware)
    .use(adminMiddleware)
    .input(z.object({ name: z.string().min(1) }))
    .mutation(({ input }) => createUser(input.name)),
};
\`\`\`

Adds layered access control using composable middleware.

---

## Final Thoughts

Using **tRPC with Next.js** gives you:

- Full end-to-end type safety
- Real-time feedback from your backend
- No need to maintain API schemas
- Clean integration with React Query and server components

This setup is scalable, developer-friendly, and production-ready.

`;

export default trpc_nextjs_from_zero_to_fullstack_hero;
