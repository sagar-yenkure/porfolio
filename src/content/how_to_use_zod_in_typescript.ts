const how_to_use_zod_in_typescript = `

Zod is one of the best libraries out there for validating data in TypeScript projects. It’s fast, type-safe, and works beautifully for both backend APIs and frontend forms.

In this guide, we’ll walk through how to:

- Use Zod to validate incoming API requests in Node.js
- Use Zod with React Hook Form for frontend form validation

---

## Step 1: Installing Zod

First things first — install Zod in your project:

\`\`\`bash
npm install zod
\`\`\`

If you're using it with React Hook Form:

\`\`\`bash
npm install react-hook-form @hookform/resolvers
\`\`\`

---

## Step 2: What is Zod and Why Use It?

Zod is a **TypeScript-first schema validation library**. That means you write your validation rules using Zod, and it automatically gives you fully typed objects.

You can use it to:

- Safely validate user input
- Share the same schema between backend and frontend
- Avoid writing repetitive type definitions and manual checks

---

## Step 3: Validating API Input in Node.js

Let’s say you’re building a user registration API. You want to make sure that the data sent to the server is actually valid — no missing fields, no bad email formats, etc.

### Create a Schema

\`\`\`ts
// schemas/user.schema.ts
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
\`\`\`

### Use the Schema in an API Route

\`\`\`ts
// routes/user.ts
import express from "express";
import { userSchema } from "../schemas/user.schema";

const router = express.Router();

router.post("/register", (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.flatten().fieldErrors,
    });
  }

  const user = result.data;
  res.status(200).json({ message: "User registered", user });
});
\`\`\`

✅ 'safeParse()' lets you check if the input is valid and safely access the typed data.

---

## Step 4: Form Validation in React with React Hook Form + Zod

Zod works perfectly with React Hook Form. You can reuse the same schema on the frontend that you used on the backend.

### Set Up the Schema

\`\`\`ts
// schemas/user.schema.ts
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password too short"),
});

export type UserSchemaType = z.infer<typeof userSchema>;
\`\`\`

### Use It in a Form

\`\`\`tsx
// components/RegisterForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserSchemaType } from "../schemas/user.schema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchemaType) => {
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input type="password" placeholder="Password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
\`\`\`

This form is fully typed and will only submit valid data — and you didn’t have to write any custom validation logic.

---

## Step 5: Some Cool Things Zod Can Do

### Transform values

Need to convert a string to a number on the fly?

\`\`\`ts
const schema = z.object({
  age: z.string().transform((val) => Number(val)),
});
\`\`\`

### Nest schemas

You can compose schemas easily:

\`\`\`ts
const addressSchema = z.object({
  city: z.string(),
  zip: z.string(),
});

const userSchema = z.object({
  name: z.string(),
  address: addressSchema,
});
\`\`\`

### Custom error messages

Zod lets you add readable, user-friendly errors:

\`\`\`ts
z.string().min(1, { message: "This field is required" });
\`\`\`

---

## Final Thoughts

Zod is an amazing tool for modern TypeScript development. Whether you're building APIs or forms, it helps you:

- Avoid bugs from invalid data
- Write cleaner code with less boilerplate
- Share logic across your stack

If you're using TypeScript, Zod should be part of your toolkit. Give it a try in your next project — you’ll never look back.

`;

export default how_to_use_zod_in_typescript;
