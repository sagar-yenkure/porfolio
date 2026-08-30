import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import info from "@/constants/info";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

import { constructMetadata } from "@/lib/metadataHelper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.Root" });

  return constructMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    pathname: "/",
    locale,
  });
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const hostUrl = info.HOST_URL || "https://sagaryenkure.com";
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sagar Yenkure",
    url: hostUrl,
    jobTitle: "Software Engineer",
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL"
    ],
    sameAs: [
      "https://github.com/sagaryenkure",
      "https://twitter.com/sagaryenkure",
      "https://linkedin.com/in/sagaryenkure"
    ]
  };

  return (
    <>
      <html lang={locale === "jp" ? "ja" : "en"} suppressHydrationWarning className={poppins.className}>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
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
            <NextIntlClientProvider messages={messages}>

              <Navbar />
              <Toaster />
              {children}
              <FooterSection />

            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
