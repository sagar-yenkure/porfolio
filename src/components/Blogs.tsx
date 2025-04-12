export const dynamic = "force-dynamic";

import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Article } from "@/constants/blogs";
import Link from "next/link";
import ServerErrorPage from "./Error";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";

const Blogs = () => {
  const blog = getAllBlogsFetch();
  if (!blog) return <ServerErrorPage />;

  const sliceBlog = blog.slice(0, 2);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <div className="my-6">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Latest Tech Blogs & Insights
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore blogs on software development, Stay updated with expert
          insights, tutorials, and best practices in the tech world.
        </p>
      </div>
      <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-8 md:gap-y-12 lg:gap-y-16">
        {blog?.length > 0 &&
          sliceBlog.map((post: Article) => (
            <BlogCard key={post.id} post={post} />
          ))}
      </div>

      <div className="flex justify-center mt-3">
        <Link href={"/blogs"}>
          <Button variant="default" className=" hover:cursor-pointer">
            View More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
