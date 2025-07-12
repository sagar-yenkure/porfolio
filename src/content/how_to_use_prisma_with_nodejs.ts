const how_to_use_prisma_with_nodejs = `

In this guide, you'll learn how to use **Prisma** — a modern ORM for Node.js and TypeScript — to simplify database access, schema modeling, and migrations in your backend applications using **Express.js**.

---

## What is Prisma?

**Prisma** is a next-generation ORM that makes working with databases easy. It helps you:

- Define your schema using a declarative syntax
- Generate type-safe database queries
- Perform migrations and seeding
- Easily integrate with PostgreSQL, MySQL, SQLite, SQL Server, and MongoDB

---

## Step 1: Initialize a Node.js + Express Project

Start by setting up your project and installing dependencies.

\`\`\`bash
npm install prisma
npx prisma init
\`\`\`

---

## Step 2: Setup Your Database

In your .env, set your database connection string. Example for PostgreSQL:

\`\`\`
// .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
\`\`\`

---

## Step 3: Define Your Schema

\`\`\`prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       Int     @id @default(autoincrement())
  name     String
  email    String  @unique
  posts    Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
\`\`\`

---

## Step 4: Run Migrations & Generate Client

\`\`\`bash
npx prisma migrate dev --name init
npx prisma generate
\`\`\`

---

## Step 5: Setup Express and Prisma Client

\`\`\`ts
// src/app.ts

import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: { title: "Welcome post" },
        },
      },
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "User creation failed", details: err });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server is running at http://localhost:\${PORT}\`);
});
\`\`\`

---

## Step 6: Try Common Queries

Find a user by email:

\`\`\`ts
const user = await prisma.user.findUnique({
  where: { email: "alice@example.com" },
});
\`\`\`

Update a post:

\`\`\`ts
await prisma.post.update({
  where: { id: 1 },
  data: { published: true },
});
\`\`\`

Delete a user:

\`\`\`ts
await prisma.user.delete({
  where: { id: 1 },
});
\`\`\`

---

## Bonus: Prisma Studio

To visually explore your DB:

\`\`\`bash
npx prisma studio
\`\`\`

Opens: http://localhost:5555

---

## Serverless Note: Prisma in Next.js vs Express

Prisma in **Next.js App Router or API routes** (serverless) behaves differently:

- Problem: New Prisma clients are created on every request — can exhaust DB connections
- Solution: Use a singleton pattern like this:

\`\`\`ts
// lib/prisma.ts (in Next.js)
import { PrismaClient } from "@prisma/client";
const globalForPrisma = globalThis as any;

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;
\`\`\`

This avoids creating multiple client instances in development/serverless.

---

## Final Thoughts

Prisma + Express.js offers a simple yet powerful fullstack combo.

With Prisma you get:

- Clean, readable code
- Type safety
- Great tooling (Studio, Migrations)
- Easy integration with REST, GraphQL, or tRPC

It's a must-have for any modern backend workflow.

`;

export default how_to_use_prisma_with_nodejs;
