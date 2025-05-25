"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
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
  SiBootstrap,
  SiRedis,
  SiTrpc,
  SiHtml5,
  SiCss3,
  SiJira,
  SiGit,
  SiGithub,
  SiDocker,
  SiShadcnui,
  SiSocketdotio,
  SiVercel,
  SiLangchain,
  SiFramer,
  SiAntdesign,
  SiMaterialdesign,
  SiRender,
  SiSupabase,
  SiCypress,
  SiRazorpay,
} from "react-icons/si";

import { FaAmazon, FaJava } from "react-icons/fa";
import { IconBrandSuperhuman, IconBrandVscode } from "@tabler/icons-react";
import { Shield } from "lucide-react";
import { IconType } from "react-icons/lib";

const SkillCard = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
    >
      <Icon className={`w-7 h-7 ${color || "text-gray-400"} mb-2`} />
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  // Frontend skills
  const frontendSkills = [
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
    { id: 14, name: "Ant Design", icon: SiAntdesign, color: "text-[#1677ff]" },
    {
      id: 15,
      name: "Material UI",
      icon: SiMaterialdesign,
      color: "text-blue-300",
    },
    { id: 16, name: "Shadcn UI", icon: SiShadcnui, color: "text-white" },
    { id: 17, name: "Bootstrap", icon: SiBootstrap, color: "text-purple-700" },
    { id: 21, name: "React Query", icon: SiReactquery, color: "text-pink-500" },
  ];

  // Backend skills
  const backendSkills = [
    { id: 3, name: "Java", icon: FaJava, color: "text-red-600" },
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
    { id: 24, name: "LangChain", icon: SiLangchain, color: "text-gray-400" },
    { id: 25, name: "Auth.js", icon: Shield, color: "text-gray-300" },
    { id: 26, name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { id: 27, name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
    { id: 28, name: "Redis", icon: SiRedis, color: "text-red-600" },
    { id: 29, name: "Zustand", icon: SiSupabase, color: "text-green-500" },
    {
      id: 30,
      name: "Zod",
      icon: IconBrandSuperhuman,
      color: "text-indigo-500",
    },
    { id: 31, name: "Supabase", icon: SiSupabase, color: "text-blue-600" },
    { id: 33, name: "Razorpay", icon: SiRazorpay, color: "text-blue-700" },
  ];

  // DevOps and tools
  const devOpsSkills = [
    { id: 1, name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { id: 2, name: "AWS", icon: FaAmazon, color: "text-orange-400" },
    { id: 3, name: "Vercel", icon: SiVercel, color: "text-white" },
    { id: 4, name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { id: 5, name: "Render", icon: SiRender, color: "text-purple-400" },
    { id: 6, name: "Git", icon: SiGit, color: "text-orange-600" },
    { id: 7, name: "GitHub", icon: SiGithub, color: "text-white" },
    { id: 8, name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { id: 9, name: "Jira", icon: SiJira, color: "text-blue-500" },
    { id: 10, name: "VS Code", icon: IconBrandVscode, color: "text-blue-500" },
    { id: 11, name: "Cypress", icon: SiCypress, color: "text-green-700" },
  ];

  return (
    <section className="relative overflow-hidden py-8 px-8">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 py-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore in-depth articles on software development, stay updated with
            expert insights, tutorials, and best practices in the tech world.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background/10 backdrop-blur-sm border border-white/10">
              <TabsTrigger
                value="frontend"
                className="text-sm md:text-base hover:cursor-pointer"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="text-sm md:text-base hover:cursor-pointer"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="devops"
                className="text-sm md:text-base hover:cursor-pointer"
              >
                DevOps & Tools
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend" className="mt-0">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {frontendSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                Backend Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {backendSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="devops" className="mt-0">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                DevOps & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {devOpsSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
