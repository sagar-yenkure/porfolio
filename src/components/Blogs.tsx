"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { getAllBlogsFetch } from "@/lib/sitemapHelper";
import ServerErrorPage from "./Error";
import FeaturedBlog from "./FeaturedBlog";
import { useTranslations } from "next-intl";

const BlogsSection = () => {
  const t = useTranslations("Blogs");
  const blogs = getAllBlogsFetch();
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });
  // SUBTLE 3D MOVEMENT

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [1.2, -1.2]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-1.2, 1.2]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
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

  if (!blogs) {
    return <ServerErrorPage />;
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <motion.div
          animate={
            isInView
              ? {
                scale: [1, 1.05, 1],
                opacity: [0.08, 0.12, 0.08],
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
            left-[70%]
            top-[30%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.05]
            blur-[150px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            bottom-[10%]
            left-[5%]
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
            bg-[radial-gradient(circle_at_center,transparent_20%,var(--section-bg)_92%)]
          "
        />
      </div>

      {/* // CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* // HEADER */}

        <div
          className="mb-12 max-w-3xl md:mb-16 lg:mb-20"
        >
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
            {t("heading")}
            <br />

            <span className="text-muted-foreground/40">
              {t("headingAccent")}
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
            {t("description")}
          </p>
        </div>

        {/* // BLOG META */}

        <div
          className="
      mb-6
      flex
      items-center
      justify-between
      border-b
      border-border/60
      pb-4
    "
        >
          <span
            className="
        text-[13px]
        uppercase
        tracking-[0.2em]
        text-muted-foreground
      "
          >
            {t("latestArticle")}
          </span>

          <span
            className="
        text-[13px]
        uppercase
        tracking-[0.2em]
        text-muted-foreground
      "
          >
            {String(blogs.length).padStart(2, "0")}{" "}
            {t("articles")}
          </span>
        </div>

        {/* // FEATURED BLOG */}

        {blogs[0] && (
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }}
            className="
        relative
        [transform-style:preserve-3d]
      "
          >
            {/* Outer glow */}

            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
          pointer-events-none
          absolute
          -inset-8
          -z-10
          rounded-[40px]
          bg-blue-500/[0.05]
          blur-[70px]
        "
            />

            {/* Featured card */}

            <div
              className="
          relative
          overflow-hidden
          rounded-[26px]
          border
          border-border/60
          bg-card
          text-card-foreground
          p-1
          backdrop-blur-xl

          transition-all
          duration-500

          hover:border-border
        "
            >
              <FeaturedBlog post={blogs[0]} />

              {/* Glass overlay */}

              <div
                className="
            pointer-events-none
            absolute
            inset-0
            rounded-[26px]
            bg-gradient-to-br
            from-white/[0.035]
            via-transparent
            to-blue-500/[0.025]
          "
              />
            </div>
          </motion.div>
        )}

        {/* // VIEW ALL */}

        <div
          className="
      mt-10
      flex
      justify-center
    "
        >
          <Link href="/blogs">
            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
          group
          flex
          items-center
          gap-4
          rounded-full
          border
          border-border/60
          bg-card
          px-6
          py-3
          text-[9px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-muted-foreground
          backdrop-blur-md
          transition-all
          duration-300

          hover:border-border
          hover:bg-accent
          hover:text-foreground
        "
            >
              {t("readAllArticles")}

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight
                  className="
              h-3.5
              w-3.5
            "
                />
              </motion.span>
            </motion.div>
          </Link>
        </div>

        {/* // BOTTOM STATUS */}

        <div
          className="
      mt-16
      flex
      items-center
      justify-between
      border-t
      border-white/[0.05]
      pt-5
    "
        ></div>
      </div>

    </section>
  );
};

export default BlogsSection;