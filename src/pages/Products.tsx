import { useState } from "react";
import { Search, Filter, Grid, List, Heart, ArrowRight } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ui/product-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import combineImage from "@/assets/combine-harvester.jpg";
import precisionImage from "@/assets/precision-agriculture.jpg";
import partsImage from "@/assets/parts-service.jpg";
import heroImage from "@/assets/hero-tractor.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Tous les produits",
    "Tracteurs",
    "Moissonneuses",
    "Outils de travail du sol",
    "Pulvérisateurs",
    "Faucheuses",
    "Presses",
    "Équipements forestiers"
  ];

  const products = [
    {
      title: "Tracteur 6120M",
      image: heroImage,
      category: "Tracteurs",
      power: "120 CV",
      price: "À partir de 95 000€",
      isNew: false,
      description: "Tracteur polyvalent idéal pour les exploitations moyennes. Excellent rapport qualité-prix.",
      features: ["Transmission PowerQuad", "Cabine confort", "Relevage électronique"]
    },
    {
      title: "Tracteur 6155M",
      image: combineImage,
      category: "Tracteurs",
      power: "155 CV",
      price: "À partir de 125 000€",
      isNew: true,
      description: "Performance et efficacité pour les gros travaux agricoles.",
      features: ["Transmission AutoQuad Plus", "Guidage AutoTrac", "Cabine premium"]
    },
    {
      title: "Moissonneuse S680",
      image: precisionImage,
      category: "Moissonneuses",
      power: "353 CV",
      price: "Sur devis",
      description: "Moissonneuse haute performance pour grandes exploitations céréalières.",
      features: ["Système Active Yield", "Nettoyage 3D", "Cartographie rendement"]
    },
    {
      title: "Pulvérisateur R4030",
      image: partsImage,
      category: "Pulvérisateurs",
      power: "275 CV",
      price: "À partir de 185 000€",
      description: "Pulvérisateur automoteur pour applications de précision.",
      features: ["Cuve 3000L", "Rampe 36m", "Guidage ExactApply"]
    },
    {
      title: "Charrue 3800",
      image: heroImage,
      category: "Outils de travail du sol",
      power: "4-6 corps",
      price: "À partir de 28 000€",
      description: "Charrue réversible semi-portée pour labour de qualité.",
      features: ["Réglage hydraulique", "Socs auto-affûteurs", "Protection pierres"]
    },
    {
      title: "Faucheuse-conditionneuse 956",
      image: combineImage,
      category: "Faucheuses",
      power: "2.90m",
      price: "À partir de 35 000€",
      description: "Faucheuse pour foin et ensilage d'herbe de haute qualité.",
      features: ["Conditionneur à fléaux", "Suspension intégrale", "Groupe de coupe flottant"]
    }
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-accent">produits</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Découvrez notre gamme complète d'équipements agricoles de pointe, 
              conçus pour maximiser votre productivité et votre rentabilité.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                500+ modèles disponibles
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Financement disponible
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Garantie 2 ans
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Puissance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100">0-100 CV</SelectItem>
                  <SelectItem value="100-200">100-200 CV</SelectItem>
                  <SelectItem value="200-300">200-300 CV</SelectItem>
                  <SelectItem value="300+">300+ CV</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border border-border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}>
            {filteredProducts.map((product, index) => (
              <div key={product.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger plus de produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;