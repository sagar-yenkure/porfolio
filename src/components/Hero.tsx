"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { CardData } from "@/constants/ThreeCards";

type Position = "left" | "center" | "right";

function DesktopThreeDImageSplit({
  Text,
  Cards,
  src
}: {
  Text: React.ReactNode;
  src: string;
  Cards: CardData[]
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    mass: 0.6,
  });

  const containerWidth = "65vw";
  const containerHeight = "46vh";
  const containerY = useTransform(progress, [0, 0.25, 0.5], [35, 10, 0]);
  const cardWidth = "30.5%";
  const cardHeight = "100%";
  const leftPosition = "0%";
  const centerPosition = "31.5%";
  const rightPosition = "63%";
  const leftX = useTransform(progress, [0.15, 0.42, 0.78], [0, 0, -5]);
  const centerX = 0;
  const rightX = useTransform(progress, [0.15, 0.42, 0.78], [0, 0, 5]);
  const leftFlip = useTransform(progress, [0.18, 0.42, 0.68], [0, 90, 180]);
  const centerFlip = useTransform(progress, [0.26, 0.52, 0.78], [0, 90, 180]);
  const rightFlip = useTransform(progress, [0.34, 0.62, 0.88], [0, 90, 180]);
  const leftRotateZ = useTransform(progress, [0.48, 0.72, 0.92], [0, -4, -7]);
  const centerRotateZ = 0;
  const rightRotateZ = useTransform(progress, [0.48, 0.72, 0.92], [0, 4, 7]);
  const radius = 16;
  const shadowOpacity = 0.2;

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block relative h-[220vh] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <div className="relative flex h-full w-full items-center justify-center">

          <motion.h2
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
                card={Cards[0]}
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
                card={Cards[1]}
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
                card={Cards[2]}
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ThreeDImageSplit({
  Text,
  Cards,
  src,
}: {
  Text: React.ReactNode;
  src: string;
  Cards: CardData[];
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <>
      {isDesktop && (
        <DesktopThreeDImageSplit Text={Text} Cards={Cards} src={src} />
      )}
      <section className="lg:hidden bg-[var(--section-bg)] px-3 py-10 text-foreground sm:px-4 sm:py-16">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-6 text-2xl font-semibold leading-tight sm:mb-8 sm:text-3xl">{Text}</h2>
          <div className="space-y-4">
            {Cards.map((card) => (
              <article
                key={card.number}
                className="min-h-48 overflow-hidden rounded-xl p-4 sm:min-h-56 sm:rounded-2xl sm:p-6"
                style={{ background: card.background, color: card.color }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] opacity-65">
                    {card.number} / {card.label}
                  </span>
                  <span aria-hidden="true" className="shrink-0">{card.icon}</span>
                </div>
                <h3 className="mt-6 whitespace-pre-line text-2xl font-medium leading-tight sm:mt-8 sm:text-3xl">{card.title}</h3>
                <p className="mt-3 max-w-sm text-xs leading-5 opacity-75 sm:mt-4 sm:text-sm sm:leading-6">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
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
  radius: number;
  shadowOpacity: number;
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

  const boxShadow = `0 25px 70px rgba(0,0,0,${shadowOpacity})`;

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