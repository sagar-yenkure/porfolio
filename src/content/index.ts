import getting_started_with_redis from "./getting-started-with-redis";
import getting_started_with_arcjet from "./getting_started_with_arcjet";
import how_to_initialize_shadcn_in_react from "./how-to-initilize-shadcn-in-react";
import how_to_use_bun_with_hono from "./how-to-use-bun-with-hono";
import how_to_use_redux_in_nextjs_with_typescript from "./how-to-use-redux-in-nextjs-with-typescript";
import how_to_use_mongoose_with_nodejs from "./how_to_use_mongoose_with_nodejs";
import how_to_use_prisma_with_nodejs from "./how_to_use_prisma_with_nodejs";
import how_to_use_react_query_in_nextjs from "./how_to_use_react_query_in_nextjs";
import how_to_use_zod_in_typescript from "./how_to_use_zod_in_typescript";
import trpc_nextjs_from_zero_to_fullstack_hero from "./trpc-nextjs-from-zero-to-fullstack-hero";

export interface Article {
  id: string;
  title: string;
  summary: string;
  label: string;
  slug: string;
  content: string;
  author: string;
  keyword: string;
  published: string;
  image: string;
  readTime: number; // in minutes
  views: number;
  tags: string[];
}

export const categories = [
  { name: "All", value: "all" },
  { name: "Next.js", value: "nextjs" },
  { name: "React", value: "react" },
  { name: "TypeScript", value: "typescript" },
  { name: "JavaScript", value: "javascript" },
  { name: "Fullstack", value: "fullstack" },
  { name: "Tutorial", value: "tutorial" },
];

const ContentList = [
  // tRPC + Next.js - Fullstack Hero
  {
    id: "4",
    title: "tRPC + Next.js: From Zero to Fullstack Hero",
    summary:
      "Go from zero to fullstack with tRPC and Next.js. Learn how to create typesafe APIs without REST or GraphQL using tRPC, Zod, and React Query.",
    label: "Fullstack",
    slug: "trpc-nextjs-from-zero-to-fullstack-hero",
    author: "Sagar Yenkure",
    published: "2025-06-12",
    image: "/trpc.jpg",
    tags: ["tRPC", "Next.js", "TypeScript", "Tutorial"],
    content: trpc_nextjs_from_zero_to_fullstack_hero,
    views: 576,
    readTime: 10,
    keyword: "trpc nextjs tutorial, typesafe api nextjs, fullstack typescript, trpc react query zod"
  },

  // How to use Redux in Next.js with TypeScript
  {
    id: "2",
    title: "How to use Redux in Next.js with TypeScript",
    summary:
      "Learn how to integrate Redux into a Next.js project using TypeScript. This guide covers setup, folder structure, best practices, and common patterns.",
    label: "Tutorial",
    slug: "how-to-use-redux-in-nextjs-with-typescript",
    author: "Sagar Yenkure",
    published: "2025-06-20",
    image: "/redux_nextjs.webp",
    tags: ["Next.js", "Redux", "TypeScript", "Tutorial"],
    content: how_to_use_redux_in_nextjs_with_typescript,
    views: 467,
    readTime: 10,
    keyword: "redux with nextjs, redux typescript guide, nextjs state management, redux toolkit nextjs"
  },

  // How to Initialize a React Project Using Vite and shadcn/ui
  {
    id: "1",
    title: "How to Initialize a React Project Using Vite and shadcn/ui",
    summary:
      "A comprehensive guide to setting up a modern React project with Vite and shadcn/ui, including step-by-step instructions and best practices.",
    label: "Tutorial",
    slug: "initialize-react-vite-shadcn",
    author: "Sagar Yenkure",
    published: "2025-06-30",
    image: "/shadcn_nextjs.png",
    tags: ["React", "Vite", "shadcn/ui"],
    content: how_to_initialize_shadcn_in_react,
    views: 427,
    readTime: 10,
    keyword: "vite react setup, shadcn ui tutorial, react vite shadcn, initialize react with vite"
  },

  // Getting Started with Redis
  {
    id: "5",
    title: "Getting Started with Redis: A Guide to Fast In-Memory Data Storage",
    summary:
      "Explore the fundamentals of Redis — a powerful in-memory key-value store used for caching, Perfect for beginners and backend developers.",
    label: "Database",
    slug: "getting-started-with-redis",
    author: "Sagar Yenkure",
    published: "2025-07-05",
    image: "/redis_nextjs.png",
    tags: ["Redis", "Database", "Caching", "Performance", "Tutorial"],
    content: getting_started_with_redis,
    views: 323,
    readTime: 9,
    keyword: "redis tutorial, what is redis, redis for beginners, redis caching guide, redis key value store, in-memory database tutorial"
  },

  // How to Use Zod in TypeScript Projects for Validation and Safety
  {
    id: "6",
    title: "How to Use Zod in TypeScript Projects for Validation and Safety",
    summary:
      "Learn how to use Zod, a TypeScript-first schema validation library, to validate and type-check your data in both frontend and backend applications.",
    label: "Validation",
    slug: "how-to-use-zod-in-typescript",
    author: "Sagar Yenkure",
    published: "2025-07-10",
    image: "/zod_typescript.png",
    tags: ["Zod", "TypeScript", "Validation", "Schema"],
    content: how_to_use_zod_in_typescript,
    views: 579,
    readTime: 8,
    keyword: "typescript form validation with zod, how to validate data using zod, type-safe API validation, zod infer typescript, form validation react zod, zod validation tutorial",
  },

  // Getting Started with Arcjet for Rate Limiting and Protection in Next.js
  {
    id: "7",
    title: "Getting Started with Arcjet for Rate Limiting and Protection in Next.js",
    summary:
      "integrate Arcjet into your Next.js app to enable secure, features like rate limiting, bot protection, and spam prevention with minimal code.",
    label: "Security",
    slug: "getting-started-with-arcjet",
    author: "Sagar Yenkure",
    published: "2025-07-15",
    image: "/arcjet_nextjs.png",
    tags: ["Arcjet", "Rate Limiting", "Next.js", "API Security"],
    content: getting_started_with_arcjet,
    views: 559,
    readTime: 7,
    keyword: "arcjet nextjs integration, api rate limiting nextjs, arcjet bot protection, arcjet edge middleware, arcjet setup tutorial"
  },

  // How to Use Prisma with Node.js for Database Access
  {
    id: "8",
    title: "How to Use Prisma with Node.js for Database Access",
    summary:
      "A complete guide on setting up and using Prisma ORM in a Node.js project. Learn how to define schemas, run migrations, and perform type-safe queries.",
    label: "Backend",
    slug: "how-to-use-prisma-with-nodejs",
    author: "Sagar Yenkure",
    published: "2025-07-18",
    image: "/prisma.png",
    tags: ["Prisma", "Node.js", "ORM", "PostgreSQL", "Database"],
    content: how_to_use_prisma_with_nodejs,
    views: 485,
    readTime: 10,
    keyword:
      "prisma nodejs tutorial, nodejs orm guide, prisma typescript example, how to setup prisma, database orm nodejs, prisma migration schema"
  },

  // How to Use React Query in Next.js with Axios & Type Safety
  {
    id: "9",
    title: "How to Use React Query in Next.js with Axios & Type Safety",
    summary:
      "A practical guide to using React Query in Next.js apps with a clean structure. Learn how to manage API calls using Axios.",
    label: "React Query",
    slug: "how-to-use-react-query-in-nextjs",
    author: "Sagar Yenkure",
    published: "2025-07-20",
    image: "/reactQuery.jpg",
    tags: ["React Query", "Next.js", "Axios", "TypeScript",],
    content: how_to_use_react_query_in_nextjs,
    views: 387,
    readTime: 9,
    keyword: "react query nextjs tutorial, axios react query setup, nextjs api hooks, react query folder structure, fetch data nextjs react query"
  },

  // How to Use Mongoose with Node.js and Express
  {
    id: "10",
    title: "How to Use Mongoose with Node.js and Express",
    summary: "Learn how to connect to MongoDB and build full CRUD APIs using Mongoose in a Node.js + Express setup.",
    label: "Database",
    slug: "how-to-use-mongoose-with-nodejs",
    author: "Sagar Yenkure",
    published: "2025-07-12",
    image: "/mongoose.png",
    tags: ["MongoDB", "Mongoose", "Node.js", "Express"],
    content: how_to_use_mongoose_with_nodejs,
    views: 625,
    readTime: 8,
    keyword: "mongoose nodejs tutorial, express mongodb api, mongoose schema validation, mongodb express crud, how to use mongoose"
  }

];


export default ContentList;
