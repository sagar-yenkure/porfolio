"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { Article } from "@/constants/blogs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import formatDateWithOrdinal from "@/hooks/useformatDateWithOrdinal";

interface BlogCardProps {
  post: Article;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  // Animation variants with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full bg-white/5 rounded-2xl"
    >
      <Card className="group h-full overflow-hidden border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex flex-col rounded-xl shadow-sm hover:shadow-md">
        {/* Image Container */}
        <motion.div
          className="relative aspect-[16/9] overflow-hidden rounded-t-xl"
          whileHover="hover"
        >
          <motion.div variants={imageVariants} className="h-full w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
          </motion.div>

          {/* Tags Overlay */}
          <motion.div
            variants={itemVariants}
            className="absolute top-3 left-3 flex flex-wrap gap-2 z-10"
          >
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-background/80 backdrop-blur-md text-xs font-medium shadow-sm border-border/20"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <CardContent className="flex-1 flex flex-col p-2">
          {/* Meta Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2"
          >
            <div className="flex items-center gap-1 font-medium text-foreground/70">
              {formatDateWithOrdinal(post.published)}
            </div>
            <span className="text-muted-foreground/50">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime || 8} min read</span>
            </div>
            {post.views && (
              <>
                <span className="text-muted-foreground/50">•</span>
                <div className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
              </>
            )}
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <Link
              aria-label={`Read about ${post.title}`}
              href={`/blogs/${post.slug}`}
              className="block"
            >
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
            </Link>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground line-clamp-2 mb-2"
          >
            {post.summary}
          </motion.p>

          {/* Author */}
          <motion.div
            variants={itemVariants}
            className="mt-auto flex items-center gap-2.5"
          >
            <span className="text-sm font-medium">{post.author}</span>
          </motion.div>
        </CardContent>

        {/* Footer with Button */}
        <CardFooter className="px-5 border-t border-border/40">
          <motion.div variants={itemVariants} className="w-full">
            <Link
              aria-label={`Read about ${post.title}`}
              href={`/blogs/${post.slug}`}
              className="w-full"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-background/50 hover:bg-background border border-border/60 hover:border-border text-foreground rounded-lg py-2.5 px-4 text-sm font-medium flex items-center justify-center group transition-all duration-200"
              >
                Read blog
                <motion.span
                  animate={{ x: 0 }}
                  whileHover={{
                    x: 4,
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6,
                    },
                  }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
