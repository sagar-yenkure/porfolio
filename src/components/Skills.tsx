"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";
import {
  backendSkills,
  devOpsSkills,
  frontendSkills,
} from "@/constants/skills";

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
