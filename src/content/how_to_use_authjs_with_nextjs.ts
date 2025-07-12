const how_to_use_authjs_with_nextjs = `

In this guide, you’ll learn how to implement authentication in a Next.js 13+ App Router project using **Auth.js** (formerly NextAuth), with both:

- Email and Password (credentials-based login)
- Google OAuth (third-party login)

---

## Step 1: Install Auth.js

\`\`\`bash
npm install next-auth prisma @prisma/client
\`\`\`

If you don't know how to use Prisma, you can check out -> [https://sagaryenkure.com/how-to-use-prisma-in-nextjs](https://sagaryenkure.com/how-to-use-prisma-in-nextjs).

---

In your .env, set your Google keys and auth secret:

\`\`\`
// .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
AUTH_SECRET="your-auth-secret"
\`\`\`

## Step 2: Setup auth Options in lib/auth.ts

\`\`\`ts
// lib/auth.ts
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { validateUser } from "@/actions/validateUser";
import { prisma } from "@lib/prisma";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await validateUser(credentials);
        if (!user) throw new Error("Invalid email or password");

        return {
          id: user._id,
          email: user.email,
          plan: user.plan,
          name: user.name,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.authProviderId = user.authProviderId || null;
        token.image = user.image || null;
        token.plan = user.plan;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.image = token.image;
        session.user.authProviderId = token.authProviderId;
        session.user.plan = token.plan;
      }
      return session;
    },

    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const { email, image, id, name } = user;

        const existingUser = await prisma.user.upsert({
          where: { email },
          update: {
            image,
            authProviderId: id,
            authProvider: "google",
            name: name ?? email.split("@")[0],
          },
          create: {
            name: name ?? email.split("@")[0],
            email,
            image,
            authProviderId: id,
            authProvider: "google",
            plan: "BASIC",
          },
        });

        user.name = existingUser.name;
        user.plan = existingUser.plan;
        user.id = existingUser.id;
        user.authProviderId = existingUser.authProviderId ?? undefined;
      }
      return true;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-in",
  },

  secret: process.env.AUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === "production",
};
\`\`\`

---

## Step 3: Create Auth Route

\`\`\`ts
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
\`\`\`

---

## Step 4: Create Sign-In Page

\`\`\`tsx
// app/auth/sign-in/page.tsx
"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          const password = e.currentTarget.password.value;
          signIn("credentials", { email, password });
        }}
      >
        <input type="email" name="email" required placeholder="Email" />
        <input type="password" name="password" required placeholder="Password" />
        <button type="submit">Sign in with Email</button>
      </form>

      <button onClick={() => signIn("google")}>Continue with Google</button>
    </div>
  );
}
\`\`\`

---

## Step 5: Protect API Routes

You can restrict backend / server actions access using getServerSession:

\`\`\`ts
// app/api/protected/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response("Operation success", { status: 200 });
};
\`\`\`

---

## Step 6: Protect Pages Using useSession

\`\`\`tsx
// app/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const profilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session?.user) {
    router.push("/sign-in");
    return null;
  }

  return <div>Welcome to your profile, ID: {id}</div>;
};
\`\`\`

---

## Step 7: Logout Functionality

\`\`\`tsx
"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })} // redirect to homepage
      className="text-red-600 font-semibold"
    >
      Logout
    </button>
  );
}
\`\`\`

## Final Thoughts

Auth.js gives you everything needed to implement secure authentication:

- Google + Credentials support
- JWT-based stateless sessions
- Type-safe callback control
- Server and client session access

With this flexible setup, you can fully customize authentication for any **Next.js** app — from SaaS to internal dashboards.

`;

export default how_to_use_authjs_with_nextjs;
