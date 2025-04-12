import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting with Sagar Yenkure for a new Project",
  description:
    "Schedule a one-on-one meeting with Sagar Yenkure — a passionate Software Engineer. Pick a time that works for you and let's connect!",
  keywords: [
    "Book Meeting",
    "Schedule Call",
    "Sagar Yenkure",
    "Software Engineer",
    "Tech Chat",
    "Portfolio Meeting",
  ],
  openGraph: {
    title: "Book a Meeting with Sagar Yenkure",
    description:
      "Schedule a one-on-one meeting with Sagar Yenkure — a passionate Software Engineer. Pick a time that works for you and let's connect!",
    url: `${process.env.NEXT_PUBLIC_HOST_URL}/meet`,
    siteName: "Sagar Yenkure - Portfolio",
    locale: "en_US",
    type: "website",
    images: [`${process.env.NEXT_PUBLIC_HOST_URL}/opengraph.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Meeting with Sagar Yenkure",
    description:
      "Schedule a one-on-one meeting with Sagar Yenkure — a passionate Software Engineer. Pick a time that works for you and let's connect!",
    images: [`${process.env.NEXT_PUBLIC_HOST_URL}/opengraph.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_HOST_URL}/meet`,
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

import React from "react";
import MeetPage from "@/components/MeetPage";

const page = () => {
  return <MeetPage />;
};

export default page;
