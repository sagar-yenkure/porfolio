import Updates from "@/updates";
import getting_started_with_redis from "./getting-started-with-redis";
import getting_started_with_arcjet from "./getting_started_with_arcjet";
import how_to_initialize_shadcn_in_react from "./how-to-initilize-shadcn-in-react";
import how_to_use_redux_in_nextjs_with_typescript from "./how-to-use-redux-in-nextjs-with-typescript";
import how_to_send_emails_in_nodejs from "./how_to_send_emails_in_nodejs";
import how_to_upload_images_to_s3 from "./how_to_upload_images_to_s3";
import how_to_use_authjs_with_nextjs from "./how_to_use_authjs_with_nextjs";
import how_to_use_graphql_with_nodejs from "./how_to_use_graphql_with_nodejs";
import how_to_use_mongoose_with_nodejs from "./how_to_use_mongoose_with_nodejs";
import how_to_use_prisma_with_nodejs from "./how_to_use_prisma_with_nodejs";
import how_to_use_react_query_in_nextjs from "./how_to_use_react_query_in_nextjs";
import how_to_use_zod_in_typescript from "./how_to_use_zod_in_typescript";
import how_to_use_zustand_with_typescript from "./how_to_use_zustand_with_typescript";
import setup_databases_with_docker_gui from "./setup_databases_with_docker_gui";
import trpc_nextjs_from_zero_to_fullstack_hero from "./trpc-nextjs-from-zero-to-fullstack-hero";

export interface Article {
  id: number;
  title: string;
  summary: string;
  label: string;
  slug: string;
  content: string;
  author: string;
  keyword: string;
  published: string;
  image: string;
  readTime: number;
  views: number;
  tags: string[];
}

export const categories = [
  { name: "All", value: "all" },
  { name: "Updates", value: "Updates" },
  { name: "Next.js", value: "Next.js" },
  { name: "Backend", value: "Backend" },
  { name: "Database", value: "database" },
  { name: "Authentication & Security", value: "Authentication & Security" },
  { name: "State Management", value: "State Management" },
];



// this is all the tutorial and tech stuff
const ContentList: Article[] = [
  {
    id: 1,
    title: "How to Initialize a React Project Using Vite and shadcn/ui",
    summary:
      "A comprehensive guide to setting up a modern React project with Vite and shadcn/ui, including step-by-step instructions and best practices.",
    label: "Tutorial",
    slug: "initialize-react-vite-shadcn",
    author: "Sagar Yenkure",
    published: "2025-06-30",
    image: "/shadcn_nextjs.png",
    tags: ["React", "Vite", "shadcn/ui", "Next.js"],
    content: how_to_initialize_shadcn_in_react,
    views: 427,
    readTime: 10,
    keyword: "vite react setup, shadcn ui tutorial, react vite shadcn, initialize react with vite"
  },
  {
    id: 2,
    title: "How to use Redux in Next.js with TypeScript",
    summary:
      "Learn how to integrate Redux into a Next.js project using TypeScript. This guide covers setup, folder structure, best practices, and common patterns.",
    label: "Tutorial",
    slug: "how-to-use-redux-in-nextjs-with-typescript",
    author: "Sagar Yenkure",
    published: "2025-06-20",
    image: "/redux_nextjs.webp",
    tags: ["Next.js", "Redux", "TypeScript", "State Management"],
    content: how_to_use_redux_in_nextjs_with_typescript,
    views: 467,
    readTime: 10,
    keyword: "redux with nextjs, redux typescript guide, nextjs state management, redux toolkit nextjs"
  },
  {
    id: 3,
    title: "How to Use Zod in TypeScript Projects for Validation and Safety",
    summary:
      "Learn how to use Zod, a TypeScript-first schema validation library, to validate and type-check your data in both frontend and backend applications.",
    label: "Validation",
    slug: "how-to-use-zod-in-typescript",
    author: "Sagar Yenkure",
    published: "2025-07-10",
    image: "/zod_typescript.png",
    tags: ["Zod", "TypeScript", "Validation", "Backend", "Authentication & Security"],
    content: how_to_use_zod_in_typescript,
    views: 579,
    readTime: 8,
    keyword: "typescript form validation with zod, how to validate data using zod, type-safe API validation, zod infer typescript, form validation react zod, zod validation tutorial"
  },
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
    title: "Getting Started with Arcjet for Rate Limiting and Protection in Next.js",
    summary:
      "integrate Arcjet into your Next.js app to enable secure, features like rate limiting, bot protection, and spam prevention with minimal code.",
    label: "Security",
    slug: "getting-started-with-arcjet",
    author: "Sagar Yenkure",
    published: "2025-07-15",
    image: "/arcjet_nextjs.png",
    tags: ["Backend", "Rate Limiting", "Next.js", "Authentication & Security"],
    content: getting_started_with_arcjet,
    views: 559,
    readTime: 7,
    keyword: "arcjet nextjs integration, api rate limiting nextjs, arcjet bot protection, arcjet edge middleware, arcjet setup tutorial"
  },
  {
    id: 7,
    title: "How to Use Prisma with Node.js for Database Access",
    summary:
      "A complete guide on setting up and using Prisma ORM in a Node.js project. Learn how to define schemas, run migrations, and perform type-safe queries.",
    label: "Backend",
    slug: "how-to-use-prisma-with-nodejs",
    author: "Sagar Yenkure",
    published: "2025-07-18",
    image: "/prisma.png",
    tags: ["Prisma", "Node.js", "ORM", "PostgreSQL", "Database", "Backend"],
    content: how_to_use_prisma_with_nodejs,
    views: 485,
    readTime: 10,
    keyword: "prisma nodejs tutorial, nodejs orm guide, prisma typescript example, how to setup prisma, database orm nodejs, prisma migration schema"
  },
  {
    id: 8,
    title: "How to Use React Query in Next.js with Axios & Type Safety",
    summary:
      "A practical guide to using React Query in Next.js apps with a clean structure. Learn how to manage API calls using Axios.",
    label: "React Query",
    slug: "how-to-use-react-query-in-nextjs",
    author: "Sagar Yenkure",
    published: "2025-07-20",
    image: "/reactQuery.jpg",
    tags: ["React Query", "Next.js", "Axios", "TypeScript"],
    content: how_to_use_react_query_in_nextjs,
    views: 387,
    readTime: 9,
    keyword: "react query nextjs tutorial, axios react query setup, nextjs api hooks, react query folder structure, fetch data nextjs react query"
  },
  {
    id: 9,
    title: "How to Use Mongoose with Node.js and Express",
    summary:
      "Learn how to connect to MongoDB and build full CRUD APIs using Mongoose in a Node.js + Express setup.",
    label: "Database",
    slug: "how-to-use-mongoose-with-nodejs",
    author: "Sagar Yenkure",
    published: "2025-07-25",
    image: "/mongoose.png",
    tags: ["MongoDB", "Mongoose", "Node.js", "Express"],
    content: how_to_use_mongoose_with_nodejs,
    views: 625,
    readTime: 8,
    keyword: "mongoose nodejs tutorial, express mongodb api, mongoose schema validation, mongodb express crud, how to use mongoose"
  },
  {
    id: 10,
    title: "Using Zustand with TypeScript in Next.js for Global State",
    summary:
      "Learn how to manage global state in Next.js apps using Zustand and TypeScript. Covers typed stores, folder structure, async actions, and persistence.",
    label: "State Management",
    slug: "zustand-typescript-nextjs",
    author: "Sagar Yenkure",
    published: "2025-08-02",
    image: "/zustand.jpg",
    tags: ["Zustand", "Next.js", "TypeScript", "State Management"],
    content: how_to_use_zustand_with_typescript,
    views: 634,
    readTime: 7,
    keyword: "zustand with typescript nextjs, zustand global state react, typescript zustand store, zustand async fetch, zustand persist middleware"
  },
  {
    id: 11,
    title: "How to Send Emails in Node.js / Next.js – Gmail SMTP & Resend Integration",
    summary:
      "Learn how to send emails in Node.js or Next.js apps using two reliable methods — Gmail SMTP with Nodemailer and Resend API with a verified domain.",
    label: "Mail",
    slug: "how-to-send-emails-in-nodejs",
    author: "Sagar Yenkure",
    published: "2025-08-05",
    image: "/nodemailer.jpg",
    tags: ["Node.js", "Next.js", "Email", "SMTP", "Backend", "Nodemailer"],
    content: how_to_send_emails_in_nodejs,
    views: 472,
    readTime: 7,
    keyword: "send email in nodejs, send email in nextjs, gmail smtp nodemailer, resend api nextjs, email integration nodejs, how to use resend email api"
  },
  {
    id: 12,
    title: "How to Use Auth.js in Next.js",
    summary:
      "Learn how to implement secure authentication in your Next.js app using Auth.js (NextAuth) with both email/password credentials and Google OAuth provider.",
    label: "Authentication",
    slug: "how-to-use-authjs-with-nextjs",
    author: "Sagar Yenkure",
    published: "2025-08-08",
    image: "/nextauth.png",
    tags: ["Next.js", "Auth.js", "Authentication", "OAuth", "JWT"],
    content: how_to_use_authjs_with_nextjs,
    views: 587,
    readTime: 9,
    keyword: "google auth nextjs, authjs with jwt session, how to use next-auth with email and google, custom login with next-auth, secure login nextjs authjs, nextjs auth with credentials and google"
  },
  {
    id: 13,
    title: "Upload Images to AWS S3 using Node.js and Multer",
    summary:
      "Learn how to upload images to an Amazon S3 bucket using Node.js, Express, Multer, and the AWS SDK. This guide covers everything from setup to secure file handling.",
    label: "Backend",
    slug: "upload-images-to-s3-nodejs",
    author: "Sagar Yenkure",
    published: "2025-08-12",
    image: "/s3.png",
    tags: ["AWS S3", "Node.js", "Multer", "Express", "Backend"],
    content: how_to_upload_images_to_s3,
    views: 588,
    readTime: 8,
    keyword: "upload image to s3 nodejs, aws s3 file upload, express multer s3, s3 bucket image upload tutorial, nodejs aws sdk image upload, multer s3 integration, secure file upload to s3"
  },
  {
    id: 14,
    title: "GraphQL with Node.js: Build a Type-Safe API with Express",
    summary:
      "Learn how to set up a GraphQL API using Node.js, Express, and express-graphql. Build a typed schema, write resolvers, and run a flexible backend.",
    label: "Backend",
    slug: "graphql-with-nodejs-api-setup",
    author: "Sagar Yenkure",
    published: "2025-08-15",
    image: "/graphql.jpg",
    tags: ["GraphQL", "Node.js", "Express", "API"],
    content: how_to_use_graphql_with_nodejs,
    views: 522,
    readTime: 8,
    keyword: "graphql nodejs tutorial, how to use graphql with express, nodejs graphql api, express-graphql example, graphql schema and resolvers, graphql api in nodejs, graphql express typescript"
  },
  {
    id: 15,
    title: "Run PostgreSQL and MongoDB Locally with Docker and GUI Access",
    summary:
      "Learn how to run PostgreSQL and MongoDB in your local development environment using Docker, with GUI access via pgAdmin and Mongo Express.",
    label: "DevOps",
    slug: "docker-postgresql-mongodb-with-gui",
    author: "Sagar Yenkure",
    published: "2025-08-20",
    image: "/db_docker.png",
    tags: ["database", "PostgreSQL", "MongoDB", "pgAdmin", "Mongo Express", "DevOps"],
    content: setup_databases_with_docker_gui,
    views: 433,
    readTime: 9,
    keyword: "docker postgresql setup, run mongodb with docker, docker-compose for databases, pgadmin docker tutorial, mongo express gui"
  },

  ...Updates
];



export default ContentList;
