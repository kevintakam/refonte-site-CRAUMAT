import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { ProductsSection } from "@/components/ui/products-section";
import { StatsSection } from "@/components/ui/stats-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
