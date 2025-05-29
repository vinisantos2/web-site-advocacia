import Hero from "../components/Hero";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import AreaSection from "../sections/SectionAreas";
import { TestimonialsSection } from "../sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TestimonialsSection />
      <AreaSection />
      <ContactSection />

    </div>


  );
}
