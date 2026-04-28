import { HeroSection } from "./sections/HeroSection/HeroSection";
import { HowIWorkSection } from "./sections/HowIWorkSection/HowIWorkSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { useSectionGradientFlow } from "./hooks/useSectionGradientFlow";

export function App() {
  useSectionGradientFlow();

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <main id="content">
        <HeroSection />
        <HowIWorkSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </>
  );
}

