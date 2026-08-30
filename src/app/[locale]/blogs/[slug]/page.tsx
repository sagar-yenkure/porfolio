import { Metadata } from "next";
import BlogPage from "./BlogPage";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";
import { trackBlogView } from "@/lib/trackBlogView";
import { constructMetadata } from "@/lib/metadataHelper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const allContent = getAllBlogsFetch();
  const articles = allContent.filter((article) => article?.slug === slug);

  if (!articles || articles.length === 0) {
    return constructMetadata({
      title: locale === "jp" ? "ブログが見つかりません" : "Blog Not Found",
      description:
        locale === "jp"
          ? "要求されたブログ記事は見つかりませんでした。"
          : "The requested blog post could not be found.",
      pathname: `/blogs/${slug}`,
      locale,
    });
  }

  const article = articles[0];
  const title = locale === "jp" && article?.titleJp ? article.titleJp : article?.title;
  const description = locale === "jp" && article?.summaryJp ? article.summaryJp : article?.summary;

  return constructMetadata({
    title,
    description,
    keywords: article?.keyword,
    pathname: `/blogs/${article?.slug}`,
    locale,
    ogType: "article",
    image: article?.image,
  });
}

import info from "@/constants/info";

export default async function BlogPageWrapper({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  await trackBlogView(slug);

  const allContent = getAllBlogsFetch();
  const article = allContent.find((item) => item?.slug === slug);
  const hostUrl = info.HOST_URL || "https://sagaryenkure.com";

  const jsonLd = article
    ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.summary,
      inLanguage: locale === "jp" ? "ja-JP" : "en-US",
      image: [article.image],
      author: {
        "@type": "Person",
        name: article.author || "Sagar Yenkure",
        url: hostUrl,
      },
      publisher: {
        "@type": "Person",
        name: "Sagar Yenkure",
      },
      datePublished: article.published,
    }
    : null;

  return (
    <section className="py-28">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPage slug={slug} />
    </section>
  );
}
