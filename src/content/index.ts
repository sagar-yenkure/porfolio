import Updates from "@/updates";
import getting_started_with_redis from "./getting-started-with-redis";
import getting_started_with_arcjet from "./getting_started_with_arcjet";
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
import secure_server_actions_in_nextjs from "./secure_server_actions_in_nextjs";

export interface Article {
  id: number;
  title: string;
  titleJp?: string;
  summary: string;
  summaryJp?: string;
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
  {
    value: "all",
    en: "All",
    jp: "すべて",
  },
  {
    value: "Updates",
    en: "Updates",
    jp: "アップデート",
  },
  {
    value: "Next.js",
    en: "Next.js",
    jp: "Next.js",
  },
  {
    value: "Backend",
    en: "Backend",
    jp: "バックエンド",
  },
  {
    value: "database",
    en: "Database",
    jp: "データベース",
  },
  {
    value: "Authentication & Security",
    en: "Authentication & Security",
    jp: "認証とセキュリティ",
  },
  {
    value: "State Management",
    en: "State Management",
    jp: "状態管理",
  },
];

// this is all the tutorial and tech stuff
const ContentList: Article[] = [

  // 📅 2025-07-21 –  Server Actions + next-safe-action
  {
    id: 1,
    title: "How to Secure Next.js Server Actions using next-safe-action",
    titleJp: "Next.jsのServer Actionsをnext-safe-actionで安全に実装する方法",
    summary:
      "Learn how to protect your Next.js App Router Server Actions against security vulnerabilities using next-safe-action and Zod validation.",
    summaryJp:
      "Next.js App RouterのServer Actionsをnext-safe-actionとZodバリデーションでセキュリティ保護する実践ガイド。",
    label: "Security",
    slug: "secure-server-actions-in-nextjs",
    author: "Sagar Yenkure",
    published: "2025-07-21",
    image: "/server_Actions.png",
    tags: ["Next.js", "Server Actions", "Security", "TypeScript", "Backend"],
    content: secure_server_actions_in_nextjs,
    views: 392,
    readTime: 7,
    keyword: "nextjs server actions secure, next-safe-action example, how to use server actions securely, nextjs server actions with typescript, nextjs security best practices"
  },

  // 📅 2025-07-28 –  Redux (Intro State Management)
  {
    id: 2,
    title: "Mastering Redux Toolkit in Next.js App Router with TypeScript",
    titleJp: "Next.js App RouterとTypeScriptで学ぶRedux Toolkit実践ガイド",
    summary:
      "Complete step-by-step guide to integrating Redux Toolkit into Next.js App Router with TypeScript, custom typed hooks, and SSR persistence.",
    summaryJp:
      "Redux ToolkitをNext.js App RouterとTypeScriptに組み込み、型安全なグローバル状態管理を実現する方法。",
    label: "Tutorial",
    slug: "how-to-use-redux-in-nextjs-with-typescript",
    author: "Sagar Yenkure",
    published: "2025-07-28",
    image: "/redux_nextjs.webp",
    tags: ["Next.js", "Redux", "TypeScript", "State Management"],
    content: how_to_use_redux_in_nextjs_with_typescript,
    views: 467,
    readTime: 10,
    keyword: "redux with nextjs, redux typescript guide, nextjs state management, redux toolkit nextjs app router, useAppSelector typescript"
  },

  // 📅 2025-08-04 –  Zod (Form & API Validation)
  {
    id: 3,
    title: "TypeScript Validation Masterclass: How to Use Zod for Form & API Safety",
    titleJp: "TypeScript開発者のためのZod完全ガイド: フォームとAPIの型安全バリデーション",
    summary:
      "Master runtime data validation in TypeScript with Zod. Learn schema inference, form validation, custom error handling, and API type safety.",
    summaryJp:
      "Zodを使ったTypeScriptのランタイムデータバリデーション入門。スキーマ推論、フォーム検証、API型安全性を解説。",
    label: "Validation",
    slug: "how-to-use-zod-in-typescript",
    author: "Sagar Yenkure",
    published: "2025-08-04",
    image: "/zod_typescript.png",
    tags: ["Zod", "TypeScript", "Validation", "Backend", "Authentication & Security"],
    content: how_to_use_zod_in_typescript,
    views: 579,
    readTime: 8,
    keyword: "typescript form validation with zod, how to validate data using zod, type-safe API validation, zod infer typescript, form validation react zod, zod validation tutorial"
  },

  // 📅 2025-08-08 –  Zustand (Advanced Global State)
  {
    id: 10,
    title: "Zustand & Next.js: Lightweight Global State Management with TypeScript",
    titleJp: "Zustand × Next.js: TypeScriptによる軽量なグローバル状態管理入門",
    summary:
      "Ditch heavy state management! Learn how to manage global state in Next.js using Zustand, TypeScript, persistent middleware, and async actions.",
    summaryJp:
      "ZustandとTypeScriptを使ってNext.jsで軽快な状態管理を行う方法。永続化ミドルウェアや非同期アクションを解説。",
    label: "State Management",
    slug: "zustand-typescript-nextjs",
    author: "Sagar Yenkure",
    published: "2025-08-08",
    image: "/zustand.jpg",
    tags: ["Zustand", "Next.js", "TypeScript", "State Management"],
    content: how_to_use_zustand_with_typescript,
    views: 634,
    readTime: 7,
    keyword: "zustand with typescript nextjs, zustand global state react, typescript zustand store, zustand async fetch, zustand persist middleware"
  },

  // 📅 2025-08-11 –  Redis (Data Caching Basics)
  {
    id: 5,
    title: "Redis for Beginners: High-Performance Caching & In-Memory Storage",
    titleJp: "初心者向けRedis入門: 高速インメモリデータストレージとキャッシュ活用法",
    summary:
      "Master Redis fundamentals! Learn key-value storage, caching strategies, rate limiting, and pub/sub patterns for high-performance backend apps.",
    summaryJp:
      "Redisの基本概念をマスター。キー・バリューストレージ、キャッシュ戦略、レート制限、Pub/Subパターンを解説。",
    label: "Database",
    slug: "getting-started-with-redis",
    author: "Sagar Yenkure",
    published: "2025-08-11",
    image: "/redis_nextjs.png",
    tags: ["Redis", "Database", "Caching", "Performance", "Tutorial"],
    content: getting_started_with_redis,
    views: 323,
    readTime: 9,
    keyword: "redis tutorial, what is redis, redis for beginners, redis caching guide, redis key value store, in-memory database tutorial"
  },

  // 📅 2025-08-14 –  tRPC (Advanced Fullstack Type Safety)
  {
    id: 4,
    title: "tRPC + Next.js App Router: Build 100% Type-Safe Fullstack APIs",
    titleJp: "tRPC + Next.js App Router: 100%型安全なフルスタックAPI開発入門",
    summary:
      "Go from zero to fullstack hero with tRPC and Next.js. Build end-to-end type-safe APIs without writing REST endpoints or GraphQL schemas.",
    summaryJp:
      "RESTやGraphQLを書かずにNext.jsとtRPCでエンドツーエンドの型安全APIを構築する方法を完全解説。",
    label: "Fullstack",
    slug: "trpc-nextjs-from-zero-to-fullstack-hero",
    author: "Sagar Yenkure",
    published: "2025-08-14",
    image: "/trpc.jpg",
    tags: ["tRPC", "Next.js", "TypeScript", "Tutorial"],
    content: trpc_nextjs_from_zero_to_fullstack_hero,
    views: 576,
    readTime: 10,
    keyword: "trpc nextjs tutorial, typesafe api nextjs, fullstack typescript, trpc react query zod"
  },

  // 📅 2025-08-18 –  Mongoose (MongoDB + Express)
  {
    id: 9,
    title: "Building RESTful APIs with MongoDB, Mongoose & Express in Node.js",
    titleJp: "Node.js × Expressで構築するMongoDBとMongooseによるREST API開発",
    summary:
      "Learn how to connect to MongoDB, design Mongoose schemas, handle data validation, and build complete CRUD REST APIs using Node.js & Express.",
    summaryJp:
      "MongoDB接続からMongooseスキーマ設計、バリデーション処理、完全なCRUD REST APIの作成方法。",
    label: "Database",
    slug: "how-to-use-mongoose-with-nodejs",
    author: "Sagar Yenkure",
    published: "2025-08-18",
    image: "/mongoose.png",
    tags: ["MongoDB", "Mongoose", "Node.js", "Express"],
    content: how_to_use_mongoose_with_nodejs,
    views: 625,
    readTime: 8,
    keyword: "mongoose nodejs tutorial, express mongodb api, mongoose schema validation, mongodb express crud, how to use mongoose"
  },

  // 📅 2025-08-25 –  Prisma ORM (Type-Safe SQL Access)
  {
    id: 7,
    title: "The Ultimate Prisma ORM Guide for Node.js & TypeScript Developers",
    titleJp: "TypeScript開発者のためのPrisma ORM入門: Node.jsデータベース構築ガイド",
    summary:
      "Master Prisma ORM with Node.js and PostgreSQL! Step-by-step guide covering schema modeling, database migrations, relations, and type-safe queries.",
    summaryJp:
      "Node.jsとPostgreSQL環境でPrisma ORMをマスター。スキーマ定義、マイグレーション、リレーション、型安全クエリを解説。",
    label: "Backend",
    slug: "how-to-use-prisma-with-nodejs",
    author: "Sagar Yenkure",
    published: "2025-08-25",
    image: "/prisma.png",
    tags: ["Prisma", "Node.js", "ORM", "PostgreSQL", "Database", "Backend"],
    content: how_to_use_prisma_with_nodejs,
    views: 485,
    readTime: 10,
    keyword: "prisma nodejs tutorial, nodejs orm guide, prisma typescript example, how to setup prisma, database orm nodejs, prisma migration schema"
  },

  // 📅 2025-09-01 –  Nodemailer + Resend (Email)
  {
    id: 11,
    title: "How to Send Emails in Node.js & Next.js: Gmail SMTP vs Resend API",
    titleJp: "Node.js / Next.jsでメール送信: Gmail SMTPとResend APIの実践比較",
    summary:
      "Learn how to send transactional emails in Node.js and Next.js using Nodemailer with Gmail SMTP or the modern Resend email API.",
    summaryJp:
      "Nodemailer（Gmail SMTP）とResend APIの2つの手法を使ってNode.js / Next.jsアプリでメール送信を実装する方法。",
    label: "Mail",
    slug: "how-to-send-emails-in-nodejs",
    author: "Sagar Yenkure",
    published: "2025-09-01",
    image: "/nodemailer.jpg",
    tags: ["Node.js", "Next.js", "Email", "SMTP", "Backend", "Nodemailer"],
    content: how_to_send_emails_in_nodejs,
    views: 472,
    readTime: 7,
    keyword: "send email in nodejs, send email in nextjs, gmail smtp nodemailer, resend api nextjs, email integration nodejs, how to use resend email api"
  },

  // 📅 2025-09-08 –  Auth.js (JWT, OAuth)
  {
    id: 12,
    title: "Complete Auth.js (NextAuth v5) Guide for Next.js: Credentials & Google OAuth",
    titleJp: "Next.jsでのAuth.js (NextAuth v5) 完全ガイド: Credentials認証とGoogle OAuth",
    summary:
      "Implement secure authentication in Next.js App Router with Auth.js. Learn how to configure Google OAuth, custom credentials, JWT sessions, and protected routes.",
    summaryJp:
      "Auth.jsを使ってNext.js App Routerに安全な認証を導入。Google OAuth、JWTセッション、保護されたルートの設定方法。",
    label: "Authentication",
    slug: "how-to-use-authjs-with-nextjs",
    author: "Sagar Yenkure",
    published: "2025-09-08",
    image: "/nextauth.png",
    tags: ["Next.js", "Auth.js", "Authentication", "OAuth", "JWT"],
    content: how_to_use_authjs_with_nextjs,
    views: 587,
    readTime: 9,
    keyword: "google auth nextjs, authjs with jwt session, how to use next-auth with email and google, custom login with next-auth, secure login nextjs authjs, nextjs auth with credentials and google"
  },

  // 📅 2025-09-15 –  Arcjet (Security & Rate Limiting)
  {
    id: 6,
    title: "Protecting Next.js Apps with Arcjet: Rate Limiting & Bot Security",
    titleJp: "ArcjetでNext.jsアプリを保護: レート制限とボットセキュリティ対策",
    summary:
      "Securing your Next.js application with Arcjet. Implement rate limiting, bot protection, email verification, and attack prevention in Next.js middleware.",
    summaryJp:
      "Arcjetを使ってNext.jsアプリにレート制限、ボット対策、スパム防止をミドルウェアレベルで簡単に導入する方法。",
    label: "Security",
    slug: "getting-started-with-arcjet",
    author: "Sagar Yenkure",
    published: "2025-09-15",
    image: "/arcjet_nextjs.png",
    tags: ["Backend", "Rate Limiting", "Next.js", "Authentication & Security"],
    content: getting_started_with_arcjet,
    views: 559,
    readTime: 7,
    keyword: "arcjet nextjs integration, api rate limiting nextjs, arcjet bot protection, arcjet edge middleware, arcjet setup tutorial"
  },

  // 📅 2025-09-22 –  GraphQL (Custom APIs)
  {
    id: 14,
    title: "GraphQL with Node.js: Build a Type-Safe API with Express",
    titleJp: "Node.js × Expressで構築するGraphQL API入門: 型安全なスキーマとリゾルバ",
    summary:
      "Learn how to set up a GraphQL API using Node.js, Express, and express-graphql. Build a typed schema, write resolvers, and run a flexible backend.",
    summaryJp:
      "Node.js、Express、express-graphqlを使ったGraphQL APIの構築手順。型付きスキーマとリゾルバの作成方法を解説。",
    label: "Backend",
    slug: "graphql-with-nodejs-api-setup",
    author: "Sagar Yenkure",
    published: "2025-09-22",
    image: "/graphql.jpg",
    tags: ["GraphQL", "Node.js", "Express", "API"],
    content: how_to_use_graphql_with_nodejs,
    views: 522,
    readTime: 8,
    keyword: "graphql nodejs tutorial, how to use graphql with express, nodejs graphql api, express-graphql example, graphql schema and resolvers, graphql api in nodejs, graphql express typescript"
  },

  // 📅 2025-09-29 –  AWS S3 (File Upload)
  {
    id: 13,
    title: "Upload Files & Images to AWS S3 with Node.js, Express & Multer",
    titleJp: "Node.js、Express、Multerを使用したAWS S3への画像アップロード開発ガイド",
    summary:
      "Learn how to handle image and file uploads to Amazon S3 buckets using Node.js, Multer middleware, and AWS SDK v3.",
    summaryJp:
      "Node.js、Express、Multer、AWS SDK v3を使ってAmazon S3バケットへ安全に画像ファイルをアップロードする方法。",
    label: "Backend",
    slug: "upload-images-to-s3-nodejs",
    author: "Sagar Yenkure",
    published: "2025-09-29",
    image: "/s3.png",
    tags: ["AWS S3", "Node.js", "Multer", "Express", "Backend"],
    content: how_to_upload_images_to_s3,
    views: 588,
    readTime: 8,
    keyword: "upload image to s3 nodejs, aws s3 file upload, express multer s3, s3 bucket image upload tutorial, nodejs aws sdk image upload, multer s3 integration, secure file upload to s3"
  },

  // 📅 2025-10-06 –  Docker for DB Setup
  {
    id: 15,
    title: "Run Local PostgreSQL & MongoDB Databases in Docker with GUI Access",
    titleJp: "DockerとGUIツール（pgAdmin / Mongo Express）でローカル環境にDBを構築する方法",
    summary:
      "Learn how to run PostgreSQL and MongoDB in your local development environment using Docker, with GUI access via pgAdmin and Mongo Express.",
    summaryJp:
      "Docker Composeを使ってPostgreSQLとMongoDBをローカル環境で起動し、pgAdminやMongo ExpressでGUI管理する方法。",
    label: "DevOps",
    slug: "docker-postgresql-mongodb-with-gui",
    author: "Sagar Yenkure",
    published: "2025-10-06",
    image: "/db_docker.png",
    tags: ["database", "PostgreSQL", "MongoDB", "pgAdmin", "Mongo Express", "DevOps"],
    content: setup_databases_with_docker_gui,
    views: 433,
    readTime: 9,
    keyword: "docker postgresql setup, run mongodb with docker, docker-compose for databases, pgadmin docker tutorial, mongo express gui"
  },

  // 📅 2025-10-13 –  React Query (Fetching APIs)
  {
    id: 8,
    title: "Mastering TanStack React Query in Next.js App Router with Axios",
    titleJp: "Next.js App RouterとAxiosで学ぶTanStack React Query v5完全活用ガイド",
    summary:
      "Learn how to use TanStack React Query v5 in Next.js with Axios. Covers server prefetching, caching, mutation hooks, and optimistic UI updates.",
    summaryJp:
      "TanStack React Query v5とAxiosをNext.js App Routerに組み込み、サーバープレフェッチやキャッシュ管理を効率化する方法。",
    label: "React Query",
    slug: "how-to-use-react-query-in-nextjs",
    author: "Sagar Yenkure",
    published: "2025-10-13",
    image: "/reactQuery.jpg",
    tags: ["React Query", "Next.js", "Axios", "TypeScript"],
    content: how_to_use_react_query_in_nextjs,
    views: 387,
    readTime: 9,
    keyword: "react query nextjs tutorial, axios react query setup, nextjs api hooks, react query folder structure, fetch data nextjs react query"
  },

  ...Updates

].filter((article) => new Date(article?.published) <= new Date());

export default ContentList;
