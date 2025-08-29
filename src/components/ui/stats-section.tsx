import { TrendingUp, Users, Award, Wrench } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+25%",
      label: "Productivité moyenne",
      description: "Amélioration constatée chez nos clients"
    },
    {
      icon: Users,
      value: "50 000+",
      label: "Clients satisfaits",
      description: "Dans plus de 100 pays"
    },
    {
      icon: Award,
      value: "180+",
      label: "Années d'expertise",
      description: "Leader mondial en innovation agricole"
    },
    {
      icon: Wrench,
      value: "98%",
      label: "Disponibilité",
      description: "Taux de disponibilité de nos équipements"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des résultats qui <span className="text-accent">parlent</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Notre engagement pour l'excellence se traduit par des performances mesurables 
            et une satisfaction client exceptionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-primary-foreground/80 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>
      </div>
    </section>
  );
};