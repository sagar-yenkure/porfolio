"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Braces } from "lucide-react";
import CodeTerminal from "./CodeTerminal";
import useDownloadResume from "@/hooks/useDownloadResume";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const HeroSection = () => {
  const url = process.env.NEXT_PUBLIC_RESUME_URL as string;
  const { downloadResume, isLoading } = useDownloadResume(url);
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 font-sans pt-12">
      {/* Animated background grid with subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-16 md:px-12">
        <div className="grid w-full max-w-8xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <div className="flex items-center mb-4">
                <Braces className="mr-3 h-6 w-6 text-purple-400" />
                <p className="text-lg font-semibold uppercase tracking-wide text-purple-400">
                  Hello, I&apos;m
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h1 className="mb-6 text-5xl  text-white md:text-7xl">
                Sagar Yenkure
              </h1>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="mb-8 max-w-lg text-3xl font-semibold text-gray-300 md:text-4xl">
                Software Engineer &{" "}
                <span className="text-blue-400">Full-Stack Developer</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn}>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
                I build exceptional digital experiences with modern
                technologies. Specialized in creating scalable, high-performance
                applications that solve real-world problems.
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-5" variants={fadeIn}>
              <motion.button
                onClick={downloadResume}
                disabled={isLoading}
                className="group flex items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-gray-500/50 active:scale-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download Resume"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                {isLoading ? "Downloading..." : "Download Resume"}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Terminal */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-full max-w-[620px] shadow-2xl rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <CodeTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
