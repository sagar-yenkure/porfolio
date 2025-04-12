const how_to_use_redux_in_nextjs_with_typescript = `

In this step-by-step guide, you'll learn how to set up Redux Toolkit in a Next.js project using TypeScript. This approach helps you manage complex application state in a scalable and type-safe manner.

---

## Prerequisites

Make sure the following tools are installed:

- Node.js (v16 or higher)
- npm or yarn
- A code editor (Visual Studio Code recommended)

---

## Step 1: Initialize a Next.js Project with TypeScript

Use the following command to create a new Next.js project with TypeScript support:

\`\`\`bash
npx create-next-app@latest my-redux-app --typescript
cd my-redux-app
\`\`\`

During setup, you'll be asked configuration questions. Recommended responses:

- Use Tailwind CSS? → Yes (optional but helpful for styling)
- Use src/ directory? → Yes
- Use App Router? → Yes
- Customize import alias (@/*)? → Optional

---

## Step 2: Install Redux Toolkit and React-Redux

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

---

## Step 3: Set Up the Redux Store

Create a \`store\` folder and add the following code in \`store.ts\`:

\`\`\`ts
// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
\`\`\`

---

## Step 4: Create a Feature Slice

\`\`\`ts
// src/features/counter/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

---

## Step 5: Provide the Store Globally

Wrap your app with the Redux Provider. If you're using the App Router, modify \`layout.tsx\`:

\`\`\`tsx
// src/app/layout.tsx
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
\`\`\`

If you're using the Pages Router, wrap the store in \`_app.tsx\`.

---

## Step 6: Use Redux in a Component

\`\`\`tsx
// src/app/page.tsx or any component
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Count: {count}</h2>
      <div className="flex gap-4 justify-center">
        <button onClick={() => dispatch(increment())} className="btn">+</button>
        <button onClick={() => dispatch(decrement())} className="btn">-</button>
      </div>
    </div>
  );
};

export default Counter;
\`\`\`

---

## Using Multiple Slices

Add multiple slices by combining them in the store:

\`\`\`ts
// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});
\`\`\`

---

## TypeScript Tips

To avoid repeating types across components, create custom hooks:

\`\`\`ts
// src/hooks/redux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
\`\`\`

Now use them like this:

\`\`\`ts
const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();
\`\`\`

---

## Final Thoughts

You now have a complete Redux setup inside a modern Next.js project using TypeScript. From here, you can:

- Add more slices for features like auth, products, users, etc.
- Integrate Redux middleware like Redux Thunk or Saga
- Use Redux Persist to store state across sessions
- Leverage DevTools for debugging

This setup is scalable, type-safe, and perfect for modern web apps.

`;

export default how_to_use_redux_in_nextjs_with_typescript;
