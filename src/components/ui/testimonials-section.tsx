import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Pierre Dubois",
      role: "Agriculteur - Exploitation céréalière 450ha",
      location: "Beauce, France",
      content: "Depuis que j'utilise les équipements CRAUMAT, ma productivité a augmenté de 30%. Le service après-vente est exceptionnel et la fiabilité des machines remarquable.",
      rating: 5,
      avatar: "/placeholder-avatar-1.jpg"
    },
    {
      name: "Marie-Claire Lefebvre",
      role: "Directrice d'exploitation",
      location: "Champagne, France",
      content: "L'agriculture de précision a révolutionné notre façon de travailler. Les économies d'intrants et l'optimisation des rendements sont impressionnantes.",
      rating: 5,
      avatar: "/placeholder-avatar-2.jpg"
    },
    {
      name: "Jean-Michel Rousseau",
      role: "CUMA Les Terres Fertiles",
      location: "Normandie, France",
      content: "Matériel robuste, formation complète et suivi personnalisé. CRAUMAT nous accompagne vraiment dans notre développement.",
      rating: 5,
      avatar: "/placeholder-avatar-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ce que disent nos <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages d'agriculteurs qui ont fait confiance à nos solutions 
            pour transformer leur exploitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="text-accent mb-6">
                <Quote className="w-10 h-10" />
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-accent font-medium">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};