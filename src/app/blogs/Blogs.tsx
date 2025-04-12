export const dynamic = "force-dynamic";

import BlogCard from "@/components/BlogCard";
import { Article } from "@/constants/blogs";
import ServerErrorPage from "@/components/Error";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";

const blogsPage = () => {
  const blog = getAllBlogsFetch();
  if (!blog) return <ServerErrorPage />;

  return (
    <section>
      <div className="max-w-7xl mx-auto pt-28 py-10 px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Latest Tech Blogs & Insights
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore blogs on software development, Stay updated with expert
          insights, tutorials, and best practices in the tech world.
        </p>
      </div>
      <div className="grid sm:grid-cols-12 gap-6">
        {blog?.length > 0 &&
          blog.map((post: Article) => <BlogCard key={post.id} post={post} />)}
      </div>
    </section>
  );
};

export default blogsPage;
