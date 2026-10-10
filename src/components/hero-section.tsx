"use client";

import useDownloadResume from "@/hooks/useDownloadResume";
import {
  motion,
} from "framer-motion";
import { Link } from "@/i18n/routing";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {

  const t = useTranslations("Hero")

  const url = process.env.NEXT_PUBLIC_RESUME_URL as string;
  const { downloadResume, isLoading } = useDownloadResume(url);

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        bg-[var(--section-bg)]
        text-foreground
      "
    >
      {/* ========================================================
          SCENE
      ======================================================== */}

      <div
        className="
        max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8
          relative
          min-h-screen
          w-full
          overflow-hidden
          flex
          flex-col
          justify-end
          pb-8
          sm:pb-16
          md:pb-20
          [perspective:1400px]
        "
      >
        {/* ======================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 z-0">
          {/* glow */}

          <div
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

        <header
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

        </header>

        {/* ======================================================
            3D VIDEO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 0.8, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="
            absolute
            left-1/2
            top-[18%]
            z-20
            h-[180px]
            w-[180px]
            -translate-x-1/2
            overflow-hidden
            rounded-[28px]
            border
            border-border/60
            bg-background
            shadow-[0_40px_120px_rgba(0,0,0,.25)]
            sm:h-[260px]
            sm:w-[260px]
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

        <div
          className="
            absolute
            left-1/2
            top-[47%]
            z-30
            -translate-x-1/2
            whitespace-nowrap
          "
        >

        </div>

        {/* ======================================================
            NAME
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            z-30
            origin-bottom-left
            md:ml-[2%]
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
            {t("Greeting")}
          </div>

          <h1
            className="
              select-none
              text-[13vw]
              font-black
              uppercase
              leading-[0.72]
              tracking-[-0.06em]
              text-foreground
              sm:text-[15vw]
              sm:leading-[0.68]
              sm:tracking-[-0.08em]
              md:text-[13vw]
              lg:text-[11vw]
            "
          >
            SAGAR
            <br />
            YENKURE
          </h1>

          <div
            className="
              mt-4
              flex
              items-center
              gap-2
              text-[13px]
              uppercase
              tracking-[0.22em]
              text-muted-foreground
            "
          >
            {t("Title")}
          </div>
        </motion.div>

        {/* ======================================================
            DESCRIPTION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            z-40
            mt-8
            sm:absolute
            sm:bottom-[7%]
            sm:right-[6%]
            sm:mt-0
            md:right-[7%]
            lg:right-[8%]
          "
        >
          <div className="max-w-full sm:max-w-[300px]">
            <p
              className="
                text-[10px]
                leading-[1.55]
                text-muted-foreground
                md:text-xs
              "
            >
              {t("Description")}
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
                <span className="relative z-10">{t("LetsTalk")}</span>
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
                  {t("Resume")}
                </motion.span>

                {/* Icon */}
                <motion.span
                  className="relative z-10 flex items-center justify-center"
                >
                  <Download className="h-3.5 w-3.5  group-hover:translate-y-1" />
                </motion.span>
              </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}