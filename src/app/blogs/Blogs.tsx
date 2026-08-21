"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";
import { Article } from "@/constants/blogs";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ServerErrorPage from "@/components/Error";
import FeaturedBlog from "@/components/FeaturedBlog";
import { categories } from "@/content";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";

/* ============================================================
   ANIMATIONS
============================================================ */

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featuredVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const filtersVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};



/* ============================================================
   MAIN
============================================================ */

const BlogsSection = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const blogs = getAllBlogsFetch();

  /* ============================================================
     FILTER + SORT
  ============================================================ */

  useEffect(() => {
    const filtered = blogs
      ?.filter((blog) => {
        const query = searchQuery.toLowerCase().trim();

        const matchesSearch =
          blog.title.toLowerCase().includes(query) ||
          blog.summary.toLowerCase().includes(query);

        const matchesCategory =
          selectedCategory === "all" ||
          blog.tags.some(
            (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
          );

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const dateA = new Date(a.published).getTime();
        const dateB = new Date(b.published).getTime();

        return sortOrder === "latest"
          ? dateB - dateA
          : dateA - dateB;
      })
      .map((blog) => ({
        ...blog,
        id: blog.id,
        readTime: blog.readTime ?? 0,
        views: blog.views ?? 0,
      }));

    setFilteredBlogs(filtered ?? []);
  }, [searchQuery, selectedCategory, sortOrder, blogs]);

  if (!blogs) {
    return <ServerErrorPage />;
  }

  /* ============================================================
     FEATURED BLOG
  ============================================================ */

  const featuredBlog =
    blogs.length > 0
      ? {
        ...blogs[blogs.length - 1],
        id: blogs[blogs.length - 1].id,
        readTime: blogs[blogs.length - 1].readTime ?? 0,
        views: blogs[blogs.length - 1].views ?? 0,
      }
      : undefined;

  return (
    <section
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
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-[20%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.06]
            blur-[150px]
          "
        />

        {/* Secondary glow */}

        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-[45%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-500/[0.05]
            blur-[130px]
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

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)]
          "
        />
      </div>

      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-muted-foreground/50
            "
          >

          </div>

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
            Latest tech
            <br />
            <span className="text-muted-foreground/40">
              blogs & insights.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-muted-foreground

              md:text-base
            "
          >
            Explore in-depth articles on software development, engineering,
            modern technologies, tutorials, and lessons learned while building
            digital products.
          </p>
        </motion.div>

        {/* ======================================================
            FEATURED BLOG
        ====================================================== */}

        {featuredBlog && (
          <motion.div
            variants={featuredVariants}

            className="mt-14"
          >
            <div className="relative">
              {/* subtle glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-3
                  rounded-[30px]
                  bg-primary/[0.03]
                  blur-2xl
                "
              />

              <div className="relative">
                <FeaturedBlog post={featuredBlog} />
              </div>
            </div>
          </motion.div>
        )}

        {/* ======================================================
            BLOG CONTROLS
        ====================================================== */}

        <motion.div
          variants={filtersVariants}
          className="mt-20"
        >
          {/* Section label */}

          <div className="mb-6 flex items-center justify-between">
            <div>
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground/40
                "
              >
                Explore articles
              </span>

              <h3 className="mt-1 text-lg font-medium tracking-tight">
                All posts
              </h3>
            </div>

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-muted-foreground/30

                sm:block
              "
            >
              {String(filteredBlogs.length).padStart(2, "0")} Articles
            </span>
          </div>

          {/* Controls */}

          <div
            className="
              flex
              flex-col
              gap-3
              rounded-2xl
              border
              border-border/50
              bg-background/50
              p-3
              backdrop-blur-xl

              md:flex-row
              md:items-center
            "
          >
            {/* Search */}

            <div className="relative flex-1">
              <Search
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-muted-foreground/50
                "
              />

              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  h-11
                  border-border/40
                  bg-background/50
                  pl-9
                  transition-all
                  duration-300

                  focus-visible:border-primary/40
                  focus-visible:ring-primary/10
                "
              />
            </div>

            {/* Category */}

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger
                className="
                  h-11
                  w-full
                  border-border/40
                  bg-background/50

                  md:w-[190px]
                "
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>

              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    key={category.value}
                    value={category.value}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}

            <Select
              value={sortOrder}
              onValueChange={setSortOrder}
            >
              <SelectTrigger
                className="
                  h-11
                  w-full
                  border-border/40
                  bg-background/50

                  md:w-[150px]
                "
              >
                <SelectValue placeholder="Sort" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="latest">
                  Latest
                </SelectItem>

                <SelectItem value="oldest">
                  Oldest
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* ======================================================
            BLOG GRID
        ====================================================== */}

        <AnimatePresence mode="wait">
          {filteredBlogs.length > 0 ? (
            <motion.div
              key={`${searchQuery}-${selectedCategory}-${sortOrder}`}
              variants={cardsContainerVariants}
              className="
                mt-8
                grid
                gap-5

                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {filteredBlogs.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                  className="h-full"
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
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
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                mt-8
                flex
                min-h-[220px]
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-border/50
                bg-background/30
              "
            >
              <div className="text-center">
                <div
                  className="
                    mx-auto
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border/50
                    bg-background
                  "
                >
                  <Search className="h-4 w-4 text-muted-foreground/50" />
                </div>

                <p className="text-sm font-medium">
                  No articles found
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Try adjusting your search or filters.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================
            BOTTOM
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-16
            flex
            items-center
            justify-between
            border-t
            border-border/40
            pt-5
          "
        >



        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;