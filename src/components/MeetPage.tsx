"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowDown } from "lucide-react";
import { useEffect } from "react";

export default function MeetPage() {
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
        md:py-28
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 max-w-3xl"
        >
          {/* Eyebrow */}
          <div
            className="
              mb-5
              flex
              items-center
              gap-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-muted-foreground/50
            "
          >
            <span className="h-px w-8 bg-border" />

            Let&apos;s Talk

            <span className="text-primary/60">/ 005</span>
          </div>

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
            Let&apos;s connect.
            <br />
            <span className="text-muted-foreground/40">
              Pick a time that works.
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
            Whether you want to talk tech, explore a collaboration, discuss a
            project, or simply connect — I&apos;m always happy to have a
            conversation.
          </p>

          {/* Small status */}
          <div className="mt-7 flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-border/60
                bg-muted/30
              "
            >
              <CalendarDays className="h-4 w-4 text-primary" />
            </div>

            <div>
              <p className="text-xs font-medium text-foreground">
                Book a meeting
              </p>
              <p className="text-[11px] text-muted-foreground">
                Choose any available slot below
              </p>
            </div>
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-border/50
            bg-card/30
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {/* Calendar top bar */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-border/40
              px-5
              py-4
              md:px-7
            "
          >
            <div className="flex items-center gap-2.5">
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-green-500
                "
              />

              <span className="text-xs font-medium text-muted-foreground">
                Available for meetings
              </span>
            </div>

            <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground/40 sm:flex">
              <span>Calendar</span>
              <ArrowDown className="h-3 w-3" />
            </div>
          </div>

          {/* Cal embed */}
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

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-border/30
            pt-5
          "
        >
          <span
            className="
              text-[12px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground/40
            "
          >
            Sagar / Connect
          </span>

          <span
            className="
              text-[12px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground/40
            "
          >
            Pune · India
          </span>
        </motion.div>
      </div>
    </section>
  );
}