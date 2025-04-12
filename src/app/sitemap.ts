import info from "@/constants/info";
import { generateDynamicEntries } from "@/lib/sitemapHelper";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSitemap = await generateDynamicEntries();

  return [
    {
      url: `${info.HOST_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${info.HOST_URL}/meet`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...blogSitemap,
  ];
}
