import { Link } from "react-router";
import { Dribbble, Footprints, Mountain } from "lucide-react";

const categories = [
  {
    name: "Básquet",
    slug: "basketball",
    icon: Dribbble,
    description: "Domina la cancha con estilo",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Fútbol",
    slug: "football",
    icon: Footprints,
    description: "Velocidad y precisión en cada jugada",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Senderismo",
    slug: "hiking",
    icon: Mountain,
    description: "Conquista cualquier terreno",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function CategoryCards() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Explora por Deporte
        </h2>
        <p className="text-muted-foreground mt-2">
          Encuentra el calzado perfecto para tu disciplina
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.slug}
              to={`/categoria/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.description}</p>
                
                <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>Ver colección</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
