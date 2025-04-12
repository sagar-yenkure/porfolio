import { Metadata } from "next";
import BlogPage from "./BlogPage";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";
import info from "@/constants/info";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const allContent = getAllBlogsFetch();
  const articles = allContent.filter((article) => article?.slug === slug);

  if (!articles) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  const article = articles[0];

  const description = article?.summary;

  return {
    title: article?.title,
    description,
    keywords: article.tags,
    publisher: "Sagar Yenkure",
    creator: "Sagar Yenkure",

    openGraph: {
      title: article?.title,
      description,
      type: "article",
      url: `${info.HOST_URL}/blogs/${article.slug}`,
      siteName: "Sagar Yenkure - Software Engineer",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: `${info.HOST_URL}/blogs/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPageWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="py-24">
      <BlogPage slug={slug} />
    </section>
  );
}
