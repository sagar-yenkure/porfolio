import { Metadata } from "next";
import React from "react";
import BlogsPage from "./Blogs";
import { getTranslations } from "next-intl/server";
import { constructMetadata } from "@/lib/metadataHelper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.Blogs" });

  return constructMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    pathname: "/blogs",
    locale,
    ogType: "article",
  });
}

const page = () => {
  return (
    <section>
      <h1 className="hidden">Latest Tech Blogs & Insights</h1>
      <BlogsPage />
    </section>
  );
};

export default page;
