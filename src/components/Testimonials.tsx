"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { useTranslations } from "next-intl";
import { Testimonial, testimonials } from "@/constants/testimonials";

export type TestimonialLayout =
  | "auto"
  | "grid"
  | "pinterest"
  | "carousel"
  | "spotlight";

interface TestimonialsProps {
  layout?: TestimonialLayout;
  mode?: "light" | "dark";
}

/* ============================================================
   CAROUSEL LAYOUT
============================================================ */

function CarouselLayout({ items }: { items: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
  }, [total]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(index);
    startAutoPlay();
  };

  return (
    <div className="mx-auto max-w-2xl px-4 md:px-8">
      <div className="relative min-h-[320px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestimonialCard
              testimonial={items[current]}
              index={current}
              fluid
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current
              ? "w-6 bg-foreground"
              : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   SPOTLIGHT LAYOUT
============================================================ */

function SpotlightLayout({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const featured = items[active];
  const others = items.filter((_, i) => i !== active);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Featured card - large */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <TestimonialCard
                testimonial={featured}
                index={active}
                fluid
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side list */}
        <div className="flex flex-row gap-3 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
          {others.slice(0, 5).map((testimonial) => {
            const realIndex = items.indexOf(testimonial);
            return (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActive(realIndex)}
                className={`flex-shrink-0 rounded-xl border p-3 text-left transition-all duration-300 ${realIndex === active
                  ? "border-foreground/20 bg-accent"
                  : "border-border/40 bg-card hover:border-border hover:bg-accent/50"
                  }`}
                style={{ minWidth: "200px" }}
              >
                <p className="line-clamp-2 text-xs text-muted-foreground">
                  &quot;{testimonial.message}&quot;
                </p>
                <p className="mt-2 text-[11px] font-medium text-foreground">
                  {testimonial.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   AUTO (CURRENT) LAYOUT
============================================================ */

function AutoLayout({ items }: { items: Testimonial[] }) {
  const firstHalf = items.slice(0, Math.ceil(items.length / 2));
  const secondHalf = items.slice(Math.ceil(items.length / 2));

  return (
    <>
      <div className="relative mb-5 overflow-visible">
        <div className="flex w-max gap-3 sm:gap-4 md:gap-5">
          {[...firstHalf, ...firstHalf].map(
            (testimonial: Testimonial, index: number) => (
              <TestimonialCard
                key={`first-${index}`}
                testimonial={testimonial}
                index={index}
              />
            )
          )}
        </div>
      </div>
      <div className="relative overflow-visible">
        <div className="flex w-max gap-3 sm:gap-4 md:gap-5">
          {[...secondHalf, ...secondHalf].map(
            (testimonial: Testimonial, index: number) => (
              <TestimonialCard
                key={`second-${index}`}
                testimonial={testimonial}
                index={index}
                reverse
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

const Testimonials = ({
  layout: initialLayout = "auto",
  mode,
}: TestimonialsProps) => {
  const t = useTranslations("Testimonials");
  const layout = initialLayout;

  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        bg-[var(--section-bg)]
        text-foreground
        section-container
        ${mode === "dark" ? "dark" : ""}
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <div
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

        <div
          className="
            mx-auto
            mb-10
            max-w-7xl
            px-4
            sm:mb-16
            md:px-8
          "
        >
          {/* Heading */}
          <h2
            className="
              max-w-4xl
              text-3xl
              font-bold
              leading-[0.95]
              tracking-[-0.055em]
              text-foreground
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {t("heading")}
            <br />
            <span className="text-muted-foreground/40">
              {t("headingAccent")}
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-2xl
              text-xs
              leading-5
              text-muted-foreground
              sm:mt-6
              sm:text-sm
              sm:leading-6
              md:text-base
            "
          >
            {t("description")}
          </p>
        </div>

        {/* ===================================================
            LAYOUTS
        =================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={layout}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {layout === "auto" && <AutoLayout items={testimonials} />}

            {layout === "grid" && (
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:gap-4 md:px-8 xl:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`grid-${index}`}
                    testimonial={testimonial}
                    index={index}
                    fluid
                  />
                ))}
              </div>
            )}

            {layout === "pinterest" && (
              <div className="mx-auto max-w-7xl columns-1 gap-3 px-4 sm:columns-2 sm:gap-4 md:px-8 xl:columns-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`pinterest-${index}`}
                    className="mb-3 break-inside-avoid sm:mb-4"
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      index={index}
                      fluid
                    />
                  </div>
                ))}
              </div>
            )}

            {layout === "carousel" && <CarouselLayout items={testimonials} />}

            {layout === "spotlight" && (
              <SpotlightLayout items={testimonials} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;