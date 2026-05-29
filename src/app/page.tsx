import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropsSection } from "@/components/sections/ValuePropsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-forest text-cream pb-20 rounded-b-[40px] md:rounded-b-[80px]">
        <HeroSection />
        <ValuePropsSection />
      </div>
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <TechnologySection />
      <FAQSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
