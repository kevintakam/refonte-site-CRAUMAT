import { Satellite, TrendingUp, MapPin, BarChart3, Wifi, Smartphone } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import precisionImage from "@/assets/precision-agriculture.jpg";
import combineImage from "@/assets/combine-harvester.jpg";
import heroImage from "@/assets/hero-tractor.jpg";

const PrecisionAgriculture = () => {
  const solutions = [
    {
      title: "Guidage GPS AutoTrac",
      description: "Guidage centimétrique pour une précision maximale",
      icon: Satellite,
      accuracy: "±2,5 cm",
      image: precisionImage,
      features: [
        "Guidage automatique",
        "Cartographie de champs",
        "Répétabilité parfaite",
        "Compatible tous équipements"
      ],
      benefits: [
        "Réduction fatigue conducteur",
        "Économies de carburant jusqu'à 10%",
        "Optimisation des recouvrements",
        "Travail de nuit possible"
      ]
    },
    {
      title: "Modulation de dose",
      description: "Application variable d'intrants selon les besoins",
      icon: TrendingUp,
      accuracy: "Zone par zone",
      image: combineImage,
      features: [
        "Cartes de prescription",
        "Capteurs temps réel",
        "Application automatique",
        "Traçabilité complète"
      ],
      benefits: [
        "Économies d'intrants 15-20%",
        "Amélioration des rendements",
        "Respect de l'environnement",
        "ROI rapide"
      ]
    },
    {
      title: "Cartographie de rendement",
      description: "Analyse précise de la productivité parcellaire",
      icon: BarChart3,
      accuracy: "Mètre par mètre",
      image: heroImage,
      features: [
        "Mesure en temps réel",
        "Cartes automatiques",
        "Analyse multi-années",
        "Export données"
      ],
      benefits: [
        "Identification zones performantes",
        "Optimisation stratégie culturale",
        "Aide à la décision",
        "Valorisation parcellaire"
      ]
    }
  ];

  const technologies = [
    {
      name: "JDLink Connect",
      description: "Connectivité totale de votre flotte",
      icon: Wifi,
      features: ["Localisation temps réel", "Alertes automatiques", "Rapports d'activité", "Maintenance prédictive"]
    },
    {
      name: "Operations Center",
      description: "Centre de commande digital",
      icon: MapPin,
      features: ["Vue d'ensemble flotte", "Planification travaux", "Transfert de données", "Optimisation routes"]
    },
    {
      name: "MyOperations App",
      description: "Pilotage mobile de vos équipements",
      icon: Smartphone,
      features: ["Contrôle à distance", "Transfert données", "Documentation digitale", "Support technique"]
    }
  ];

  const caseStudies = [
    {
      farmer: "Exploitation Dubois",
      location: "Eure-et-Loir (28)",
      surface: "450 hectares",
      crops: "Blé, Colza, Maïs",
      results: {
        fuel: "-12%",
        inputs: "-18%",
        yield: "+8%",
        roi: "18 mois"
      },
      testimonial: "L'agriculture de précision a transformé notre façon de travailler. Les économies sont immédiates et la qualité de travail incomparable."
    },
    {
      farmer: "EARL des Champs",
      location: "Beauce (45)",
      surface: "780 hectares",
      crops: "Céréales, Betteraves",
      results: {
        fuel: "-15%",
        inputs: "-22%",
        yield: "+12%",
        roi: "14 mois"
      },
      testimonial: "Le retour sur investissement a été plus rapide que prévu. Nos marges se sont considérablement améliorées."
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
              Agriculture de <span className="text-accent">précision</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Maximisez vos rendements et réduisez vos coûts avec nos solutions 
              d'agriculture de précision connectées et intelligentes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Précision ±2,5 cm
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                -20% d'intrants
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                +15% rendement
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Nos solutions de <span className="text-gradient">précision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment la technologie peut révolutionner votre exploitation 
              et améliorer significativement votre rentabilité.
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={solution.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} animate-fade-in`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {solution.description}
                        </p>
                        <Badge className="mt-2 bg-accent text-accent-foreground">
                          Précision: {solution.accuracy}
                        </Badge>
                      </div>
                    </div>

                    {/* Features & Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Caractéristiques</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Bénéfices</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button variant="default" size="lg" className="group">
                      En savoir plus sur {solution.title}
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-brand">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-2xl font-bold">{solution.title}</div>
                        <div className="text-white/80">Précision: {solution.accuracy}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Écosystème <span className="text-gradient">connecté</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une suite complète d'outils digitaux pour piloter et optimiser 
              votre exploitation depuis n'importe où.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card key={tech.name} className="hover:shadow-brand transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tech.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-6">
                      Découvrir {tech.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Témoignages de <span className="text-gradient">réussite</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment nos clients ont transformé leur exploitation 
              avec l'agriculture de précision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={study.farmer} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl">{study.farmer}</CardTitle>
                  <CardDescription className="text-lg">
                    {study.location} • {study.surface} • {study.crops}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{study.results.fuel}</div>
                      <div className="text-xs text-muted-foreground">Carburant</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{study.results.inputs}</div>
                      <div className="text-xs text-muted-foreground">Intrants</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{study.results.yield}</div>
                      <div className="text-xs text-muted-foreground">Rendement</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{study.results.roi}</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="italic text-muted-foreground border-l-4 border-accent pl-4">
                    "{study.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à révolutionner votre <span className="text-accent">exploitation</span> ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nos experts analysent votre exploitation et vous proposent 
            la solution d'agriculture de précision adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Demander une étude personnalisée
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Voir une démonstration
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrecisionAgriculture;