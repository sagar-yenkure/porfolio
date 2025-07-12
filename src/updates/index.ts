import { Article } from "@/content";
import prisma_rust_to_ts_rewrite from "./prisma_rust_to_ts_rewrite";



// this is the tech news and updates
const Updates: Article[] = [
    {
        id: 101,
        title: "Prisma ORM is Moving from Rust to TypeScript – What You Need to Know",
        summary:
            "Prisma is rewriting its core query engine from Rust to TypeScript. This blog explains why, what changes, and how it affects developers using Prisma ORM today.",
        label: "ORM",
        slug: "prisma-orm-rust-to-typescript-rewrite",
        author: "Sagar Yenkure",
        published: "2025-08-15",
        image: "/prisma_rt_to_ts.svg",
        tags: ["Updates", "Backend", "ORM", "Rust", "TypeScript"],
        content: prisma_rust_to_ts_rewrite,
        views: 477,
        readTime: 9,
        keyword: "prisma typescript engine, prisma rust vs typescript, prisma query compiler wasm, prisma edge support, prisma orm future roadmap, binary free prisma, prisma early access client",
    }
]

export default Updates