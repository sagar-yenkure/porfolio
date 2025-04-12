import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import info from "@/constants/info";

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
  openGraph: {
    title: "Sagar Yenkure - Software Engineer",
    description:
      "Welcome to the portfolio of Sagar Yenkure — a passionate Software Engineer. Explore projects, read blogs, and learn more about my journey in tech.",
    url: info.HOST_URL,
    siteName: "Sagar Yenkure - Software Engineer",
    locale: "en_US",
    type: "website",
    images: [`${info.HOST_URL}/opengraph.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Yenkure - Software Engineer",
    description:
      "Welcome to the portfolio of Sagar Yenkure — a passionate Software Engineer. Explore projects, read blogs, and learn more about my journey in tech.",
    images: [`${info.HOST_URL}/opengraph.png`],
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
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
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
