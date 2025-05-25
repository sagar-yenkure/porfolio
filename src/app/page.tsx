import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSection />
      <Grid />
      <Skills />
      <Work />
      <Projects />
      <Blogs />
      <Testimonials />
      <Contact />
    </>
  );
}
