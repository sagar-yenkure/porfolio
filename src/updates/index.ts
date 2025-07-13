import { Article } from "@/content";
import prisma_rust_to_ts_rewrite from "./prisma_rust_to_ts_rewrite";
import how_to_use_gemini_cli from "./how_to_use_gemini_cli";



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
        published: "2025-07-10",
        image: "/prisma_rt_to_ts.svg",
        tags: ["Updates", "Backend", "ORM", "Rust", "TypeScript"],
        content: prisma_rust_to_ts_rewrite,
        views: 477,
        readTime: 9,
        keyword: "prisma typescript engine, prisma rust vs typescript, prisma query compiler wasm, prisma edge support, prisma orm future roadmap, binary free prisma, prisma early access client",
    },

    // 📅 2025-07-14 –  Google CLI (how to use google CLI)
    {
        id: 102,
        title: "How to Use Gemini CLI: Google's Open-Source AI in Your Terminal",
        summary:
            "Learn how to use Gemini CLI — Google’s open-source AI agent — directly from your terminal. We’ll cover installation, core features.",
        label: "AI Tools",
        slug: "how-to-use-gemini-cli",
        author: "Sagar Yenkure",
        published: "2025-07-14",
        image: "/gemini_cli.png",
        tags: ["Updates", "Gemini CLI", "Google AI", "Terminal"],
        content: how_to_use_gemini_cli,
        views: 256,
        readTime: 7,
        keyword: "gemini cli tutorial, how to use gemini in terminal, google ai cli tool, gemini cli in react, gemini code assist setup, google gemini open source cli, gemini cli react integration"
    }
]

export default Updates