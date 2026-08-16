"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { Testimonial, testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  // First row moves left
  const firstRowX = useTransform(
    progress,
    [0, 1],
    ["4%", "-22%"]
  );

  // Second row moves right
  const secondRowX = useTransform(
    progress,
    [0, 1],
    ["-18%", "8%"]
  );

  // Section heading movement
  const headingY = useTransform(
    progress,
    [0, 0.5, 1],
    [50, 0, -40]
  );

  const headingOpacity = useTransform(
    progress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0.2]
  );

  // Subtle background movement
  const glowY = useTransform(
    progress,
    [0, 1],
    ["-10%", "25%"]
  );

  const firstHalf = testimonials.slice(
    0,
    Math.ceil(testimonials.length / 2)
  );

  const secondHalf = testimonials.slice(
    Math.ceil(testimonials.length / 2)
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--section-bg)]
        text-foreground
        section-container
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <motion.div
          style={{ y: glowY }}
          className="
            absolute
            left-[15%]
            top-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[140px]
          "
        />

        {/* Purple glow */}

        <div
          className="
            absolute
            right-[-100px]
            top-[45%]
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
            opacity-[0.03]
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
            backgroundSize: "80px 80px",
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
            bg-[radial-gradient(circle_at_center,transparent_20%,var(--section-bg)_95%)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          style={{
            y: headingY,
            opacity: headingOpacity,
          }}
          className="
            mx-auto
            mb-16
            max-w-7xl
            px-4
            md:px-8
          "
        >

          {/* Heading */}

          <h2
            className="
              max-w-4xl
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.055em]
              text-foreground

              md:text-5xl

              lg:text-6xl
            "
          >
            What people
            <br />

            <span className="text-muted-foreground/40">
              say about working with me.
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
            A few words from people I&apos;ve worked with
            across different projects, teams and
            collaborations.
          </p>
        </motion.div>

        {/* ===================================================
            FIRST ROW
        =================================================== */}

        <div className="relative mb-5 overflow-visible">
          <motion.div
            style={{ x: firstRowX }}
            className="
              flex
              w-max
              gap-4
              md:gap-5
            "
          >
            {[
              ...firstHalf,
              ...firstHalf,
            ].map(
              (
                testimonial: Testimonial,
                index: number
              ) => (
                <TestimonialCard
                  key={`first-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              )
            )}
          </motion.div>
        </div>

        {/* ===================================================
            SECOND ROW
        =================================================== */}

        <div className="relative overflow-visible">
          <motion.div
            style={{ x: secondRowX }}
            className="
              flex
              w-max
              gap-4
              md:gap-5
            "
          >
            {[
              ...secondHalf,
              ...secondHalf,
            ].map(
              (
                testimonial: Testimonial,
                index: number
              ) => (
                <TestimonialCard
                  key={`second-${index}`}
                  testimonial={testimonial}
                  index={index}
                  reverse
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;