"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function MeetPage() {
  const t = useTranslations("Meet");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "sagar-yenkure",
      });

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "auto",
      });
    })();
  }, []);

  return (
    <section
      id="meet"
      className="
        relative
        w-full
        overflow-hidden
        bg-background
        px-4
        py-20
        md:px-8
        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary glow */}

        <div
          className="
            absolute
            left-1/4
            top-0
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-primary/[0.06]
            blur-[120px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[100px]
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
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="mb-12 max-w-3xl"
        >
          {/* Heading */}

          <h1
            className="
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.045em]
              text-foreground

              md:text-5xl

              lg:text-6xl
            "
          >
            {t("title")}
            <br />

            <span className="text-muted-foreground/40">
              {t("subtitle")}
            </span>
          </h1>

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
            {t("description")}
          </p>

        </motion.div>

        {/* =================================================
            CALENDAR
        ================================================= */}

        <motion.div
          className="relative"
        >
          <div className="min-h-[700px] w-full">
            <Cal
              namespace="sagar-yenkure"
              calLink="sagar-yenkure/sagar-yenkure"
              style={{
                width: "100%",
                height: "700px",
                overflow: "hidden",
              }}
              config={{
                layout: "month_view",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}