"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project, projectsList } from "@/constants/Projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: 8,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  const webApps = projectsList.filter(
    (project) => project.category === "Web Application"
  );

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--section-bg)]
        px-4
        text-foreground
        section-container
        md:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[65%]
            top-[30%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.06]
            blur-[150px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            bottom-[10%]
            left-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-500/[0.025]
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                var(--foreground) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                var(--foreground) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,var(--section-bg)_92%)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 md:mb-16 lg:mb-20 max-w-3xl"
        >
          {/* Eyebrow */}


          {/* Heading */}

          <h2
            className="
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.055em]
              text-foreground

              md:text-5xl

              lg:text-6xl
            "
          >
            Things I&apos;ve
            <br />

            <span className="text-muted-foreground/40">
              built on the web.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-muted-foreground

              md:text-base
            "
          >
            A selection of projects where engineering,
            design and interaction come together to
            create useful digital experiences.
          </p>
        </motion.div>

        {/* ===================================================
            PROJECT COUNT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-6
            flex
            items-center
            justify-between
            border-b
            border-border/60
            pb-4
          "
        >
          <span
            className="
              text-[13px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground
            "
          >
            Featured projects
          </span>

          <span
            className="
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-foreground
            "
          >
            {String(webApps.length).padStart(2, "0")} Projects
          </span>
        </motion.div>

        {/* ===================================================
            PROJECT GRID
        =================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {webApps.map((project: Project, index: number) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={cardVariants}
              style={{
                perspective: 1200,
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;