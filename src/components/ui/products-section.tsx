import { ProductCard } from "./product-card";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import combineImage from "@/assets/combine-harvester.jpg";
import precisionImage from "@/assets/precision-agriculture.jpg";
import partsImage from "@/assets/parts-service.jpg";

export const ProductsSection = () => {
  const products = [
    {
      title: "Série 6M - Tracteur Polyvalent",
      image: combineImage,
      category: "Tracteurs",
      power: "145-175 CV",
      price: "À partir de 120 000€",
      isNew: true,
      description: "Le tracteur polyvalent idéal pour les exploitations moyennes. Confort optimal et technologie de pointe.",
      features: [
        "Transmission PowerQuad Plus",
        "Cabine SilentComfort",
        "Système de guidage AutoTrac"
      ]
    },
    {
      title: "Moissonneuse S700 Series",
      image: precisionImage,
      category: "Moissonneuses",
      power: "310-473 CV",
      price: "Sur devis",
      description: "Performance maximale pour les grandes exploitations. Capacité de traitement exceptionnelle.",
      features: [
        "Système de battage Active Yield",
        "Nettoyage intelligent 3D",
        "Cartographie de rendement"
      ]
    },
    {
      title: "Solutions Agriculture de Précision",
      image: partsImage,
      category: "Technologie",
      description: "Optimisez vos rendements avec nos solutions connectées et notre expertise en agriculture de précision.",
      features: [
        "Guidage GPS centimétrique",
        "Modulation de dose",
        "Analyse de données en temps réel"
      ]
    }
  ];

  return (
    <section id="produits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos produits <span className="text-gradient">phares</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète d'équipements agricoles conçus pour répondre 
            aux besoins spécifiques de votre exploitation et maximiser votre productivité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={product.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            Voir tous nos produits
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};