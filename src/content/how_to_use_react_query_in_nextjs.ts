const how_to_use_react_query_in_nextjs = `

If you're building a modern **Next.js** app, managing API state and server cache effectively is crucial. That's where **React Query** (now called TanStack Query) comes in.

In this guide, you'll learn how to set up **React Query with Axios** in a scalable structure:

- Axios client setup
- Services for API calls
- Feature-based folders for hooks
- React Query Client in the layout/app

---

## Folder Structure

\`\`\`
📦 app
 ┣ 📂 layout.tsx           → Wraps app in QueryClientProvider
 ┣ 📂 services
 ┃ ┗ 📄 user.service.ts     → Axios-based API calls
 ┣ 📂 features
 ┃ ┗ 📄 useUser.ts          → useQuery / useMutation hooks
 ┣ 📂 lib
 ┃ ┗ 📄 axios.ts            → Axios instance
\`\`\`

---

## Step 1: Install Dependencies

\`\`\`bash
npm install @tanstack/react-query axios
\`\`\`

---

## Step 2: Create Axios Instance

\`\`\`ts
// lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || "https://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
\`\`\`

---

## Step 3: Service Layer (API Calls)

\`\`\`ts
// services/user.service.ts
import api from "@/lib/axios";

export const getUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export const createUser = async (payload: { name: string; email: string }) => {
  const { data } = await api.post("/users", payload);
  return data;
};
\`\`\`

---

## Step 4: React Query Hooks in Features

\`\`\`ts
// features/useUser.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, createUser } from "@/services/user.service";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"], // This key identifies the query
    queryFn: getUsers,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    isError,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Tell React Query to refetch the "users" query
      // This ensures the UI shows the latest data after a new user is added
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { mutate, isPending, isError };
};

\`\`\`

---

## Step 5: Provide React Query in Layout

\`\`\`tsx
// app/layout.tsx (for App Router)
// OR pages/_app.tsx (for Pages Router)

"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
\`\`\`

---

## Step 6: Use Hook in Component

\`\`\`tsx
"use client";

import { useUsers, useCreateUser } from "@/features/useUser";

export default function UserPage() {
  const { data: users, isLoading } = useUsers();
  const { mutate, isPending, isError } = useCreateUser();

  const handleAdd = () => {
    mutate({ name: "John", email: "john@example.com" });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleAdd} disabled={isPending}>
        {isPending ? "Creating..." : "Add User"}
      </button>
      <ul>
        {users?.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

---

## Final Thoughts

With this setup:

✅ API logic is isolated in services  
✅ React Query hooks live in features  
✅ Axios is reused via an instance  
✅ Client is wrapped once in the layout  

This structure is perfect for scaling apps with clean boundaries and predictable behavior.

You can now use React Query to manage data fetching, mutation, caching, and sync across your entire app.

`;

export default how_to_use_react_query_in_nextjs;
