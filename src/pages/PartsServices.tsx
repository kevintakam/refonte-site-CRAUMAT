import { useState } from "react";
import { Search, Wrench, Clock, Shield, Download, Phone, MapPin, Calendar } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import partsImage from "@/assets/parts-service.jpg";
import precisionImage from "@/assets/precision-agriculture.jpg";
import combineImage from "@/assets/combine-harvester.jpg";

const PartsServices = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      title: "Pièces détachées d'origine",
      description: "Plus de 500 000 références en stock pour tous vos équipements",
      icon: Wrench,
      features: [
        "Pièces d'origine garanties",
        "Livraison 24-48h",
        "Stock permanent",
        "Prix compétitifs"
      ],
      image: partsImage
    },
    {
      title: "Service après-vente",
      description: "Maintenance préventive et réparations par nos techniciens certifiés",
      icon: Clock,
      features: [
        "Techniciens certifiés",
        "Intervention rapide",
        "Diagnostic complet",
        "Garantie des réparations"
      ],
      image: precisionImage
    },
    {
      title: "Garantie étendue",
      description: "Protégez votre investissement avec nos contrats de garantie",
      icon: Shield,
      features: [
        "Couverture complète",
        "Pièces et main d'œuvre",
        "Assistance 24/7",
        "Véhicule de remplacement"
      ],
      image: combineImage
    }
  ];

  const popularParts = [
    {
      name: "Filtre à huile moteur",
      reference: "RE504836",
      price: "24,90€",
      stock: "En stock",
      compatibility: "Série 6M, 7R, 8R"
    },
    {
      name: "Courroie d'alternateur",
      reference: "H154482",
      price: "45,50€",
      stock: "En stock",
      compatibility: "Série 5E, 6M"
    },
    {
      name: "Filtre à air cabine",
      reference: "AH169875",
      price: "32,80€",
      stock: "En stock",
      compatibility: "Toutes séries"
    },
    {
      name: "Plaquette de frein",
      reference: "VPG1455",
      price: "89,90€",
      stock: "Sur commande",
      compatibility: "Série 7R, 8R"
    }
  ];

  const maintenancePackages = [
    {
      title: "Pack Essentiel",
      price: "À partir de 199€",
      duration: "Jusqu'à 50h",
      includes: [
        "Vidange moteur",
        "Filtre à huile",
        "Filtre à air",
        "Contrôle général"
      ]
    },
    {
      title: "Pack Complet",
      price: "À partir de 399€",
      duration: "Jusqu'à 100h",
      includes: [
        "Tout du Pack Essentiel",
        "Filtre hydraulique",
        "Filtre à carburant",
        "Graissage complet",
        "Diagnostic électronique"
      ]
    },
    {
      title: "Pack Premium",
      price: "À partir de 699€",
      duration: "Jusqu'à 250h",
      includes: [
        "Tout du Pack Complet",
        "Révision transmission",
        "Contrôle climatisation",
        "Mise à jour logiciels",
        "Rapport détaillé"
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
              Pièces & <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Maintenez vos équipements en parfait état avec nos pièces d'origine 
              et notre service après-vente d'excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                500 000+ références
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Livraison 24-48h
              </Badge>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                Service 24/7
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-brand transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parts & Services Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="parts" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="parts">Pièces détachées</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="support">Support technique</TabsTrigger>
            </TabsList>

            <TabsContent value="parts" className="space-y-8">
              {/* Parts Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher par référence, modèle ou description..."
                    className="pl-12 h-14 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <Button variant="outline" size="sm">Filtres moteur</Button>
                  <Button variant="outline" size="sm">Transmission</Button>
                  <Button variant="outline" size="sm">Hydraulique</Button>
                  <Button variant="outline" size="sm">Électronique</Button>
                </div>
              </div>

              {/* Popular Parts */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Pièces les plus demandées</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {popularParts.map((part) => (
                    <Card key={part.reference} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{part.name}</CardTitle>
                        <CardDescription>Réf: {part.reference}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-primary">{part.price}</span>
                            <Badge variant={part.stock === "En stock" ? "default" : "secondary"}>
                              {part.stock}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{part.compatibility}</p>
                          <Button className="w-full" size="sm">
                            Ajouter au panier
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Packages de maintenance</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choisissez le package qui correspond à vos besoins et à l'utilisation de vos équipements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {maintenancePackages.map((pack, index) => (
                  <Card key={pack.title} className={`${index === 1 ? 'border-primary shadow-brand' : ''} hover:shadow-lg transition-shadow`}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{pack.title}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{pack.price}</div>
                      <CardDescription>{pack.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pack.includes.map((item) => (
                          <li key={item} className="flex items-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                        Choisir ce pack
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Service Centers */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Nos centres de service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        Service après-vente mobile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Nos techniciens se déplacent directement sur votre exploitation 
                        pour les interventions de maintenance et réparations.
                      </p>
                      <Button variant="outline">
                        <Phone className="w-4 h-4 mr-2" />
                        Demander une intervention
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-primary" />
                        Planification intelligente
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Planifiez vos maintenances en fonction de vos saisons 
                        et de l'utilisation de vos équipements.
                      </p>
                      <Button variant="outline">
                        Planifier ma maintenance
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Support technique 24/7</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Notre équipe d'experts est à votre disposition pour vous accompagner 
                  dans l'utilisation et la maintenance de vos équipements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      Hotline technique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Assistance téléphonique 24h/24, 7j/7 pour tous vos besoins techniques.
                    </p>
                    <div className="text-2xl font-bold text-primary mb-2">
                      0 800 123 456
                    </div>
                    <p className="text-sm text-muted-foreground">Appel gratuit</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="w-5 h-5 mr-2 text-primary" />
                      Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Manuels d'utilisation, guides de maintenance et vidéos tutoriels.
                    </p>
                    <Button variant="outline" className="w-full">
                      Accéder aux ressources
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="w-5 h-5 mr-2 text-primary" />
                      Formation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Sessions de formation pour optimiser l'utilisation de vos équipements.
                    </p>
                    <Button variant="outline" className="w-full">
                      S'inscrire à une formation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Assistance d'urgence</h2>
          <p className="text-xl mb-8 opacity-90">
            Panne en pleine saison ? Notre service d'urgence est disponible 24h/24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Appel d'urgence : 0 800 URGENCE
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-destructive">
              Localiser le technicien le plus proche
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartsServices;