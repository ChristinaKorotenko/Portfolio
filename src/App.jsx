import { HeroSection } from "./sections/HeroSection/HeroSection";
import { HowIWorkSection } from "./sections/HowIWorkSection/HowIWorkSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export function App() {
  return (
    <>
      <main id="content">
        <HeroSection />
        <ProjectsSection />
        <HowIWorkSection />
        <TestimonialsSection />
        <AboutMeSection />
        <FooterSection />
      </main>
    </>
  );
}

