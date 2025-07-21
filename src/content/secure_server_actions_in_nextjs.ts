const secure_server_actions_in_nextjs = `

In this guide, you'll learn how to **secure Server Actions in Next.js** using a powerful TypeScript library called **next-safe-action**. Server Actions allow you to write backend logic right inside React components — but they need input validation and proper typing to avoid security issues.

With next-safe-action, you can add **Zod-based validation**, **type-safe execution**, and safe client-side usage in just a few lines.

---

## Why Secure Server Actions?

- Server Actions run directly on the server and can handle sensitive logic like DB access or user data.
- Without validation, users can send arbitrary or malicious input.
- next-safe-action helps you safely expose these actions to the client with input and output types.

---

## Prerequisites

Make sure you have:

- **Next.js 14+** with the **App Router**
- **TypeScript** enabled
- Familiarity with **Zod** and the concept of Server Actions

Install the dependencies:

\`\`\`bash
npm install next-safe-action zod
\`\`\`

---

## Step 1: Create a Safe Action Client

We’ll start by creating a helper file that sets up the safe action client.

\`\`\`ts
// lib/safeAction.ts
import { createSafeActionClient } from "next-safe-action";

export const action = createSafeActionClient();
\`\`\`

This action function will now be used to define secure actions with type and schema support.

---

## Step 2: Define a Secure Server Action

Let’s say you’re building a contact form. You can create a secure Server Action with Zod schema validation like this:

\`\`\`ts
// app/actions/submitContact.ts 
"use server"; 

import { action } from "@/lib/safeAction";
import { z } from "zod";

const contactSchema = z.object({ 
name: z.string().min(2), 
email: z.string().email(), 
message: z.string().min(10), 
});

export const submitContact = action
.inputSchema(contactSchema) 
.action(async ({ parsedInput }) => { 
const { name, email, message } = parsedInput; 

// Replace this with your DB logic 
console.log("Saving contact form data:", { name, email, message }); 

return { success: true }; 
});
\`\`\`

✅ Validates the input on the server  
✅ Blocks invalid or malicious data  
✅ Returns a type-safe response

---

## Step 3: Use the Action on the Client

Now let’s use this action from a client component:

\`\`\`tsx
// components/ContactForm.tsx
"use client";

import { useTransition, useState } from "react";
import { submitContact } from "@/app/actions/submitContact";

export default function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContact({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });

      if (result.serverError) return setResult("Something went wrong!");
      if (!result.data?.success) return setResult("Invalid input.");
      setResult("Thanks! Your message was sent.");
    });
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" required className="border p-2 w-full" />
      <input name="email" placeholder="Email" required className="border p-2 w-full" />
      <textarea name="message" placeholder="Message" required className="border p-2 w-full" />
      <button type="submit" disabled={pending} className="bg-black text-white p-2">
        {pending ? "Sending..." : "Send"}
      </button>
      <p>{result}</p>
    </form>
  );
}
\`\`\`

---

## Step 4: Benefits of next-safe-action

- ✅ **Zod input validation**
- ✅ **Automatic input type inference**
- ✅ **Server-safe and client-friendly usage**
- ✅ **No need for manual fetch or error parsing**

---

## Final Thoughts

Server Actions simplify backend logic in Next.js — but only if used safely. next-safe-action helps ensure you:

- Validate input using **Zod**
- Prevent unauthorized or malformed requests
- Get full **type safety** from client to server
- Write cleaner and more secure code

It’s a must-have for anyone building production-grade apps with App Router.

Explore next-safe-action: [https://github.com/TheEdoRan/next-safe-action](https://github.com/TheEdoRan/next-safe-action)

`;

export default secure_server_actions_in_nextjs;
