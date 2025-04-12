import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Grid />
      <Work />
      <Projects />
      <Blogs />
      <Testimonials />
      <Contact />
    </>
  );
}
