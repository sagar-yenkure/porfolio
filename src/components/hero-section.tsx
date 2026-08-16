"use client";

import useDownloadResume from "@/hooks/useDownloadResume";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Loader2, Download } from "lucide-react";

export default function Hero() {

  const url = process.env.NEXT_PUBLIC_RESUME_URL as string;
  const { downloadResume, isLoading } = useDownloadResume(url);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.45,
  });

  /* ============================================================
     VIDEO
  ============================================================ */

  const videoY = useTransform(
    progress,
    [0, 0.25, 0.55, 1],
    [0, -20, -120, -300]
  );

  const videoX = useTransform(
    progress,
    [0, 0.5, 1],
    [0, 0, 80]
  );

  const videoScale = useTransform(
    progress,
    [0, 0.25, 0.55, 0.8, 1],
    [0.8, 0.95, 1.15, 1.25, 0.7]
  );

  const videoRotateX = useTransform(
    progress,
    [0, 0.3, 0.6, 1],
    [0, 2, 12, 35]
  );

  const videoRotateY = useTransform(
    progress,
    [0, 0.3, 0.6, 1],
    [0, -3, -15, -35]
  );

  const videoRotateZ = useTransform(
    progress,
    [0, 0.5, 1],
    [0, 2, 8]
  );

  /* ============================================================
     VIDEO CLIP
  ============================================================ */

  const videoClip = useTransform(
    progress,
    [0, 0.45, 0.75, 1],
    [
      "inset(0% 0% 0% 0% round 28px)",
      "inset(0% 0% 0% 0% round 28px)",
      "inset(3% 4% 3% 4% round 20px)",
      "inset(8% 12% 8% 12% round 14px)",
    ]
  );

  /* ============================================================
     VIDEO OPACITY
  ============================================================ */

  const videoOpacity = useTransform(
    progress,
    [0, 0.7, 0.92, 1],
    [1, 1, 0.75, 0]
  );

  /* ============================================================
     NAME
  ============================================================ */

  const nameY = useTransform(
    progress,
    [0, 0.35, 0.65, 1],
    [0, -30, -130, -280]
  );

  const nameScale = useTransform(
    progress,
    [0, 0.45, 1],
    [1, 0.95, 0.72]
  );

  const nameOpacity = useTransform(
    progress,
    [0, 0.55, 0.85, 1],
    [1, 1, 0.35, 0]
  );

  /* ============================================================
     DESCRIPTION
  ============================================================ */

  const contentY = useTransform(
    progress,
    [0, 0.4, 0.75, 1],
    [0, -20, -80, -200]
  );

  const contentOpacity = useTransform(
    progress,
    [0, 0.55, 0.8, 1],
    [1, 1, 0.4, 0]
  );

  /* ============================================================
     LABEL
  ============================================================ */

  const labelY = useTransform(
    progress,
    [0, 0.5, 1],
    [0, -50, -180]
  );

  const labelOpacity = useTransform(
    progress,
    [0, 0.55, 0.9, 1],
    [1, 1, 0.4, 0]
  );

  /* ============================================================
     HEADER
  ============================================================ */

  const headerOpacity = useTransform(
    progress,
    [0, 0.55, 0.85],
    [1, 1, 0]
  );

  /* ============================================================
     NEXT SECTION REVEAL
  ============================================================ */

  const nextSectionY = useTransform(
    progress,
    [0.55, 1],
    [180, 0]
  );

  const nextSectionOpacity = useTransform(
    progress,
    [0.55, 0.8, 1],
    [0, 0.5, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[200vh]
        w-full
        bg-[var(--section-bg)]
        text-foreground
      "
    >
      {/* ========================================================
          STICKY SCENE
      ======================================================== */}

      <div
        className="
        max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
          [perspective:1400px]
        "
      >
        {/* ======================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 z-0">
          {/* glow */}

          <motion.div
            style={{
              scale: useTransform(
                progress,
                [0, 0.5, 1],
                [1, 1.3, 1.8]
              ),
            }}
            className="
              absolute
              left-1/2
              top-[40%]
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.08]
              blur-[130px]
            "
          />

          {/* grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
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
                "radial-gradient(circle, black 10%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 10%, transparent 70%)",
            }}
          />

          {/* vignette */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_10%,var(--section-bg)_100%)]
            "
          />
        </div>

        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.header
          style={{ opacity: headerOpacity }}
          className="
            absolute
            left-0
            right-0
            top-0
            z-50
            flex
            items-center
            justify-between
            px-6
            py-6
            md:px-10
            lg:px-14
          "
        >

        </motion.header>

        {/* ======================================================
            3D VIDEO
        ====================================================== */}

        <motion.div
          style={{
            x: videoX,
            y: videoY,
            scale: videoScale,
            rotateX: videoRotateX,
            rotateY: videoRotateY,
            rotateZ: videoRotateZ,
            opacity: videoOpacity,
            clipPath: videoClip,
            transformStyle: "preserve-3d",
          }}
          className="
            absolute
            left-1/2
            top-[18%]
            z-20
            h-[260px]
            w-[260px]
            -translate-x-1/2
            overflow-hidden
            border
            border-border/60
            bg-background
            shadow-[0_40px_120px_rgba(0,0,0,.25)]
            md:h-[360px]
            md:w-[360px]
            lg:h-[440px]
            lg:w-[440px]
          "
        >
          {/* glow behind video */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-24
              -z-10
              rounded-full
              bg-blue-500/[0.12]
              blur-[90px]
            "
          />

          {/* VIDEO */}

          <video
            src="/hero-mock.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* cinematic overlay */}

          {/* <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-foreground/[0.08]
              via-transparent
              to-background/40
            "
          /> */}

          {/* scan line */}

          <motion.div
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-[25%]
              bg-gradient-to-b
              from-transparent
              via-foreground/[0.06]
              to-transparent
            "
          />

          {/* border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              border
              border-border/40
            "
          />
        </motion.div>

        {/* ======================================================
            LABEL
        ====================================================== */}

        <motion.div
          style={{
            y: labelY,
            opacity: labelOpacity,
          }}
          className="
            absolute
            left-1/2
            top-[47%]
            z-30
            -translate-x-1/2
            whitespace-nowrap
          "
        >

        </motion.div>

        {/* ======================================================
            NAME
        ====================================================== */}

        <motion.div
          style={{
            y: nameY,
            scale: nameScale,
            opacity: nameOpacity,
          }}
          className="
            absolute
            bottom-[17%]
            left-[5%]
            z-30
            origin-bottom-left
            md:left-[7%]
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
              gap-2
              text-[13px]
              uppercase
              tracking-[0.22em]
              text-muted-foreground
            "
          >
            <span className="h-px w-6 bg-border" />

            Software Engineer
          </div>

          <h1
            className="
              select-none
              text-[18vw]
              font-black
              uppercase
              leading-[0.68]
              tracking-[-0.08em]
              text-foreground
              md:text-[13vw]
              lg:text-[11vw]
            "
          >
            SAGAR
            <br />
            YENKURE
          </h1>
        </motion.div>

        {/* ======================================================
            DESCRIPTION
        ====================================================== */}

        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="
            absolute
            bottom-[7%]
            right-[6%]
            z-40
            md:right-[7%]
            lg:right-[8%]
          "
        >
          <div className="max-w-[300px]">
            <p
              className="
                text-[10px]
                leading-[1.55]
                text-muted-foreground
                md:text-xs
              "
            >
              I build modern web experiences
              with clean engineering,
              thoughtful interaction and
              scalable architecture.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {/* Let's Talk */}
              <Link
                href="#contact"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-foreground
                  bg-foreground
                  px-5
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-background
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-foreground/90
                  shadow-md
                "
              >
                <span className="relative z-10">Let&apos;s  Talk</span>
              </Link>

              {/* Resume */}
              <Button
                onClick={downloadResume}
                disabled={isLoading}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-border
                  bg-card
                  px-5
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-foreground
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-foreground/40
                  hover:bg-accent
                  shadow-sm
                  disabled:cursor-wait
                  disabled:opacity-80
                "
              >
                {/* Text */}
                <motion.span
                  className="relative z-10"
                  animate={{ opacity: isLoading ? 0.7 : 1 }}
                >
                  {isLoading ? "Preparing..." : "Resume"}
                </motion.span>

                {/* Icon */}
                <motion.span
                  className="relative z-10 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="h-3.5 w-3.5" />
                  ) : (
                    <Download className="h-3.5 w-3.5  group-hover:translate-y-1" />
                  )}
                </motion.span>
              </Button>
            </div>

          </div>
        </motion.div>
        {/* ======================================================
            NEXT CONTENT REVEAL
        ====================================================== */}

        <motion.div
          style={{
            y: nextSectionY,
            opacity: nextSectionOpacity,
          }}
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-10
            h-[35vh]
            bg-gradient-to-t
            from-[var(--section-bg)]
            via-[var(--section-bg)]/70
            to-transparent
          "
        />
      </div>
    </section>
  );
}