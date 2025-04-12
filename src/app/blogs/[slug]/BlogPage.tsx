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
import React from "react";
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
  const articles = allContent?.filter((article) => article?.slug === slug);
  if (!articles || articles.length === 0) return <ServerErrorPage />;
  const article = articles[0];

  return (
    <>
      <section className="max-w-6xl mx-auto px-3 md:px-4 lg:px-0 flex flex-col md:flex-row gap-10">
        <article className="w-full lg:w-2/3">
          {/* Hero Section */}
          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              priority
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 backdrop-blur-sm flex flex-col justify-end p-8 text-white">
              <Badge className="bg-white/20 text-white text-sm px-3 py-1 self-start">
                {article.label}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-snug text-white">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-white" />
                  <span className="text-white">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-white" />
                  <span className="text-white">
                    {formatDateWithOrdinal(article.published)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Markdown Content */}
          <Card className="p-8 md:p-10 prose prose-lg dark:bg-zinc-900 max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-6">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-6">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mt-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-6 space-y-2">{children}</ul>
                ),
                code({ inline, className, children }: CodeProps) {
                  const code = String(children).trim();
                  const language = className?.replace("language-", "") || "tsx";

                  return inline ? (
                    <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 text-sm rounded-md">
                      {children}
                    </code>
                  ) : (
                    <CodeBlock code={code} language={language} />
                  );
                },
              }}
            >
              {article.content}
            </ReactMarkdown>
          </Card>
        </article>

        {/* Sidebar */}
        <aside className="lg:flex flex-col w-fit lg:w-1/3 space-y-6">
          <NewsletterSignup />
          <Card className="p-6 dark:bg-zinc-900 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Popular Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
          <RelatedBlog />
        </aside>
      </section>
      <BackButton />
    </>
  );
};

export default BlogPage;
