import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import info from "@/constants/info";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Sagar Yenkure - a passionate Software Engineer",
  description:
    "Welcome to the portfolio of Sagar Yenkure — a passionate Software Engineer. Explore projects, read blogs, and learn more about my journey in tech.",
  keywords: [
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Tech Enthusiast",
    "Blogs",
  ],
  metadataBase: new URL(info.HOST_URL!),
  openGraph: {
    title: "Sagar Yenkure - Software Engineer",
    description:
      "Welcome to the portfolio of Sagar Yenkure — a passionate Software Engineer. Explore projects, read blogs, and learn more about my journey in tech.",
    url: info.HOST_URL,
    siteName: "Sagar Yenkure - Software Engineer",
    locale: "en_US",
    type: "website",
    images: ["opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Yenkure - Software Engineer",
    description:
      "Welcome to the portfolio of Sagar Yenkure — a passionate Software Engineer. Explore projects, read blogs, and learn more about my journey in tech.",
    images: ["opengraph-image.png"],
  },
  alternates: {
    canonical: info.HOST_URL,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <Analytics />
          <SpeedInsights />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Toaster />
            {children}
            <FooterSection />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
