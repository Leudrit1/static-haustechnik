import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ValuePropositions from "@/components/value-propositions";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import ProjectsGallery from "@/components/projects-gallery";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";
import { useEffect, useState } from "react";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleImageClick = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePropositions />
        <ServicesSection />
        <AboutSection />
        <ProjectsGallery onImageClick={handleImageClick} />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      {lightboxImage && (
        <Lightbox
          isOpen={!!lightboxImage}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
