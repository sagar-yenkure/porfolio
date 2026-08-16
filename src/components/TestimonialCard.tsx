"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Testimonial } from "@/constants/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  reverse?: boolean;
}

const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    {
      stiffness: 180,
      damping: 22,
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

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -6,
      }}
      className="
        group
        w-[300px]
        flex-shrink-0
        cursor-default

        md:w-[390px]

        [transform-style:preserve-3d]
      "
    >
      <div
        className="
          relative
          h-full
          min-h-[260px]
          overflow-hidden
          rounded-[24px]
          border
          border-border/60
          bg-card
          text-card-foreground
          p-6
          backdrop-blur-xl

          transition-all
          duration-500

          group-hover:border-border
          group-hover:bg-accent/80
          group-hover:shadow-[0_25px_70px_rgba(0,0,0,.15)]
        "
      >
        {/* =================================================
            HOVER GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[180px]
            w-[180px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/0
            blur-[90px]
            transition-all
            duration-700
            group-hover:bg-blue-500/[0.07]
          "
        />

        {/* =================================================
            TOP
        ================================================= */}

        <div
          className="
            relative
            z-10
            mb-8
            flex
            items-center
            justify-between
          "
        >
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
              bg-background/60
            "
          >
            <Quote
              className="
                h-4
                w-4
                text-blue-500
              "
            />
          </div>

          <span
            className="
              text-[7px]
              tracking-[0.2em]
              text-muted-foreground
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* =================================================
            MESSAGE
        ================================================= */}

        <p
          className="
            relative
            z-10
            min-h-[100px]
            text-[13px]
            leading-6
            tracking-[-0.01em]
            text-muted-foreground

            md:text-sm
          "
        >
          &quot;{testimonial.message}&quot;
        </p>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            relative
            z-10
            my-6
            h-px
            w-full
            bg-border
          "
        />

        {/* =================================================
            AUTHOR
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              relative
              h-12
              w-12
              overflow-hidden
              rounded-full
              border
              border-border
              grayscale
              transition-all
              duration-500
              group-hover:grayscale-0
            "
          >
            <Image
              src={testimonial.url}
              alt={testimonial.name}
              fill
              sizes="60px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <div
              className="
                truncate
                text-[13px]
                font-medium
                text-foreground
              "
            >
              {testimonial.name}
            </div>

            <div
              className="
                mt-0.5
                flex
                items-center
                gap-1.5
                text-[9px]
                text-muted-foreground
              "
            >
              <span>
                {testimonial.role}
              </span>

              {testimonial.company && (
                <>
                  <span className="text-muted-foreground/40">
                    /
                  </span>

                  <span>
                    {testimonial.company}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM ACCENT
        ================================================= */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-6
            h-px
            w-16
            origin-left
            bg-blue-400/60
          "
        />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;