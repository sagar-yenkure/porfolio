import { MetadataRoute } from "next";
import info from "@/constants/info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${info.HOST_URL}/sitemap.xml`,
  };
}
