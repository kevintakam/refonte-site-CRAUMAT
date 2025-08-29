import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { 
      label: "Produits", 
      href: "/produits",
      submenu: ["Tracteurs", "Moissonneuses", "Outils de travail du sol", "Pulvérisateurs"]
    },
    { 
      label: "Secteurs", 
      href: "/secteurs",
      submenu: ["Agriculture", "Construction", "Forestier", "Espaces verts"]
    },
    { label: "Pièces & Service", href: "/pieces-services" },
    { label: "Agriculture de précision", href: "/agriculture-precision" },
    { label: "Concessionnaires", href: "#concessionnaires" },
    { label: "À propos", href: "#apropos" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">CRAUMAT</div>
              <div className="text-xs text-muted-foreground font-medium">PRO</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                className="w-64 pl-10"
              />
            </div>
            <Button variant="accent" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                className="w-full pl-10"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="accent" className="w-full">
                  Demander un devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};