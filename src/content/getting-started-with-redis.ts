const how_to_use_redis = `

In this guide, you'll learn how to use Redis in your Node.js or serverless app using **ioredis** — a robust Redis client that works seamlessly with **Upstash** and other Redis providers. We’ll walk through setting up Redis, exploring its data types, and implementing real-world use cases like caching, OTP storage, session handling, and pub/sub messaging.

---

## Step 1: Initialize Redis with ioredis

We’ll use **Upstash** (a serverless Redis provider) in this guide, but you can connect to any Redis instance.

### Install ioredis

\`\`\`bash
npm install ioredis
\`\`\`

### Add Redis credentials

\`\`\`
// .env

REDIS_URL=your-upstash-redis-url
\`\`\`

### Set up Redis client

\`\`\`ts
// lib/redis.ts
import { Redis } from "ioredis";

if (!process.env.REDIS_URL)
  throw new Error("REDIS_URL is not defined in the environment variables.");

export const redis = new Redis(process.env.REDIS_URL);
\`\`\`

---

## Step 2: What Data Can Redis Store?

Redis supports several flexible and high-performance data types:

- **String** – Plain values: numbers, text, JSON  
- **Hash** – Store objects like JSON with fields  
- **List** – Ordered collection of strings (queue/stack)  
- **Set** – Unique unordered collection  
- **Sorted Set (ZSet)** – Like Set, but sorted by score  
- **Stream** – Log-based, append-only structure  
- **Pub/Sub** – Built-in publish/subscribe messaging  
- **Geo, HyperLogLog, Bitmap** – For geolocation, approximate counting, bit ops  

---

## Step 3: Examples for Each Redis Data Type

### String

\`\`\`ts
await redis.set("greeting", "Hello Redis");
const value = await redis.get("greeting");
\`\`\`

---

### Hash

\`\`\`ts
await redis.hset("user:1", { name: "Alice", age: "25" });
const user = await redis.hgetall("user:1");
\`\`\`

---

### List

\`\`\`ts
await redis.rpush("todos", "task1", "task2");
const tasks = await redis.lrange("todos", 0, -1);
\`\`\`

---

### Set

\`\`\`ts
await redis.sadd("tags", "nodejs", "redis", "ioredis");
const tags = await redis.smembers("tags");
\`\`\`

---

### Sorted Set (ZSet)

\`\`\`ts
await redis.zadd("leaderboard", 100, "Alice", 80, "Bob");
const top = await redis.zrevrange("leaderboard", 0, -1, "WITHSCORES");
\`\`\`

---

### Stream

\`\`\`ts
await redis.xadd("logs", "*", "event", "login", "user", "Alice");
const logs = await redis.xrange("logs", "-", "+");
\`\`\`

---

### Pub/Sub

\`\`\`ts
// publisher.ts
await redis.publish("chat", "New message!");

// subscriber.ts
const subscriber = redis.duplicate();
await subscriber.subscribe("chat");
subscriber.on("message", (channel, message) => {
  console.log(\`[\${channel}]: \${message}\`);
});
\`\`\`

---

## Step 4: Real-World Use Cases

---

### Use Case 1: Caching API Responses

EX stands for "expire"
It is used to define how long a key should live before automatically being deleted by Redis
\`\`\`ts
// api/products.ts
const cached = await redis.get("products");
if (cached) return JSON.parse(cached);

const products = await fetchFromDB();
await redis.set("products", JSON.stringify(products), "EX", 300);

 // "EX", "300 tells Redis to expire the key after 300 seconds (5 minutes)"
\`\`\`

---

### Use Case 2: Storing OTPs Temporarily


\`\`\`ts
// api/send-otp.ts
import { redis } from "@/lib/redis";
await redis.set("otp:user:123", "924183", "EX", 300);

// api/verify-otp.ts
import { redis } from "@/lib/redis";
const otp = await redis.get("otp:user:123");

\`\`\`

---

### Use Case 3: Rate Limiting

\`\`\`ts
// lib/get-ip.ts
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown-ip";
}
\`\`\`

\`\`\`ts
// api/rate-limit.ts
import { redis } from "@/lib/redis";
import { getClientIp } from "@/lib/get-ip";

export async function GET(req: Request) {
  const ip = getClientIp(req);
  const count = await redis.incr(ip);

  if (count === 1) {
    await redis.expire(ip, 60);
  }

  if (count > 10) {
    return new Response("Too many requests", { status: 429 });
  }

  return new Response("Allowed");
}
\`\`\`

---

### Use Case 4: Session Management

\`\`\`ts
await redis.set("session:token_abc", JSON.stringify({ userId: "123" }), "EX", 86400);
const session = await redis.get("session:token_abc");
\`\`\`

---

### Use Case 5: Real-Time Messaging with Pub/Sub

\`\`\`ts
await redis.publish("chat-room", "New message from Alice!");
\`\`\`

\`\`\`ts
const subscriber = redis.duplicate();
await subscriber.subscribe("chat-room");
subscriber.on("message", (channel, message) => {
  console.log(\`[\${channel}]: \${message}\`);
});
\`\`\`

---

## Redis with Upstash (Recommended for Serverless)

**Upstash** is a Redis provider that works perfectly with Vercel, Netlify, and serverless platforms.

Benefits:

- HTTP-based API (also supports ioredis)
- Global low-latency edge network
- Pay-per-use pricing

---

## Final Thoughts

Redis is more than a key-value store — it’s a fast, flexible real-time data engine.

With **ioredis** and **Upstash**, you get a production-ready Redis setup in minutes. From caching and rate limiting to pub/sub and session storage, Redis is a foundational tool for modern backend development.

`;

export default how_to_use_redis;
