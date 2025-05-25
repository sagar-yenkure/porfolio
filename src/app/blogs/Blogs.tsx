"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BlogsSection = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogs = getAllBlogsFetch();

  useEffect(() => {
    const filtered = blogs
      ?.filter((blog) => {
        const matchesSearch =
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.summary.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" ||
          blog.tags.some(
            (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
          );

        return matchesSearch && matchesCategory;
      })
      .map((blog) => ({
        ...blog,
        readTime: blog.readTime ?? 0,
        views: blog.views ?? 0,
      }));

    setFilteredBlogs(filtered);
  }, [searchQuery, selectedCategory, blogs]);

  if (!blogs) return <ServerErrorPage />;

  const featuredBlog = blogs[0];

  return (
    <section className="w-full bg-background pt-26 px-8">
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

        {featuredBlog && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <FeaturedBlog post={featuredBlog} />
          </motion.div>
        )}

        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search blogs..."
                  className="pl-8 w-full md:w-[200px] lg:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px] hidden lg:flex">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
