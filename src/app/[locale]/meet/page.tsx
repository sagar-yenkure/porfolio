import { Metadata } from "next";
import React from "react";
import MeetPage from "@/components/MeetPage";
import { getTranslations } from "next-intl/server";
import { constructMetadata } from "@/lib/metadataHelper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.Meet" });

  return constructMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    pathname: "/meet",
    locale,
  });
}

const page = () => {
  return <MeetPage />;
};

export default page;
