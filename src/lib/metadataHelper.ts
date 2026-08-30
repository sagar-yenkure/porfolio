import type { Metadata } from "next";
import info from "@/constants/info";

interface LocalizedMetadataOptions {
  title: string;
  description: string;
  keywords?: string | string[];
  pathname?: string;
  locale: string;
  ogType?: "website" | "article";
  image?: string;
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  pathname = "/",
  locale,
  ogType = "website",
  image = "opengraph-image.png",
}: LocalizedMetadataOptions): Metadata {
  const hostUrl = info.HOST_URL || "https://sagaryenkure.com";
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pageUrl = `${hostUrl}/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  const keywordList = Array.isArray(keywords)
    ? keywords
    : typeof keywords === "string" && keywords.length > 0
    ? keywords.split(", ")
    : [];

  const imageUrl = image.startsWith("http")
    ? image
    : `${hostUrl}/${image.replace(/^\//, "")}`;

  const ogLocale = locale === "jp" ? "ja_JP" : "en_US";

  return {
    title,
    description,
    keywords: keywordList,
    metadataBase: new URL(hostUrl),
    publisher: "Sagar Yenkure",
    creator: "Sagar Yenkure",
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Sagar Yenkure - Software Engineer",
      locale: ogLocale,
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${hostUrl}/en${cleanPath === "/" ? "" : cleanPath}`,
        "en-IN": `${hostUrl}/en${cleanPath === "/" ? "" : cleanPath}`,
        ja: `${hostUrl}/jp${cleanPath === "/" ? "" : cleanPath}`,
        "ja-JP": `${hostUrl}/jp${cleanPath === "/" ? "" : cleanPath}`,
        "x-default": `${hostUrl}/en${cleanPath === "/" ? "" : cleanPath}`,
      },
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
