"use client";

import Link from "next/link";
import React, { useRef } from "react";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import info from "@/constants/info";
import BookingCal from "./BookingCal";

/* ============================================================
   SERVICES
============================================================ */

const services = [
  {
    label: "React",
    className: "left-[5%] top-[25%] md:left-[8%] md:top-[22%]",
  },
  {
    label: "Next.js",
    className: "right-[5%] top-[28%] md:right-[8%] md:top-[24%]",
  },
  {
    label: "PostgreSQL",
    className: "left-[7%] bottom-[22%] md:left-[12%] md:bottom-[20%]",
  },
  {
    label: "TypeScript",
    className: "right-[7%] bottom-[20%] md:right-[12%] md:bottom-[18%]",
  },
];

/* ============================================================
   SOCIAL BUTTON
============================================================ */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.94,
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "icon",
          }),
          `
          h-10
          w-10
          rounded-full
          border-border
          bg-background
          text-foreground
          hover:bg-accent
          hover:text-accent-foreground
          shadow-sm
          transition-all
          `
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function SkeletonFour() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ==========================================================
     SCROLL
  ========================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.4,
  });

  /* ==========================================================
     MOUSE
  ========================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  /* ==========================================================
     MOUSE ROTATION
  ========================================================== */

  const mouseRotateX = useTransform(
    smoothMouseY,
    [-0.5, 0.5],
    [10, -10]
  );

  const mouseRotateY = useTransform(
    smoothMouseX,
    [-0.5, 0.5],
    [-12, 12]
  );

  /* ==========================================================
     SCROLL ROTATION
  ========================================================== */

  const scrollRotateX = useTransform(
    progress,
    [0, 0.5, 1],
    [8, 0, -5]
  );

  const scrollRotateY = useTransform(
    progress,
    [0, 0.5, 1],
    [-8, 0, 8]
  );

  const visualY = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    [40, 0, -10, -30]
  );

  const visualX = useTransform(
    progress,
    [0, 0.5, 1],
    [-8, 0, 12]
  );

  const visualScale = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    [0.88, 1, 1.02, 0.95]
  );

  /* ==========================================================
     CARD MOTION
  ========================================================== */

  const cardY = useTransform(
    progress,
    [0, 0.25, 0.7, 1],
    [40, 0, -8, -25]
  );

  const cardScale = useTransform(
    progress,
    [0, 0.25, 0.7, 1],
    [0.96, 1, 1, 0.97]
  );

  const cardOpacity = useTransform(
    progress,
    [0, 0.12, 0.8, 1],
    [0, 1, 1, 0.85]
  );

  /* ==========================================================
     CONTENT MOTION
  ========================================================== */

  const contentY = useTransform(
    progress,
    [0, 0.4, 0.8, 1],
    [30, 0, -10, -20]
  );

  const contentOpacity = useTransform(
    progress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0.8]
  );

  const combinedRotateX = useTransform(
    [mouseRotateX, scrollRotateX],
    ([mouse, scroll]: number[]) => mouse + scroll
  );

  const combinedRotateY = useTransform(
    [mouseRotateY, scrollRotateY],
    ([mouse, scroll]: number[]) => mouse + scroll
  );

  /* ==========================================================
     MOUSE MOVE
  ========================================================== */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8
        md:px-8
        section-container
        bg-[var(--section-bg)]
      "
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[25%]
            top-[45%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.045]
            blur-[140px]
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
                rgba(255,255,255,.15) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.15) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle, black 10%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 10%, transparent 70%)",
          }}
        />
      </div>

      {/* ========================================================
          MAIN CARD
      ======================================================== */}

      <motion.div
        style={{
          y: cardY,
          scale: cardScale,
          opacity: cardOpacity,
          transformPerspective: 1400,
        }}
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[28px]
          border
          border-border/60
          bg-card
          text-card-foreground

          shadow-[0_30px_100px_rgba(0,0,0,.08)]

          dark:border-border
          dark:bg-card
          dark:shadow-[0_30px_100px_rgba(0,0,0,.4)]
        "
      >


        {/* ======================================================
            CONTENT GRID
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[650px]
            flex-col

            md:min-h-[500px]
            md:flex-row
          "
        >
          {/* ====================================================
              LEFT — INTERACTIVE 3D
          ==================================================== */}

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              y: visualY,
              x: visualX,
              scale: visualScale,
            }}
            className="
              relative
              flex
              h-[370px]
              w-full
              items-center
              justify-center
              overflow-hidden

              md:h-[500px]
              md:w-[52%]
            "
          >
            {/* ==================================================
                AMBIENT GLOW
            ================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/[0.1]
                blur-[100px]
              "
            />

            {/* ==================================================
                FLOOR GLOW
            ================================================== */}

            <motion.div
              animate={{
                scaleX: [0.9, 1, 0.9],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[14%]
                left-1/2
                h-[35px]
                w-[220px]
                -translate-x-1/2
                rounded-[50%]
                bg-blue-500/20
                blur-[30px]
              "
            />

            {/* ==================================================
                OUTER ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-foreground/15

                dark:border-white/20
              "
            >
              {/* orbit light */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[-3px]
                  h-1.5
                  w-1.5
                  -translate-x-1/2
                  rounded-full
                  bg-blue-500/80
                  shadow-[0_0_8px_rgba(59,130,246,0.6)]
                "
              />
            </motion.div>

            {/* ==================================================
                SECOND ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[190px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rotate-[28deg]
                rounded-[50%]
                border
                border-foreground/15

                dark:border-white/20
              "
            >
              <div
                className="
                  absolute
                  right-[18%]
                  top-[-3px]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-400/80
                  shadow-[0_0_6px_rgba(96,165,250,0.6)]
                "
              />
            </motion.div>

            {/* ==================================================
                THIRD ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[145px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                -rotate-[35deg]
                rounded-[50%]
                border
                border-blue-500/25

                dark:border-blue-400/35
              "
            >
              <div
                className="
                  absolute
                  left-[18%]
                  top-[-3px]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-400/80
                  shadow-[0_0_6px_rgba(96,165,250,0.6)]
                "
              />
            </motion.div>

            {/* ==================================================
                3D CORE
            ================================================== */}

            <motion.div
              style={{
                rotateX: combinedRotateX,
                rotateY: combinedRotateY,
              }}
              animate={{
                y: [0, -8, 0, 8, 0],
              }}
              transition={{
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-20
                h-[135px]
                w-[135px]
                rounded-[34px]

                border
                border-border

                bg-background/90

                shadow-[0_25px_60px_rgba(0,0,0,.12)]
                dark:shadow-[0_35px_100px_rgba(0,0,0,.7)]

                backdrop-blur-xl

                [transform-style:preserve-3d]
              "
            >
              {/* =================================================
                  CORE INNER
              ================================================= */}

              <div
                className="
                  absolute
                  inset-[10px]
                  rounded-[26px]
                  border
                  border-border/60
                  bg-card/80
                "
              />

              {/* AI Symbol Core */}

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-30
                  flex
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  gap-0.5
                  rounded-2xl
                  border
                  border-blue-500/40
                  bg-gradient-to-br
                  from-blue-500/20
                  via-indigo-500/10
                  to-cyan-500/20
                  shadow-[0_0_30px_rgba(59,130,246,0.45)]
                  backdrop-blur-md

                  dark:border-blue-400/50
                  dark:from-blue-400/25
                  dark:to-cyan-400/25
                "
              >
                <span className="text-[18px] font-bold tracking-widest text-blue-500 dark:text-blue-400 uppercase">
                  AI
                </span>
              </motion.div>

              {/* Horizontal line */}

              <div
                className="
                  absolute
                  left-[20%]
                  right-[20%]
                  top-1/2
                  h-px
                  bg-border
                "
              />

              {/* Vertical line */}

              <div
                className="
                  absolute
                  bottom-[20%]
                  left-1/2
                  top-[20%]
                  w-px
                  bg-border
                "
              />

              {/* Corner */}

              <div
                className="
                  absolute
                  right-3
                  top-3
                  h-2
                  w-2
                  border-r
                  border-t
                  border-border
                "
              />

              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  h-2
                  w-2
                  border-b
                  border-l
                  border-border
                "
              />
            </motion.div>

            {/* ==================================================
                SCANNING LIGHT
            ================================================== */}

            <motion.div
              animate={{
                y: [-150, 150],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-30
                h-px
                w-[210px]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-blue-400/70
                to-transparent
              "
            />

            {/* ==================================================
                TECH LABELS
            ================================================== */}

            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: 0.25 + index * 0.1,
                  duration: 0.6,
                }}
                className={`
                  absolute
                  z-40
                  ${service.className}
                `}
              >
                <motion.div
                  animate={{
                    y: [0, index % 2 === 0 ? -5 : 5, 0],
                    x: [0, index % 2 === 0 ? 3 : -3, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-border
                    bg-card/95
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    tracking-wider
                    text-foreground
                    shadow-md
                    backdrop-blur-md
                  "
                >


                  {service.label}
                </motion.div>
              </motion.div>
            ))}


          </motion.div>

          {/* ====================================================
              RIGHT CONTENT
          ==================================================== */}

          <motion.div
            style={{
              y: contentY,
              opacity: contentOpacity,
            }}
            className="
              flex
              flex-1
              flex-col
              justify-center
              px-6
              pb-12

              md:px-10
              md:pb-0

              lg:px-14
            "
          >
            {/* Label */}

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mb-5
                flex
                items-center
                gap-2
                text-[13px]
                uppercase
                tracking-[0.22em]
                text-muted-foreground
              "
            >
              <span
                className="
                  h-px
                  w-6
                  bg-border
                "
              />

              Let&apos;s build something
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[520px]
                text-3xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                text-foreground

                md:text-4xl
                lg:text-5xl
              "
            >
              Any questions
              <br />
              about development?
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mt-5
                max-w-[420px]
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              Have an idea, project, or technical
              challenge? Feel free to reach out. I&apos; m
              always open to building something
              interesting together.
            </motion.p>

            {/* ==================================================
                ACTIONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <BookingCal />

              <SocialButton
                label="Connect via Mail"
                href={`mailto:${info.mail}`}
              >
                <Mail className="h-4 w-4" />
              </SocialButton>

              <SocialButton
                label="Connect via WhatsApp"
                href={`https://wa.me/${info.whatsApp}`}
              >
                <FaWhatsapp className="h-4 w-4" />
              </SocialButton>

              <SocialButton
                label="Connect via X"
                href={info.twitter}
              >
                <FaXTwitter className="h-4 w-4" />
              </SocialButton>

              <SocialButton
                label="Connect via LinkedIn"
                href={info.linkedin}
              >
                <FaLinkedin className="h-4 w-4" />
              </SocialButton>

              <SocialButton
                label="Connect via GitHub"
                href={info.github}
              >
                <FaGithub className="h-4 w-4" />
              </SocialButton>
            </motion.div>

            {/* ==================================================
                STATUS
            ================================================== */}

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
                delay: 0.5,
              }}
              className="
                mt-8
                flex
                items-center
                gap-2
                text-[13px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground
              "
            >


              Open to interesting projects

            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}