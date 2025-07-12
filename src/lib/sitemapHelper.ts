import info from "@/constants/info";
import { MetadataRoute } from "next";
import ContentList from "@/content";

export const getAllBlogsFetch = () => ContentList;

export const generateDynamicEntries =
  async (): Promise<MetadataRoute.Sitemap> => {
    const blogs = getAllBlogsFetch();
    const lastModified = new Date();

    return blogs.map((item) => ({
      url: `${info.HOST_URL}/blogs/${item.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    }));
  };
