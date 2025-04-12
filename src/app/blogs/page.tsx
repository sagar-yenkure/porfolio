import info from "@/constants/info";
import { Metadata } from "next";
import React from "react";
import BlogsPage from "./Blogs";

export const metadata: Metadata = {
  title:
    "Tech Blogs by Sagar Yenkure | Web Development, Programming & Insights",
  description:
    "Explore insightful tech blogs on software development, web technologies, and full stack engineering written by Sagar Yenkure.",
  keywords: [
    "Tech Blogs",
    "Tutorials",
    "Software Development",
    "Problem Solving",
    "Web Development",
  ],
  publisher: "Sagar Yenkure",
  creator: "Sagar Yenkure",
  openGraph: {
    title:
      "Tech Blogs by Sagar Yenkure | Web Development, Programming & Insights",
    description:
      "Read the latest tech blogs and tutorials by Sagar Yenkure on full stack development, React, Next.js, and more.",
    url: `${info.HOST_URL}/blogs`,
    type: "article",
    images: [`${info.HOST_URL}/opengraph.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blogs by Sagar Yenkure",
    description:
      "Stay updated with tech articles and programming tips by Sagar Yenkure.",
    images: [`${info.HOST_URL}/opengraph.png`],
  },
  alternates: {
    canonical: `${info.HOST_URL}/blogs`,
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

const page = () => {
  return (
    <section>
      <h1 className="hidden">Latest Tech Blogs & Insights</h1>
      <BlogsPage />
    </section>
  );
};

export default page;
