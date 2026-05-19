export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'basketball' | 'football' | 'hiking' | 'casual';
  isBestseller?: boolean;
  isSeasonal?: boolean;
  description: string;
  sizes: number[];
  colors: string[];
}

export const products: Product[] = [
  // Basketball
  {
    id: 1,
    name: "Air Max Pro Court",
    brand: "Nike",
    price: 189.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "basketball",
    isBestseller: true,
    description: "Máximo rendimiento en la cancha con amortiguación Air Max.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["Rojo", "Negro", "Blanco"]
  },
  {
    id: 2,
    name: "Curry Flow 10",
    brand: "Under Armour",
    price: 175.00,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    category: "basketball",
    description: "Diseñados para movimientos rápidos y precisos.",
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Azul", "Negro"]
  },
  {
    id: 3,
    name: "LeBron XXI",
    brand: "Nike",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    category: "basketball",
    isSeasonal: true,
    description: "Potencia y estilo inspirados en el rey de la cancha.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["Negro", "Dorado"]
  },
  {
    id: 4,
    name: "Harden Vol. 8",
    brand: "Adidas",
    price: 165.00,
    originalPrice: 190.00,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&h=500&fit=crop",
    category: "basketball",
    isBestseller: true,
    description: "Tracción superior para cambios de dirección explosivos.",
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Blanco", "Rojo"]
  },

  // Football
  {
    id: 5,
    name: "Mercurial Vapor XV",
    brand: "Nike",
    price: 275.00,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&h=500&fit=crop",
    category: "football",
    isBestseller: true,
    isSeasonal: true,
    description: "Velocidad pura en el campo con diseño aerodinámico.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["Verde Neón", "Negro"]
  },
  {
    id: 6,
    name: "Predator Elite",
    brand: "Adidas",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    category: "football",
    description: "Control absoluto del balón con tecnología de agarre.",
    sizes: [39, 40, 41, 42, 43],
    colors: ["Rojo", "Negro"]
  },
  {
    id: 7,
    name: "Copa Mundial",
    brand: "Adidas",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
    category: "football",
    isBestseller: true,
    description: "El clásico atemporal del fútbol profesional.",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["Negro", "Blanco"]
  },
  {
    id: 8,
    name: "Phantom GX Elite",
    brand: "Nike",
    price: 265.00,
    originalPrice: 295.00,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&h=500&fit=crop",
    category: "football",
    isSeasonal: true,
    description: "Precisión en cada toque con ajuste anatómico.",
    sizes: [40, 41, 42, 43, 44],
    colors: ["Blanco", "Azul"]
  },

  // Hiking
  {
    id: 9,
    name: "Terrex Free Hiker 2",
    brand: "Adidas",
    price: 230.00,
    image: "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=500&h=500&fit=crop",
    category: "hiking",
    isBestseller: true,
    description: "Comodidad extrema para largas caminatas en montaña.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["Verde", "Marrón"]
  },
  {
    id: 10,
    name: "Speedcross 6",
    brand: "Salomon",
    price: 165.00,
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=500&h=500&fit=crop",
    category: "hiking",
    isSeasonal: true,
    description: "Agarre agresivo para terrenos técnicos.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["Negro", "Naranja"]
  },
  {
    id: 11,
    name: "Moab 3 GTX",
    brand: "Merrell",
    price: 145.00,
    originalPrice: 175.00,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=500&fit=crop",
    category: "hiking",
    isBestseller: true,
    description: "Impermeables y transpirables para cualquier clima.",
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["Gris", "Verde"]
  },
  {
    id: 12,
    name: "Ultra Raptor II",
    brand: "La Sportiva",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    category: "hiking",
    description: "Estabilidad y protección en terreno rocoso.",
    sizes: [40, 41, 42, 43, 44],
    colors: ["Azul", "Negro"]
  },

  // Casual / More bestsellers and seasonal
  {
    id: 13,
    name: "Stan Smith",
    brand: "Adidas",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    category: "casual",
    isBestseller: true,
    isSeasonal: true,
    description: "El ícono del estilo casual urbano.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["Blanco", "Verde"]
  },
  {
    id: 14,
    name: "Air Force 1",
    brand: "Nike",
    price: 115.00,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    category: "casual",
    isBestseller: true,
    description: "Un clásico que nunca pasa de moda.",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    colors: ["Blanco", "Negro"]
  },
  {
    id: 15,
    name: "New Balance 550",
    brand: "New Balance",
    price: 130.00,
    originalPrice: 150.00,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500&h=500&fit=crop",
    category: "casual",
    isSeasonal: true,
    description: "Retro basketball style para el día a día.",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["Blanco", "Azul Marino"]
  },
  {
    id: 16,
    name: "Gel-1130",
    brand: "Asics",
    price: 140.00,
    image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=500&h=500&fit=crop",
    category: "casual",
    isSeasonal: true,
    description: "Tecnología GEL para máximo confort urbano.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["Plateado", "Blanco"]
  }
];

export const getProductsByCategory = (category: Product['category']) => 
  products.filter(p => p.category === category);

export const getBestsellers = () => 
  products.filter(p => p.isBestseller);

export const getSeasonalProducts = () => 
  products.filter(p => p.isSeasonal);

export const getProductById = (id: number) => 
  products.find(p => p.id === id);
