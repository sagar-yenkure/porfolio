"use client";

/* eslint-disable react-hooks/rules-of-hooks */

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import formatDateWithOrdinal from "@/hooks/useformatDateWithOrdinal";
import ServerErrorPage from "@/components/Error";
import RelatedBlog from "@/components/RelatedBlog";
import NewsletterSignup from "@/components/NewsletterSignup";
import CodeBlock from "@/components/CodeBlock";
import BackButton from "@/components/BackButton";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";

interface BlogPageProps {
  slug: string;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const BlogPage = ({ slug }: BlogPageProps) => {
  const allContent = getAllBlogsFetch();

  const articles = allContent?.filter(
    (article) => article?.slug === slug
  );

  if (!articles || articles.length === 0) {
    return <ServerErrorPage />;
  }

  const article = articles[0];

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroContentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "35%"]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 md:px-6 lg:flex-row lg:px-0">
        {/* =====================================================
            MAIN ARTICLE
        ====================================================== */}

        <motion.article
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:w-2/3"
        >
          {/* =================================================
              HERO
          ================================================== */}

          <motion.div
            ref={heroRef}
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              mb-10
              h-[420px]
              overflow-hidden
              rounded-3xl
              border
              border-border/40
              shadow-xl
              md:h-[500px]
            "
          >
            {/* Image */}
            <motion.div
              style={{
                y: heroImageY,
                scale: 1.08,
              }}
              className="absolute inset-0"
            >
              <Image
                src={article.image}
                alt={article.title}
                aria-label={article.title}
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-105
                "
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </motion.div>

            {/* Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/20
                via-black/30
                to-black/90
              "
            />

            {/* Subtle glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-primary/10
                blur-[100px]
              "
            />

            {/* Hero content */}
            <motion.div
              style={{
                y: heroContentY,
                opacity: heroOpacity,
              }}
              className="
                absolute
                inset-x-0
                bottom-0
                z-10
                flex
                flex-col
                justify-end
                p-6
                md:p-10
              "
            >
              {/* Label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.5,
                }}
              >
                <Badge
                  className="
                    w-fit
                    border
                    border-white/20
                    bg-white/10
                    px-3
                    py-1.5
                    text-sm
                    text-white
                    backdrop-blur-md
                  "
                >
                  {article.label}
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-4
                  max-w-4xl
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {article.title}
              </motion.h1>

              {/* Meta */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.5,
                }}
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-5
                  text-sm
                  text-white/70
                "
              >
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-white/80" />
                  <span>{article.author}</span>
                </div>

                <span className="h-1 w-1 rounded-full bg-white/30" />

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-white/80" />
                  <span>
                    {formatDateWithOrdinal(article.published)}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =================================================
              MARKDOWN CONTENT
          ================================================== */}

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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Card
              className="
                overflow-hidden
                rounded-3xl
                border
                border-border/40
                bg-card/40
                p-6
                shadow-sm
                backdrop-blur-sm
                md:p-10
              "
            >
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <motion.h1
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="mt-8 text-3xl font-bold tracking-tight"
                      >
                        {children}
                      </motion.h1>
                    ),

                    h2: ({ children }) => (
                      <h2 className="mt-10 text-2xl font-semibold tracking-tight">
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3 className="mt-8 text-xl font-semibold">
                        {children}
                      </h3>
                    ),

                    p: ({ children }) => (
                      <p className="mt-5 leading-8 text-foreground/80">
                        {children}
                      </p>
                    ),

                    ul: ({ children }) => (
                      <ul className="ml-6 mt-5 list-disc space-y-2">
                        {children}
                      </ul>
                    ),

                    ol: ({ children }) => (
                      <ol className="ml-6 mt-5 list-decimal space-y-2">
                        {children}
                      </ol>
                    ),

                    li: ({ children }) => (
                      <li className="leading-7">
                        {children}
                      </li>
                    ),

                    blockquote: ({ children }) => (
                      <blockquote
                        className="
                          my-6
                          rounded-r-xl
                          border-l-2
                          border-primary/50
                          bg-primary/[0.04]
                          px-5
                          py-3
                          text-muted-foreground
                        "
                      >
                        {children}
                      </blockquote>
                    ),

                    a: ({ children, href }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          font-medium
                          text-primary
                          underline-offset-4
                          transition-colors
                          hover:underline
                        "
                      >
                        {children}
                      </a>
                    ),

                    code({
                      inline,
                      className,
                      children,
                    }: CodeProps) {
                      const code = String(children).trim();

                      const language =
                        className?.replace(
                          "language-",
                          ""
                        ) || "tsx";

                      return inline ? (
                        <code
                          className="
                            rounded-md
                            bg-muted
                            px-2
                            py-1
                            text-sm
                            font-medium
                          "
                        >
                          {children}
                        </code>
                      ) : (
                        <CodeBlock
                          code={code}
                          language={language}
                        />
                      );
                    },
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>
            </Card>
          </motion.div>
        </motion.article>

        {/* =====================================================
            SIDEBAR
        ====================================================== */}

        <motion.aside
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            gap-6
            lg:sticky
            lg:top-24
            lg:h-fit
            lg:w-1/3
          "
        >
          {/* Newsletter */}
          <motion.div
            whileHover={{
              y: -3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <NewsletterSignup />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <Card
              className="
                rounded-2xl
                border
                border-border/40
                bg-card/40
                p-6
                shadow-sm
                backdrop-blur-sm
              "
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-primary/50" />

                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Popular Tags
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: string) => (
                  <motion.div
                    key={tag}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Badge
                      className="
                        cursor-default
                        rounded-lg
                        border
                        border-border/40
                        bg-muted/50
                        px-3
                        py-1.5
                        text-sm
                        font-medium
                        text-foreground/70
                        transition-colors
                        hover:bg-muted
                        hover:text-foreground
                      "
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Related blogs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <RelatedBlog />
          </motion.div>
        </motion.aside>
      </section>

      <BackButton />
    </>
  );
};

export default BlogPage;