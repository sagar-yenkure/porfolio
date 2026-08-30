import info from "@/constants/info";
import { getAllBlogsFetch } from "@/lib/sitemapHelper";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hostUrl = info.HOST_URL || "https://sagaryenkure.com";
  const locales = ["en", "jp"];
  const blogs = getAllBlogsFetch();
  const lastModified = new Date();

  const staticRoutes = ["", "/blogs", "/meet"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${hostUrl}/${locale}${route}`,
      lastModified,
      changeFrequency: "monthly",
      priority: route === "" ? 1.0 : 0.9,
      alternates: {
        languages: {
          en: `${hostUrl}/en${route}`,
          "en-IN": `${hostUrl}/en${route}`,
          ja: `${hostUrl}/jp${route}`,
          "ja-JP": `${hostUrl}/jp${route}`,
          "x-default": `${hostUrl}/en${route}`,
        },
      },
    }))
  );

  const blogEntries: MetadataRoute.Sitemap = blogs.flatMap((blog) =>
    locales.map((locale) => ({
      url: `${hostUrl}/${locale}/blogs/${blog.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${hostUrl}/en/blogs/${blog.slug}`,
          "en-IN": `${hostUrl}/en/blogs/${blog.slug}`,
          ja: `${hostUrl}/jp/blogs/${blog.slug}`,
          "ja-JP": `${hostUrl}/jp/blogs/${blog.slug}`,
          "x-default": `${hostUrl}/en/blogs/${blog.slug}`,
        },
      },
    }))
  );

  return [...staticEntries, ...blogEntries];
}
