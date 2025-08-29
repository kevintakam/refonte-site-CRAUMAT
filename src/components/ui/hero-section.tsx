import { ArrowRight, Play } from "lucide-react";
import { Button } from "./button";
import heroImage from "@/assets/hero-tractor.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tracteur moderne dans un champ au coucher de soleil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            L'agriculture de demain
            <span className="block text-gradient">commence aujourd'hui</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Équipements agricoles de pointe, solutions de précision et service d'excellence 
            pour maximiser votre productivité et votre rentabilité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Découvrir nos produits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5" />
              Voir la démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="animate-slide-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">+180</div>
              <div className="text-sm md:text-base opacity-80">Ans d'expertise</div>
            </div>
            <div className="animate-slide-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Concessionnaires</div>
            </div>
            <div className="animate-slide-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-sm md:text-base opacity-80">Satisfaction client</div>
            </div>
            <div className="animate-slide-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-80">Support technique</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};