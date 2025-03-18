import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedSolution from "@/components/home/FeaturedSolution";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Update metadata for SEO
    document.title = "Muretta - Modern Construction Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Muretta - Modern Construction Solutions offering Structural Solutions, Cladding Systems, Solar Greenhouses and Prefab Construction"
      );
    }
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedSolution />
      <ProjectsShowcase />
      <Partners />
      <Testimonials />
      <CTASection />
    </>
  );
}
