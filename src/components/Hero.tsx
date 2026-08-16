"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

type Position = "left" | "center" | "right";
type CardData = {
  number: string;
  label: string;
  title: string;
  description: string;
  background: string;
  color: string;
  icon: React.ReactNode;
};

export default function ThreeDImageSplit({
  Text,
  src
}: {
  Text: React.ReactNode;
  src: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  const headingY = useTransform(
    progress,
    [0, 0.12, 0.23, 0.34],
    [260, 180, 70, 0]
  );

  const headingOpacity = useTransform(
    progress,
    [0.05, 0.12, 0.22, 0.30],
    [0, 0.2, 0.75, 1]
  );

  const containerWidth = useTransform(
    progress,
    [0, 0.08, 0.25, 0.42],
    ["65vw", "65vw", "65vw", "64vw"]
  );

  const containerHeight = useTransform(
    progress,
    [0, 0.08, 0.25, 0.42],
    ["51vh", "51vh", "49vh", "46vh"]
  );


  const containerY = useTransform(
    progress,
    [0, 0.12, 0.30, 0.50],
    [35, 30, 8, 0]
  );

  const cardWidth = useTransform(
    progress,
    [0, 0.30, 0.45],
    ["33.333%", "31.5%", "30.5%"]
  );


  const cardHeight = useTransform(
    progress,
    [0, 0.30, 0.45],
    ["100%", "100%", "100%"]
  );

  const leftPosition = useTransform(
    progress,
    [0, 0.25, 0.45],
    ["0%", "0%", "0%"]
  );

  const centerPosition = useTransform(
    progress,
    [0, 0.25, 0.45],
    ["33.333%", "32%", "31.5%"]
  );

  const rightPosition = useTransform(
    progress,
    [0, 0.25, 0.45],
    ["66.666%", "64%", "63%"]
  );

  const leftX = useTransform(
    progress,
    [0.20, 0.30, 0.45, 0.60],
    [0, 0, -3, -5]
  );

  const centerX = useTransform(
    progress,
    [0.20, 0.30, 0.45],
    [0, 0, 0]
  );

  const rightX = useTransform(
    progress,
    [0.20, 0.30, 0.45, 0.60],
    [0, 0, 3, 5]
  );

  const leftFlip = useTransform(
    progress,
    [0.38, 0.49, 0.61],
    [0, 90, 180]
  );

  const centerFlip = useTransform(
    progress,
    [0.40, 0.51, 0.63],
    [0, 90, 180]
  );

  const rightFlip = useTransform(
    progress,
    [0.42, 0.53, 0.65],
    [0, 90, 180]
  );

  const leftRotateZ = useTransform(
    progress,
    [0.48, 0.68, 0.80],
    [0, -4, -7]
  );

  const centerRotateZ = useTransform(
    progress,
    [0.48, 0.68, 0.80],
    [0, 0, 0]
  );

  const rightRotateZ = useTransform(
    progress,
    [0.48, 0.68, 0.80],
    [0, 4, 7]
  );

  const radius = useTransform(
    progress,
    [0, 0.25, 0.38, 0.52],
    [0, 0, 5, 16]
  );

  const shadowOpacity = useTransform(
    progress,
    [0, 0.30, 0.50, 0.70],
    [0, 0, 0.18, 0.3]
  );

  const cards: CardData[] = [
    {
      number: "01",
      label: "HIRE ME",
      title: "Build it\nwith Me",
      description:
        "Looking for a software engineer to turn your idea into a reliable, scalable and polished digital product?",
      background:
        "linear-gradient(145deg, #f4f4f4 0%, #dddddd 100%)",
      color: "#111111",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 19L19 5" />
          <path d="M10 5H19V14" />
        </svg>
      ),
    },

    {
      number: "02",
      label: "COLLABORATE",
      title: "Let's build\nTogether",
      description:
        "Have an interesting idea, project or team? Let's collaborate and create something meaningful together.",
      background:
        "linear-gradient(145deg, #286ce0 0%, #1243a5 100%)",
      color: "#ffffff",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        >
          <circle cx="10" cy="10" r="3" />
          <circle cx="22" cy="10" r="3" />
          <circle cx="10" cy="22" r="3" />
          <path d="M13 10H19" />
          <path d="M10 13V19" />
        </svg>
      ),
    },

    {
      number: "03",
      label: "ANIME & CHILL",
      title: "Into anime?\nLet's talk.",
      description:
        "I'm always up for talking about anime, sharing recommendations, or finding the next series worth watching.",
      background:
        "linear-gradient(145deg, #292929 0%, #101010 100%)",
      color: "#ffffff",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M12 3L14 9L21 12L14 14L12 21L10 14L3 12L10 9L12 3Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <div className="relative flex h-full w-full items-center justify-center">

          <motion.h2
            style={{
              y: headingY,
              opacity: headingOpacity,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[12%]
              z-[2]
              -translate-x-1/2
              whitespace-nowrap
              text-center
              font-serif
              text-[clamp(2rem,3.4vw,4rem)]
              leading-none
              tracking-[-0.04em]
              text-foreground
            "
          >
            {Text}
          </motion.h2>


          <motion.div
            style={{
              width: containerWidth,
              height: containerHeight,
              y: containerY,
              perspective: 1600,
              transformStyle: "preserve-3d",
            }}
            className="
              relative
              z-[10]
            "
          >

            <motion.div
              style={{
                left: leftPosition,
                width: cardWidth,
                height: cardHeight,
                x: leftX,
                rotateZ: leftRotateZ,
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
              className="absolute top-0"
            >
              <FlipCard
                src={src}
                position="left"
                flip={leftFlip}
                radius={radius}
                shadowOpacity={shadowOpacity}
                card={cards[0]}
              />
            </motion.div>

            <motion.div
              style={{
                left: centerPosition,
                width: cardWidth,
                height: cardHeight,
                x: centerX,
                rotateZ: centerRotateZ,
                transformStyle: "preserve-3d",
                zIndex: 20,
              }}
              className="absolute top-0"
            >
              <FlipCard
                src={src}
                position="center"
                flip={centerFlip}
                radius={radius}
                shadowOpacity={shadowOpacity}
                card={cards[1]}
              />
            </motion.div>

            <motion.div
              style={{
                left: rightPosition,
                width: cardWidth,
                height: cardHeight,
                x: rightX,
                rotateZ: rightRotateZ,
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
              className="absolute top-0"
            >
              <FlipCard
                src={src}
                position="right"
                flip={rightFlip}
                radius={radius}
                shadowOpacity={shadowOpacity}
                card={cards[2]}
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

//  FLIP CARD


function FlipCard({
  src,
  position,
  flip,
  radius,
  shadowOpacity,
  card,
}: {
  src: string;
  position: Position;
  flip: MotionValue<number>;
  radius: MotionValue<number>;
  shadowOpacity: MotionValue<number>;
  card: CardData;
}) {
  // ==========================================================
  // IMAGE CROP
  //
  // Same image on all 3 cards.
  // ==========================================================

  const backgroundPosition =
    position === "left"
      ? "0% center"
      : position === "center"
        ? "50% center"
        : "100% center";

  // ==========================================================
  // SHADOW
  // ==========================================================

  const boxShadow = useTransform(
    shadowOpacity,
    (value) => `0 25px 70px rgba(0,0,0,${value})`
  );

  // ==========================================================
  // TITLE POSITION
  // ==========================================================

  const titleTop =
    position === "left"
      ? "40%"
      : position === "center"
        ? "36%"
        : "35%";

  return (
    <motion.div
      style={{
        rotateY: flip,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full w-full"
    >

      {/* ======================================================
          FRONT — IMAGE
      ====================================================== */}

      <motion.div
        style={{
          borderRadius: radius,
          boxShadow,

          backgroundImage: `url("${src}")`,
          backgroundSize: "300% auto",
          backgroundPosition,
          backgroundRepeat: "no-repeat",

          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",

          transform: "translateZ(0)",
        }}
        className="
          absolute
          inset-0
          overflow-hidden
        "
      />

      {/* ======================================================
          BACK — CONTENT CARD
      ====================================================== */}

      <motion.div
        style={{
          borderRadius: radius,
          boxShadow,

          rotateY: 180,

          background: card.background,
          color: card.color,

          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className="
          absolute
          inset-0
          overflow-hidden
        "
      >

        <div className="relative h-full w-full">

          {/* ==================================================
              TOP LABEL
          ================================================== */}

          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[7%]
              flex
              items-center
              justify-between
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              opacity-50
              md:text-[10px]
              lg:text-xs
            "
          >
            <span>
              {card.number} / {card.label}
            </span>

            {/* <span>2026</span> */}
          </div>

          {/* ==================================================
              ICON
          ================================================== */}

          <div
            className="
              absolute
              left-[8%]
              top-[19%]
              opacity-65
            "
          >
            {card.icon}
          </div>

          {/* ==================================================
              TITLE
          ================================================== */}

          <h3
            style={{
              top: titleTop,
            }}
            className="
              absolute
              left-[8%]
              right-[7%]
              whitespace-pre-line
              text-[clamp(1.5rem,2.35vw,3rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.05em]
            "
          >
            {card.title}
          </h3>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              absolute
              bottom-[8%]
              left-[8%]
              right-[8%]
              max-w-[90%]
              text-[clamp(0.63rem,0.72vw,0.88rem)]
              leading-[1.4]
              opacity-60
            "
          >
            {card.description}
          </p>

        </div>
      </motion.div>
    </motion.div>
  );
}