import { ArrowRight, Heart } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";

interface ProductCardProps {
  title: string;
  image: string;
  category: string;
  power?: string;
  price?: string;
  isNew?: boolean;
  isFavorite?: boolean;
  description: string;
  features: string[];
}

export const ProductCard = ({
  title,
  image,
  category,
  power,
  price,
  isNew,
  isFavorite,
  description,
  features
}: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl shadow-md hover:shadow-brand transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              NOUVEAU
            </Badge>
          )}
          <Badge variant="secondary">{category}</Badge>
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 bg-white/90 hover:bg-white ${
            isFavorite ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>

        {/* Power Badge */}
        {power && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-semibold">
              {power}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          {price && (
            <div className="text-lg font-bold text-primary">
              {price}
            </div>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="group/btn ml-auto"
          >
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};