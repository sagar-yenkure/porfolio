const getting_started_with_arcjet = `

If you're building a public-facing app and want protection from spam, abuse, or bots — without sacrificing performance or privacy — **Arcjet** is a tool worth trying.

In this guide, we’ll walk through what Arcjet is and how to use it with a modern **Next.js** app.

---

## What is Arcjet?

Arcjet is a **privacy-first edge protection platform** for developers. It gives you powerful tools like:

- Rate limiting  
- Bot and spam protection  
- Email validation  
- Shielding against attacks like SQL injection, XSS, CSRF  
- Identity-based traffic control  
- Edge middleware support

It's designed to integrate seamlessly with frameworks like **Next.js**, **Remix**, **Express**, and even **Cloudflare Workers** — running globally on the edge.

---

## Step 1: Install Arcjet

\`\`\`bash
npm install @arcjet/next
\`\`\`

---

## Step 2: Set Your Arcjet Project Token

1. Go to [https://arcjet.com](https://arcjet.com)
2. Sign up and create a project
3. Copy your project token and set it in .env:

\`\`\`
//.env
ARCJET_KEY=your-token-here
\`\`\`

---

## Step 3: Middleware Protection with Arcjet

### 1. Attack Protection (SQL Injection, XSS, CSRF)

\`\`\`ts
// middleware.ts
import arcjet, { createMiddleware, shield } from "@arcjet/next";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({
      mode: "LIVE", // Use "DRY_RUN" for logging only
    }),
  ],
});

export default createMiddleware(aj);
\`\`\`

---

### 2. Bot Detection Middleware

\`\`\`ts
// middleware.ts
import arcjet, { createMiddleware, detectBot } from "@arcjet/next";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "TWITTER_CRAWLER",
      ],
    }),
  ],
});

export default async function middleware(request: NextRequest) {
  const decision = await aj.protect(request);

  if (decision.isDenied() && decision.reason.isBot()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  } else {
    return NextResponse.next();
  }
}
\`\`\`

---

## Step 4: Rate Limiting Example

\`\`\`ts
// /app/api/arcjet/route.ts
import arcjet, { tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["userId", "src.ip"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export async function GET(req: Request) {
  const userId = "user123";

  const decision = await aj.protect(req, { userId, requested: 5 });

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 }
    );
  }

  return NextResponse.json({ message: "Hello world" });
}
\`\`\`

---

## Step 5: Email Validation

\`\`\`ts
// /app/api/arcjet/route.ts
import arcjet, { validateEmail } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    validateEmail({
      mode: "LIVE",
      deny: ["DISPOSABLE", "NO_MX_RECORDS", "INVALID"],
    }),
  ],
});

export async function POST(req: Request) {
  const decision = await aj.protect(req, {
    email: "fake@arcjet.ai",
  });

  if (decision.isDenied()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ message: "Hello world" });
}
\`\`\`

---

## Step 6: Full Signup Protection

\`\`\`ts
// /app/api/arcjet/route.ts
import arcjet, { protectSignup } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    protectSignup({
      email: {
        mode: "LIVE",
        deny: ["DISPOSABLE", "NO_MX_RECORDS", "INVALID"],
      },
      bots: {
        mode: "LIVE",
        allow: [],
      },
      rateLimit: {
        mode: "LIVE",
        interval: "10m",
        max: 5,
      },
    }),
  ],
});

export async function POST(req: Request) {
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    return NextResponse.json({ error: "Blocked" }, { status: 403 });
  }

  return NextResponse.json({ message: "Signup allowed" });
}
\`\`\`

---

## Why Use Arcjet?

Unlike manual solutions using Redis, Arcjet provides:

- **Zero setup** edge protection
- **Built-in bot and spam detection**
- **No cold starts, no latency**
- **Privacy-focused** — no IP tracking
- Works perfectly with **Vercel**, **Netlify**, and **Edge Functions**

---

## Final Thoughts

Arcjet makes it incredibly easy to secure your Next.js (or any modern) application. Whether it's preventing bot abuse, blocking SQL injections, or validating emails — you can do it all with just a few lines of configuration.

Start small by protecting your contact or signup APIs — and scale up confidently.

`;

export default getting_started_with_arcjet;
