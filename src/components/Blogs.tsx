"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";
import { Button } from "@/components/ui/button";
import ServerErrorPage from "./Error";
import FeaturedBlog from "./FeaturedBlog";
import { Separator } from "@radix-ui/react-select";

const BlogsSection = () => {
  const blogs = getAllBlogsFetch();
  if (!blogs) return <ServerErrorPage />;

  return (
    <section className="w-full bg-background py-8 px-8">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 py-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Latest Tech Blogs & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore in-depth articles on software development, stay updated with
            expert insights, tutorials, and best practices in the tech world.
          </p>
        </motion.div>

        {blogs && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <FeaturedBlog post={blogs[0]} />
          </motion.div>
        )}

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Link href="/blogs">
              <Button
                variant="default"
                size="lg"
                className="group font-medium text-base"
              >
                View All Blogs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <Separator className="my-16" />
      </div>
    </section>
  );
};

export default BlogsSection;
