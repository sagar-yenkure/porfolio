"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project, projectsList } from "@/constants/Projects";

const Projects = () => {
  const WebApps = projectsList.filter(
    (project) => project.category === "Web Application"
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const renderProjectCards = (apps: Project[]) => {
    if (!apps || apps?.length === 0) return null;
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((project: Project, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="relative py-8 px-4 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 py-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          I&apos;ve been building a lot of things
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Here are some of my featured projects that highlight my expertise and
          passion for development.
        </p>
      </motion.div>

      {renderProjectCards(WebApps)}
    </motion.section>
  );
};
export default Projects;
