"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react";
import { Article } from "@/constants/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import formatDateWithOrdinal from "@/hooks/useformatDateWithOrdinal";

interface FeaturedBlogProps {
  post: Article;
}

const FeaturedBlog = ({ post }: FeaturedBlogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-xl border bg-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-background/50">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <motion.h3
                className="text-2xl md:text-3xl font-bold tracking-tight mb-4 hover:text-primary transition-colors duration-200"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {post.title}
              </motion.h3>
            </Link>

            <p className="text-muted-foreground mb-6">{post.summary}</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{formatDateWithOrdinal(post.published)}</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center">
                <Clock className="h-4 w-4" />
                <span>{post.readTime || 8} min read</span>
              </div>
              {post.views && (
                <div className="flex items-center gap-1.5 justify-center">
                  <Eye className="h-4 w-4" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <p className="font-medium">By {post.author}</p>

              <Link href={`/blogs/${post.slug}`}>
                <Button aria-label="Read Featured Blog" className="group">
                  Read Featured Blog
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-60 md:h-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBlog;
