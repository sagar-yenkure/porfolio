"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/constants/Projects";
import Link from "next/link";
import { IconType } from "react-icons/lib";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [step, setStep] = useState(0);
  const [isHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const totalSteps = project.images.length;
  const hasMultipleImages = totalSteps > 1;

  /* ==========================================================
     MOUSE 3D
  ========================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    {
      stiffness: 180,
      damping: 22,
      mass: 0.5,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    {
      stiffness: 180,
      damping: 22,
      mass: 0.5,
    }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-5, 5]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) /
      rect.width -
      0.5
    );

    mouseY.set(
      (event.clientY - rect.top) /
      rect.height -
      0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ==========================================================
     IMAGE PRELOAD
  ========================================================== */

  useEffect(() => {
    project.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [project.images]);

  /* ==========================================================
     CONTROLS
  ========================================================== */

  const handleNext = () => {
    setStep((prev) =>
      prev + 1 < totalSteps
        ? prev + 1
        : prev
    );
  };

  const handlePrev = () => {
    setStep((prev) =>
      prev - 1 >= 0
        ? prev - 1
        : prev
    );
  };

  /* ==========================================================
     SKILLS
  ========================================================== */

  const skillIcons = () =>
    project.skills?.map(
      (
        SkillIcon: IconType,
        skillIndex: number
      ) => (
        <motion.div
          key={skillIndex}
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
          }}
          transition={{
            delay: skillIndex * 0.05,
            duration: 0.4,
          }}
          whileHover={{
            y: -3,
            scale: 1.08,
          }}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border
            border-border/60
            bg-background/60
            text-muted-foreground
            transition-colors
            hover:border-border
            hover:bg-accent
            hover:text-foreground
          "
        >
          <SkillIcon size={15} />
        </motion.div>
      )
    );

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      className="
        group
        relative
        h-full
        [transform-style:preserve-3d]
      "
    >
      {/* ======================================================
          CARD
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-border/60
          bg-card
          text-card-foreground
          backdrop-blur-xl

          transition-colors
          duration-500

          group-hover:border-border
          group-hover:bg-accent/80
        "
      >
        {/* ==================================================
            CARD GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-48
            w-48
            rounded-full
            bg-blue-500/[0.06]
            blur-[70px]
            transition-all
            duration-700
            group-hover:bg-blue-500/[0.12]
          "
        />

        {/* ==================================================
            TOP META
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
            px-5
            pt-5
          "
        >
          <div className="flex items-center gap-3">

            <span className="h-px w-5 bg-border" />

            <span
              className="
                text-[11px]
                font-bold
                tracking-wider
                text-blue-500
              "
            >
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </span>
          </div>

          <span
            className="
              rounded-full
              border
              border-border
              bg-accent
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-foreground
              shadow-sm
            "
          >
            {project.category}
          </span>
        </div>

        {/* ==================================================
            TITLE
        ================================================== */}

        <div className="relative z-10 px-5 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="
                  text-lg
                  font-medium
                  tracking-[-0.025em]
                  text-foreground

                  md:text-xl
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-2
                  line-clamp-2
                  text-[11px]
                  leading-5
                  text-muted-foreground
                "
              >
                {project.description}
              </p>
            </div>

            {/* LINKS */}

            <div className="flex shrink-0 gap-1.5">
              {project.liveUrl && (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border/60
                        bg-background/60
                        text-muted-foreground
                        transition-colors
                        hover:bg-accent
                        hover:text-foreground
                      "
                    >
                      <ExternalLink size={14} />
                    </div>
                  </Link>
                </motion.div>
              )}

              {project.githubUrl && (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border/60
                        bg-background/60
                        text-muted-foreground
                        transition-colors
                        hover:bg-accent
                        hover:text-foreground
                      "
                    >
                      <FaGithub size={14} />
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="relative mx-5 mt-5">
          <motion.div
            style={{
              x: imageX,
              y: imageY,
            }}
            className={`
              relative
              w-full
              overflow-hidden
              rounded-[18px]
              border
              border-white/[0.07]
              bg-black/30
              ${project.category ===
                "Mobile Application"
                ? "aspect-[9/16]"
                : "aspect-[16/9]"
              }
            `}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[step]}
                src={project.images[step]}
                alt={`${project.title} preview ${step + 1
                  }`}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: isHovered
                    ? 1.04
                    : 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  inset-0
                  h-full
                  w-full
                  ${project.category ===
                    "Mobile Application"
                    ? "object-contain"
                    : "object-cover"
                  }
                `}
              />
            </AnimatePresence>

            {/* Image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.08]
                via-transparent
                to-black/30
              "
            />

            {/* Image border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[18px]
                border
                border-white/[0.06]
              "
            />
          </motion.div>
        </div>

        {/* ==================================================
            IMAGE CONTROLS
        ================================================== */}

        {hasMultipleImages && (
          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
              px-5
              pt-4
            "
          >
            <button
              onClick={handlePrev}
              disabled={step === 0}
              className="
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-white/25
                transition-colors
                hover:text-white/70
                disabled:pointer-events-none
                disabled:opacity-20
              "
            >
              <ArrowLeft size={12} />
              Prev
            </button>

            {/* Dots */}

            <div className="flex items-center gap-1.5">
              {project.images.map(
                (_, imageIndex) => (
                  <motion.button
                    key={imageIndex}
                    onClick={() =>
                      setStep(imageIndex)
                    }
                    animate={{
                      width:
                        imageIndex === step
                          ? 18
                          : 4,
                    }}
                    className="
                      h-1
                      rounded-full
                      bg-white/30
                    "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    aria-label={`View image ${imageIndex + 1
                      }`}
                  />
                )
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={
                step === totalSteps - 1
              }
              className="
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-white/25
                transition-colors
                hover:text-white/70
                disabled:pointer-events-none
                disabled:opacity-20
              "
            >
              Next
              <ArrowRight size={12} />
            </button>
          </div>
        )}

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            px-5
            pb-5
            pt-5
          "
        >
          <div className="flex flex-wrap gap-1.5">
            {skillIcons()}
          </div>

          <motion.span
            animate={{
              x: isHovered ? 3 : 0,
              opacity: isHovered ? 0.7 : 0.25,
            }}
            className="
              hidden
              text-[8px]
              uppercase
              tracking-[0.15em]
              text-white/30

              sm:block
            "
          >
            View ↗
          </motion.span>
        </div>

        {/* ==================================================
            BOTTOM ACCENT
        ================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-5
            right-5
            h-px
            origin-left
            bg-blue-400/50
          "
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;