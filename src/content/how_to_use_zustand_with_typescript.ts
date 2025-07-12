const how_to_use_zustand_with_typescript = `

Zustand is a fast and minimalistic state management library for React that pairs beautifully with Next.js and TypeScript. In this guide, we’ll walk through setting up Zustand in a Next.js project using typed stores and modular structure.

---

## Step 1: Install Zustand

Start by adding Zustand to your Next.js project.

\`\`\`bash
npm install zustand
\`\`\`

---

## Step 2: Create a Typed Store

Then define a simple counter store:

\`\`\`ts
// store/useCounterStore.ts
import { create } from "zustand";

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
\`\`\`

---

## Step 3: Use Zustand Store in a Component

In a client component (required in Next.js App Router), import and use the store:

\`\`\`tsx
// app/components/Counter.tsx
"use client";

import { useCounterStore } from "@/store/useCounterStore";

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

---

## Step 4: Store With Async Logic

Zustand supports async actions like fetching data:

\`\`\`ts
// store/useUserStore.ts
type User = {
  id: number;
  name: string;
};

type UserStore = {
  users: User[];
  fetchUsers: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    set({ users: data });
  },
}));
\`\`\`

Use it like this:

\`\`\`tsx
"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

export default function UserList() {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

---

## Step 5: Persisting Zustand Store (Optional)

You can also persist state across reloads using zustand/middleware.

\`\`\`ts
// store/useThemeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage", // key for localStorage
    }
  )
);
\`\`\`

---

## Zustand vs Redux

Zustand provides a simpler alternative to Redux:
\`\`\`

| Feature              | Zustand                              | Redux                            
|----------------------|--------------------------------------|----------------------------------
| Boilerplate          | Minimal                              | High (actions, reducers, types)  
| Setup Time           | Quick                                | Time-consuming                   
| Middleware           | Built-in with simple config          | Requires external setup          
| Async Actions        | Native (just use async/await)        | Needs middleware like thunk      
| TypeScript Support   | First-class                          | Good, but requires more setup    
| Context API Required | ❌ No                                | ✅ Yes                          

\`\`\`

If you want a **lightweight**, **scalable**, and **developer-friendly** state manager without setting up multiple files or patterns, Zustand is the way to go — especially for **Next.js** and **React Server Components**.

---

## Final Thoughts

Zustand offers:

- Simplicity like React's useState
- Scalable store structure
- Full TypeScript support
- Support for async actions, middleware, and persistence
- Cleaner DX compared to Redux for most use-cases

It's perfect for modern **Next.js apps** that want **global state** without boilerplate or context overhead.

`;
export default how_to_use_zustand_with_typescript;
