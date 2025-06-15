"use client";

import { Timeline } from "./ui/timeline";
import { workData } from "@/constants";
import useCalculateExperience from "@/hooks/useCalculateExperience";
import { motion } from "framer-motion";

const Work = () => {
  const { months, years } = useCalculateExperience(2, 2024);

  return (
    <section className="min-h-screen py-8 px-4 md:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 py-6 px-3"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Changelog from my journey
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I&apos;ve been working for the past{" "}
          {years > 0 ? `${years} years` : ""}{" "}
          {months > 0 ? `${months + 1} months` : ""}. Here&apos;s a timeline of
          my journey.
        </p>
      </motion.div>
      <Timeline data={workData} />
    </section>
  );
};

export default Work;
