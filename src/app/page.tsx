import PageTransition from "@/components/PageTransition";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import ThreeDImageSplit from "@/components/Hero";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <PageTransition>
      <div>
        <HeroSection />

        <ThreeDImageSplit
          Text={
            <>
              What are we building <i>next?</i>
            </>
          }
          src="https://res.cloudinary.com/dja2zi1g7/image/upload/v1786798690/Guts_Berserk_Moonlight.jpg"
        />

        <Grid />
        <Skills />
        <Work />
        <Projects />
        <Blogs />
        <Testimonials />
        <Contact />
      </div>
    </PageTransition>
  );
}