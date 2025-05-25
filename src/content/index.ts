import how_to_initialize_shadcn_in_react from "./how-to-initilize-shadcn-in-react";
import how_to_use_bun_with_hono from "./how-to-use-bun-with-hono";
import how_to_use_redux_in_nextjs_with_typescript from "./how-to-use-redux-in-nextjs-with-typescript";
import trpc_nextjs_from_zero_to_fullstack_hero from "./trpc-nextjs-from-zero-to-fullstack-hero";

export interface Article {
  id: string;
  title: string;
  summary: string;
  label: string;
  slug: string;
  content: string;
  author: string;
  published: string;
  image: string;
  readTime: number; // in minutes
  views: number;
  tags: string[];
}

const ContentList = [
  // trpc nextjs - full stack
  {
    id: "4",
    title: "tRPC + Next.js: From Zero to Fullstack Hero",

    summary:
      "Go from zero to fullstack with tRPC and Next.js. Learn how to create typesafe APIs without REST or GraphQL using tRPC, Zod, and React Query.",
    label: "Fullstack",
    slug: "trpc-nextjs-from-zero-to-fullstack-hero",
    author: "Sagar Yenkure",
    published: "2025-04-12",
    image: "/trpc.jpg",
    tags: ["tRPC", "Next.js", "TypeScript", "Tutorial"],
    content: trpc_nextjs_from_zero_to_fullstack_hero,
    views: 1373,
    readTime: 10,
  },
  // How to Use Bun with Hono
  {
    id: "3",
    title: "How to Use Bun with Hono - A Lightweight Web Framework",
    summary:
      "Discover how to build high-performance web APIs using Bun and Hono — a lightweight, ultra-fast web framework for modern JavaScript runtimes.",
    label: "Backend",
    slug: "how-to-use-bun-with-hono",
    author: "Sagar Yenkure",
    published: "2025-03-28",
    image: "/hono.webp",
    tags: ["Bun", "Hono", "API", "JavaScript", "Tutorial"],
    content: how_to_use_bun_with_hono,
    views: 1843,
    readTime: 10,
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
    published: "2025-03-13",
    image: "/redux_nextjs.webp",
    tags: ["Next.js", "Redux", "TypeScript", "Tutorial"],
    content: how_to_use_redux_in_nextjs_with_typescript,
    views: 1473,
    readTime: 10,
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
    published: "2025-02-26",
    image: "/shadcn_nextjs.png",
    tags: ["React", "Vite", "shadcn/ui"],
    content: how_to_initialize_shadcn_in_react,
    views: 1297,
    readTime: 10,
  },
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Next.js", value: "nextjs" },
  { name: "React", value: "react" },
  { name: "TypeScript", value: "typescript" },
  { name: "JavaScript", value: "javascript" },
  { name: "Fullstack", value: "fullstack" },
  { name: "Tutorial", value: "tutorial" },
];

export default ContentList;
