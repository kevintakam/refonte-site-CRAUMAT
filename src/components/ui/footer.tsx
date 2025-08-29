import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export const Footer = () => {
  const footerSections = [
    {
      title: "Produits",
      links: [
        { label: "Tracteurs", href: "#tracteurs" },
        { label: "Moissonneuses", href: "#moissonneuses" },
        { label: "Outils de travail du sol", href: "#outils" },
        { label: "Pulvérisateurs", href: "#pulverisateurs" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Pièces détachées", href: "#pieces" },
        { label: "Service après-vente", href: "#sav" },
        { label: "Formation", href: "#formation" },
        { label: "Financement", href: "#financement" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Agriculture de précision", href: "#precision" },
        { label: "Agriculture connectée", href: "#connectee" },
        { label: "Gestion de flotte", href: "#flotte" },
        { label: "Télématique", href: "#telematique" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#apropos" },
        { label: "Actualités", href: "#actualites" },
        { label: "Carrières", href: "#carrieres" },
        { label: "Développement durable", href: "#durable" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Youtube, href: "#youtube", label: "YouTube" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Restez informé des dernières innovations
            </h3>
            <p className="text-background/80 mb-8 text-lg">
              Recevez nos actualités, conseils techniques et offres exclusives directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                placeholder="Votre adresse email"
                className="flex-1 bg-background text-foreground border-background/20"
              />
              <Button variant="accent" size="lg">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-2xl">A</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">CRAUMAT</div>
                <div className="text-sm text-background/80 font-medium">PRO</div>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Leader mondial en équipements agricoles depuis plus de 180 ans. 
              Nous accompagnons les agriculteurs avec des solutions innovantes 
              pour une agriculture durable et productive.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>contact@CRAUMAT-pro.fr</span>
              </div>
              <div className="flex items-start text-background/80">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                <span>123 Avenue de l'Agriculture<br />75001 Paris, France</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-accent font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2025 CRAUMAT. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-background/80 group-hover:text-accent-foreground" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#mentions" className="text-background/60 hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#confidentialite" className="text-background/60 hover:text-accent transition-colors">
                Confidentialité
              </a>
              <a href="#cookies" className="text-background/60 hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};