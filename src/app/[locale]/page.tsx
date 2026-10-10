import PageTransition from "@/components/PageTransition";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import ThreeDImageSplit from "@/components/Hero";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work"; import { getLocale, getTranslations } from "next-intl/server";
import { cardsEN, cardsJP } from "@/constants/ThreeCards";

export default async function Home() {
  const t = await getTranslations("3dCards")
  const locale = await getLocale();

  const cards = locale === "jp" ? cardsJP : cardsEN;

  return (
    <PageTransition>
      <div>
        <HeroSection />

        <ThreeDImageSplit
          Cards={cards}
          Text={t?.rich("Title", {
            i: (chunks) => <i>{chunks}</i>,
          })}
          src="https://res.cloudinary.com/dja2zi1g7/image/upload/v1786798690/Guts_Berserk_Moonlight.jpg"

        />
        <Grid />
        <Skills />
        <Work />
        <Projects />
        <Blogs />
        <Testimonials layout="pinterest" />
        <Contact />
      </div>
    </PageTransition>
  );
}