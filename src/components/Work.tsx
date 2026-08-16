"use client";

import React, { useRef } from "react";
import { Timeline } from "./ui/timeline";
import { workData } from "@/constants";
import useCalculateExperience from "@/hooks/useCalculateExperience";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { months, years } = useCalculateExperience(2, 2024);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  /* ============================================================
     HEADER MOTION
  ============================================================ */

  const headerY = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    [30, 0, -10, -25]
  );

  const headerOpacity = useTransform(
    progress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0.5]
  );

  const headerScale = useTransform(
    progress,
    [0, 0.3, 1],
    [0.96, 1, 0.97]
  );

  /* ============================================================
     DECORATIVE ELEMENTS
  ============================================================ */

  const glowY = useTransform(
    progress,
    [0, 0.5, 1],
    [40, -20, -60]
  );

  const glowX = useTransform(
    progress,
    [0, 0.5, 1],
    [-30, 0, 30]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[var(--section-bg)]
        px-4
        text-foreground
        section-container

        md:px-8
      "
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main moving glow */}

        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          className="
            absolute
            left-[20%]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[140px]
          "
        />

        {/* Secondary glow */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-100px]
            top-[55%]
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
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.2) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black 10%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 10%, transparent 75%)",
          }}
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              circle_at_center,
              transparent_20%,
              var(--section-bg)_95%
            )]
          "
        />
      </div>

      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.div
          style={{
            y: headerY,
            opacity: headerOpacity,
            scale: headerScale,
          }}
          className="
            mb-10
            max-w-4xl
            origin-left
          "
        >


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
            The journey
            <br />
            <span className="text-muted-foreground/40">
              so far.
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
            From building web applications to working
            on production systems, every role has added
            another layer to how I approach software
            engineering.
          </p>

          {/* Experience stat */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-6
            "
          >
            <div>
              <div
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-foreground
                "
              >
                {years > 0 ? `${years}+` : months}
              </div>

              <div
                className="
                  mt-1
                  text-[12px]
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Years experience
              </div>
            </div>

            <div
              className="
                h-8
                w-px
                bg-border
              "
            />

            <div>
              <div
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-foreground
                "
              >
                {String(workData.length).padStart(2, "0")}
              </div>

              <div
                className="
                  mt-1
                  text-[12px]
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Career milestones
              </div>
            </div>
          </div>
        </motion.div>

        {/* ======================================================
            TIMELINE WRAPPER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-4
          "
        >
          {/* Timeline ambient glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-full
              w-[1px]
              bg-gradient-to-b
              from-transparent
              via-blue-400/[0.15]
              to-transparent
              blur-[2px]
            "
          />

          <Timeline data={workData} />
        </motion.div>

        {/* ======================================================
            BOTTOM MARKER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-muted-foreground
          "
        >
          <span className="h-px w-10 bg-border" />

          More chapters ahead

          <span className="h-px w-10 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Work;