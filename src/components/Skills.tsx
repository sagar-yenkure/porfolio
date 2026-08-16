"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { IconType } from "react-icons/lib";
import {
  backendSkills,
  devOpsSkills,
  frontendSkills,
} from "@/constants/skills";

type Skill = {
  id: number;
  name: string;
  icon: IconType;
  color?: string;
};

type Category = "frontend" | "backend" | "devops";

const categories: {
  id: Category;
  label: string;
  number: string;
  description: string;
}[] = [
    {
      id: "frontend",
      label: "Frontend",
      number: "01",
      description: "Interfaces, interactions & web experiences",
    },
    {
      id: "backend",
      label: "Backend",
      number: "02",
      description: "APIs, services & application architecture",
    },
    {
      id: "devops",
      label: "DevOps & Tools",
      number: "03",
      description: "Infrastructure, deployment & developer tooling",
    },
  ];

/* ============================================================
   SKILL CARD
============================================================ */

const SkillCard = ({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: index * 0.045,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        group
        relative
        cursor-default
        [transform-style:preserve-3d]
      "
    >
      <div
        className="
          relative
          flex
          min-h-[125px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-border/60
          bg-card
          p-4

          transition-all
          duration-500

          hover:border-border
          hover:bg-accent
          hover:shadow-md
        "
      >
        {/* Hover glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/0
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-blue-500/10
          "
        />

        {/* Top number */}

        <span
          className="
            absolute
            right-3
            top-3
            text-[10px]
            font-bold
            tracking-[0.15em]
            text-foreground/70
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}

        <motion.div
          whileHover={{
            y: -4,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="
            relative
            z-10
            mb-3
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-border/60
            bg-background/60
            shadow-inner
          "
        >
          <skill.icon
            className={`
              h-6
              w-6
              ${skill.color || "text-foreground"}
            `}
          />
        </motion.div>

        {/* Name */}

        <span
          className="
            relative
            z-10
            text-center
            text-[11px]
            font-medium
            tracking-tight
            text-muted-foreground
            transition-colors
            duration-300
            group-hover:text-foreground
          "
        >
          {skill.name}
        </span>

        {/* Bottom line */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-10
            -translate-x-1/2
            origin-center
            bg-blue-400/60
          "
        />
      </div>
    </motion.div>
  );
};

/* ============================================================
   MAIN
============================================================ */

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const [activeCategory, setActiveCategory] =
    React.useState<Category>("frontend");

  const skillsMap: Record<Category, Skill[]> = {
    frontend: frontendSkills,
    backend: backendSkills,
    devops: devOpsSkills,
  };

  const activeData = categories.find(
    (category) => category.id === activeCategory
  )!;

  const activeSkills = skillsMap[activeCategory];

  return (
    <section
      ref={sectionRef}
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
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <motion.div
          animate={
            isInView
              ? {
                scale: [1, 1.06, 1],
                opacity: [0.1, 0.18, 0.1],
              }
              : {}
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[20%]
            top-[35%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.05]
            blur-[140px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            right-0
            top-1/2
            h-[300px]
            w-[300px]
            rounded-full
            bg-purple-500/[0.025]
            blur-[120px]
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
            bg-[radial-gradient(circle_at_center,transparent_20%,var(--section-bg)_90%)]
          "
        />
      </div>

      {/* ========================================================
          CONTAINER
      ======================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-14
            max-w-3xl
          "
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
            Tools I use
            <br />
            <span className="text-muted-foreground/40">
              to build the web.
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
            A collection of technologies I work with
            to design, develop and ship scalable
            digital experiences.
          </p>
        </motion.div>

        {/* ======================================================
            CATEGORY NAV
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="
            mb-8
            inline-flex
            max-w-full
            overflow-x-auto
            rounded-2xl
            border
            border-border/60
            bg-card
            p-1.5
            scrollbar-none
          "
        >
          {categories.map((category) => {
            const active = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="
                  relative
                  min-w-[145px]
                  cursor-pointer
                  rounded-xl
                  px-5
                  py-3.5
                  text-left
                  transition-colors
                  duration-300

                  sm:min-w-[170px]
                  sm:px-6
                "
              >
                {/* Active background */}

                {active && (
                  <motion.div
                    layoutId="activeSkillTab"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      border
                      border-border
                      bg-accent
                      shadow-sm
                    "
                  />
                )}

                <div className="relative z-10">
                  {/* Top row */}

                  <div className="flex items-center justify-between gap-6">
                    <span
                      className={`
                        whitespace-nowrap
                        text-sm
                        font-medium
                        tracking-tight
                        transition-colors
                        duration-300

                        sm:text-[15px]

                        ${active
                          ? "text-foreground"
                          : "text-muted-foreground"
                        }
                      `}
                    >
                      {category.label}
                    </span>

                    <span
                      className={`
                        text-xs
                        font-bold
                        tracking-[0.15em]
                        transition-colors

                        ${active
                          ? "text-blue-500 font-semibold"
                          : "text-muted-foreground"
                        }
                      `}
                    >
                      {category.number}
                    </span>
                  </div>

                  {/* Description */}

                  <p
                    className={`
                      mt-1.5
                      hidden
                      text-xs
                      leading-relaxed
                      transition-colors
                      duration-300

                      sm:block

                      ${active
                        ? "text-foreground/80 font-medium"
                        : "text-muted-foreground"
                      }
                    `}
                  >
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* ======================================================
            SKILLS PANEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-border/60
            bg-card
            p-5

            md:p-7
          "
        >
          {/* Panel header */}

          <div
            className="
              mb-7
              flex
              items-end
              justify-between
            "
          >
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >


                  <h3
                    className="
                      mt-1
                      text-lg
                      font-medium
                      tracking-tight
                      text-foreground
                    "
                  >
                    {activeData.label}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="
                hidden
                items-center
                gap-3
                text-[13px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground/40

                sm:flex
              "
            >
              <span>
                {String(activeSkills.length).padStart(
                  2,
                  "0"
                )}{" "}
                Technologies
              </span>

              <span className="h-px w-8 bg-border" />
            </div>
          </div>

          {/* ==================================================
              SKILL GRID
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-3

                md:grid-cols-4

                lg:grid-cols-5
              "
            >
              {activeSkills.map((skill, index) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;