"use client";

import { Timeline } from "./ui/timeline";
import useCalculateExperience from "@/hooks/useCalculateExperience";
import { useLocale, useTranslations } from "next-intl";

import { motion } from "framer-motion";
import { workDataEn, workDataJp } from "@/constants";

const Work = () => {
  const t = useTranslations("Work");
  const locale = useLocale();

  const workData = locale === "jp"
    ? workDataJp
    : workDataEn;

  const { months, years } = useCalculateExperience(2, 2024);

  return (
    <section
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
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
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

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}

        <div
          className="
            mb-10
            max-w-4xl
            origin-left
          "
        >
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
            {t("title")}
            <br />

            <span className="text-muted-foreground/40">
              {t("titleHighlight")}
            </span>
          </h2>

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
            {t("description")}
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
                {t("yearsExperience")}
              </div>
            </div>

            <div className="h-8 w-px bg-border" />

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
                {t("careerMilestones")}
              </div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}

        <motion.div
          className="relative mt-4"
        >
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

        {/* BOTTOM MARKER */}

        <motion.div
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

          {t("moreChapters")}

          <span className="h-px w-10 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Work;