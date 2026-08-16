"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { Article } from "@/constants/blogs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import formatDateWithOrdinal from "@/hooks/useformatDateWithOrdinal";
import { useRef } from "react";

interface BlogCardProps {
  post: Article;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (y / rect.height - 0.5) * -5;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
        transformStyle: "preserve-3d",
      }}
      className="group h-full"
    >
      <Card
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border/40
          bg-card/30
          backdrop-blur-sm
          transition-all
          duration-500
          hover:border-border/70
          hover:bg-card/60
          hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]
        "
      >
        {/* Hover glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-primary/0
            blur-3xl
            transition-all
            duration-700
            group-hover:bg-primary/10
          "
        />

        {/* =====================================================
            IMAGE
        ====================================================== */}
        <motion.div
          className="
            relative
            aspect-[16/9]
            overflow-hidden
            rounded-t-2xl
          "
          whileHover={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <motion.div
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-full w-full"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw
              "
            />

            {/* Image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/10
                to-transparent
                opacity-70
                transition-opacity
                duration-500
                group-hover:opacity-90
              "
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2 + index * 0.08,
              duration: 0.4,
            }}
            className="
              absolute
              left-3
              top-3
              z-10
              flex
              flex-wrap
              gap-2
            "
          >
            {post.tags?.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="
                  border-border/20
                  bg-background/75
                  text-xs
                  font-medium
                  shadow-sm
                  backdrop-blur-md
                "
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Read indicator */}
          <div
            className="
              absolute
              bottom-3
              right-3
              z-10
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-black/40
              px-2.5
              py-1
              text-[10px]
              text-white/70
              backdrop-blur-md
            "
          >
            <Clock className="h-3 w-3" />
            {post.readTime || 8} min
          </div>
        </motion.div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <CardContent className="relative z-10 flex flex-1 flex-col p-5">
          {/* Meta */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15 + index * 0.08,
              duration: 0.4,
            }}
            className="
              mb-3
              flex
              flex-wrap
              items-center
              gap-2
              text-xs
              text-muted-foreground
            "
          >
            <span className="font-medium text-foreground/70">
              {formatDateWithOrdinal(post.published)}
            </span>

            <span className="text-muted-foreground/40">
              •
            </span>

            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>
                {post.readTime || 8} min read
              </span>
            </div>

            {post.views ? (
              <>
                <span className="text-muted-foreground/40">
                  •
                </span>

                <div className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  <span>
                    {post.views.toLocaleString()}
                  </span>
                </div>
              </>
            ) : null}
          </motion.div>

          {/* Title */}
          <motion.div
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
              delay: 0.2 + index * 0.08,
              duration: 0.45,
            }}
          >
            <Link
              href={`/blogs/${post.slug}`}
              aria-label={`Read about ${post.title}`}
              className="block"
            >
              <h3
                className="
                  mb-3
                  line-clamp-2
                  text-xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-foreground
                  transition-colors
                  duration-300
                  group-hover:text-primary
                  md:text-2xl
                "
              >
                {post.title}
              </h3>
            </Link>
          </motion.div>

          {/* Summary */}
          <motion.p
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
              delay: 0.25 + index * 0.08,
              duration: 0.45,
            }}
            className="
              mb-5
              line-clamp-3
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {post.summary}
          </motion.p>

          {/* Author */}
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
              delay: 0.3 + index * 0.08,
              duration: 0.4,
            }}
            className="mt-auto flex items-center gap-2"
          >
            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-border/50
                bg-background/60
                text-[10px]
                font-semibold
                text-muted-foreground
              "
            >
              {post.author?.charAt(0).toUpperCase()}
            </div>

            <span className="text-sm font-medium text-foreground/70">
              {post.author}
            </span>
          </motion.div>
        </CardContent>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <CardFooter className="relative z-10 border-t border-border/40 p-4">
          <Link
            href={`/blogs/${post.slug}`}
            aria-label={`Read about ${post.title}`}
            className="w-full"
          >
            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-border/50
                bg-background/40
                px-4
                py-2.5
                text-sm
                font-medium
                text-foreground
                transition-all
                duration-300
                group-hover:border-border
                group-hover:bg-background/70
              "
            >
              <span>
                Read blog
              </span>

              <motion.div
                className="ml-2"
                animate={{
                  x: 0,
                }}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;