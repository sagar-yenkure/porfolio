import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiMongodb,
  SiPostman,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiPrisma,
  SiGraphql,
  SiPostgresql,
  SiExpo,
  SiRedis,
  SiTrpc,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiDocker,
  SiShadcnui,
  SiSocketdotio,
  SiVercel,
  SiFramer,
  SiRender,
  SiCypress,
} from "react-icons/si";

import { FaAmazon } from "react-icons/fa";
import { IconBrandSuperhuman, IconBrandVscode } from "@tabler/icons-react";
import { Shield } from "lucide-react";

// Frontend skills
export const frontendSkills = [
  { id: 1, name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { id: 2, name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { id: 4, name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { id: 5, name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { id: 6, name: "React", icon: SiReact, color: "text-blue-500" },
  { id: 7, name: "Redux Toolkit", icon: SiRedux, color: "text-purple-600" },
  { id: 8, name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { id: 9, name: "Expo", icon: SiExpo, color: "text-white" },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  { id: 13, name: "Framer Motion", icon: SiFramer, color: "text-[#800080]" },
  { id: 16, name: "Shadcn UI", icon: SiShadcnui, color: "text-white" },
  { id: 21, name: "React Query", icon: SiReactquery, color: "text-pink-500" },
];

// Backend skills
export const backendSkills = [
  { id: 10, name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { id: 11, name: "Express.js", icon: SiExpress, color: "text-white" },
  { id: 18, name: "tRPC", icon: SiTrpc, color: "text-blue-400" },
  {
    id: 19,
    name: "WebSockets",
    icon: SiSocketdotio,
    color: "text-green-400",
  },
  { id: 20, name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { id: 22, name: "Mongoose", icon: SiMongoose, color: "text-red-600" },
  { id: 23, name: "Prisma", icon: SiPrisma, color: "text-white" },
  { id: 25, name: "Auth.js", icon: Shield, color: "text-gray-300" },
  { id: 26, name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { id: 27, name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { id: 28, name: "Redis", icon: SiRedis, color: "text-red-600" },
  {
    id: 30,
    name: "Zod",
    icon: IconBrandSuperhuman,
    color: "text-indigo-500",
  },
];

// DevOps and tools
export const devOpsSkills = [
  { id: 1, name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { id: 2, name: "AWS", icon: FaAmazon, color: "text-orange-400" },
  { id: 3, name: "Vercel", icon: SiVercel, color: "text-white" },
  { id: 5, name: "Render", icon: SiRender, color: "text-purple-400" },
  { id: 6, name: "Git", icon: SiGit, color: "text-orange-600" },
  { id: 7, name: "GitHub", icon: SiGithub, color: "text-white" },
  { id: 8, name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { id: 10, name: "VS Code", icon: IconBrandVscode, color: "text-blue-500" },
  { id: 11, name: "Cypress", icon: SiCypress, color: "text-green-700" },
];
