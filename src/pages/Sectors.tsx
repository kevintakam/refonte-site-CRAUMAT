import { ArrowRight, Tractor, Building, Trees, Scissors } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import combineImage from "@/assets/combine-harvester.jpg";
import precisionImage from "@/assets/precision-agriculture.jpg";
import partsImage from "@/assets/parts-service.jpg";
import heroImage from "@/assets/hero-tractor.jpg";

const Sectors = () => {
  const sectors = [
    {
      title: "Agriculture",
      icon: Tractor,
      description: "Solutions complètes pour l'agriculture moderne et durable",
      image: heroImage,
      stats: {
        clients: "40 000+",
        satisfaction: "98%",
        productivity: "+25%"
      },
      features: [
        "Tracteurs polyvalents 50-500 CV",
        "Moissonneuses hautes performances",
        "Outils de travail du sol",
        "Agriculture de précision",
        "Semoirs et planteurs",
        "Équipements de récolte"
      ],
      useCases: [
        {
          title: "Exploitation céréalière",
          description: "Optimisez vos rendements avec nos moissonneuses S700 et tracteurs 7R.",
          benefits: "Jusqu'à +30% de productivité"
        },
        {
          title: "Élevage mixte",
          description: "Gérez efficacement cultures et élevage avec nos équipements polyvalents.",
          benefits: "Réduction des coûts de 20%"
        },
        {
          title: "Agriculture de précision",
          description: "Maximisez vos marges avec la télématique et le guidage GPS.",
          benefits: "Économies d'intrants de 15%"
        }
      ]
    },
    {
      title: "Construction",
      icon: Building,
      description: "Équipements robustes pour tous vos chantiers",
      image: combineImage,
      stats: {
        clients: "15 000+",
        satisfaction: "96%",
        productivity: "+20%"
      },
      features: [
        "Chargeuses compactes",
        "Tracteurs utilitaires",
        "Tondeuses professionnelles",
        "Équipements de terrassement",
        "Solutions de manutention",
        "Outils spécialisés BTP"
      ],
      useCases: [
        {
          title: "Terrassement",
          description: "Chargeuses et tracteurs adaptés aux travaux de terrassement.",
          benefits: "Polyvalence maximale"
        },
        {
          title: "Aménagement paysager",
          description: "Équipements précis pour l'aménagement d'espaces verts.",
          benefits: "Finition professionnelle"
        }
      ]
    },
    {
      title: "Forestier",
      icon: Trees,
      description: "Solutions spécialisées pour la gestion forestière",
      image: precisionImage,
      stats: {
        clients: "8 000+",
        satisfaction: "97%",
        productivity: "+35%"
      },
      features: [
        "Tracteurs forestiers",
        "Débusqueuses",
        "Abatteuses",
        "Équipements de débardage",
        "Broyeurs forestiers",
        "Remorques spécialisées"
      ],
      useCases: [
        {
          title: "Exploitation forestière",
          description: "Équipements haute performance pour l'abattage et le débardage.",
          benefits: "Productivité exceptionnelle"
        },
        {
          title: "Entretien forestier",
          description: "Outils spécialisés pour l'entretien et l'éclaircissement.",
          benefits: "Préservation de l'environnement"
        }
      ]
    },
    {
      title: "Espaces verts",
      icon: Scissors,
      description: "Entretien professionnel des espaces verts et terrains de sport",
      image: partsImage,
      stats: {
        clients: "12 000+",
        satisfaction: "99%",
        productivity: "+18%"
      },
      features: [
        "Tondeuses professionnelles",
        "Tracteurs compacts",
        "Équipements d'arrosage",
        "Outils d'entretien",
        "Solutions de tonte autonome",
        "Matériel de golf"
      ],
      useCases: [
        {
          title: "Terrains de golf",
          description: "Équipements de précision pour l'entretien des greens et fairways.",
          benefits: "Qualité professionnelle"
        },
        {
          title: "Collectivités",
          description: "Solutions robustes pour l'entretien des espaces publics.",
          benefits: "Fiabilité garantie"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-accent">secteurs</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Des solutions sur mesure pour chaque secteur d'activité. 
              Découvrez comment nos équipements s'adaptent à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={sector.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} animate-fade-in`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                          {sector.title}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                          {sector.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{sector.stats.clients}</div>
                        <div className="text-sm text-muted-foreground">Clients</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{sector.stats.satisfaction}</div>
                        <div className="text-sm text-muted-foreground">Satisfaction</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{sector.stats.productivity}</div>
                        <div className="text-sm text-muted-foreground">Productivité</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Nos équipements</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {sector.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Cas d'usage</h3>
                      <div className="space-y-4">
                        {sector.useCases.map((useCase) => (
                          <div key={useCase.title} className="border border-border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{useCase.title}</h4>
                              <Badge variant="secondary">{useCase.benefits}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{useCase.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="default" size="lg" className="group">
                      Découvrir les produits {sector.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-brand">
                      <img
                        src={sector.image}
                        alt={`Équipements ${sector.title}`}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-2xl font-bold">{sector.title}</div>
                        <div className="text-white/80">{sector.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos experts analysent vos besoins spécifiques et vous proposent 
            la solution optimale pour votre secteur d'activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Contacter un expert
            </Button>
            <Button variant="outline" size="lg">
              Demander une démonstration
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sectors;