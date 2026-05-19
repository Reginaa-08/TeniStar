import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import {
  getProductsByCategory,
  getBestsellers,
  getSeasonalProducts,
  type Product,
} from "../data/products";

export default function HomePage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleLoginClick = () => {
    // TODO: Implement login modal
    console.log("Open login modal");
  };

  const handleCartClick = () => {
    // TODO: Implement cart drawer
    console.log("Open cart");
  };

  const bestsellers = getBestsellers();
  const seasonal = getSeasonalProducts();
  const basketballProducts = getProductsByCategory("basketball");
  const footballProducts = getProductsByCategory("football");
  const hikingProducts = getProductsByCategory("hiking");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        cartItemCount={cartItems.length}
        onLoginClick={handleLoginClick}
        onCartClick={handleCartClick}
      />

      <main className="flex-1">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Cards */}
          <CategoryCards />

          {/* Bestsellers Section */}
          <ProductSection
            title="Más Vendidos"
            subtitle="Los favoritos de nuestros clientes"
            products={bestsellers.slice(0, 4)}
            viewAllLink="/mas-vendidos"
            onAddToCart={handleAddToCart}
          />

          {/* Seasonal Section */}
          <ProductSection
            title="Colección de Temporada"
            subtitle="Lo más nuevo y trendy"
            products={seasonal.slice(0, 4)}
            viewAllLink="/temporada"
            onAddToCart={handleAddToCart}
          />

          {/* Basketball Section */}
          <ProductSection
            title="Básquet"
            subtitle="Domina la cancha con estos modelos"
            products={basketballProducts.slice(0, 4)}
            viewAllLink="/categoria/basketball"
            onAddToCart={handleAddToCart}
          />

          {/* Football Section */}
          <ProductSection
            title="Fútbol"
            subtitle="Precisión y velocidad en cada jugada"
            products={footballProducts.slice(0, 4)}
            viewAllLink="/categoria/football"
            onAddToCart={handleAddToCart}
          />

          {/* Hiking Section */}
          <ProductSection
            title="Senderismo"
            subtitle="Conquista cualquier terreno"
            products={hikingProducts.slice(0, 4)}
            viewAllLink="/categoria/hiking"
            onAddToCart={handleAddToCart}
          />
        </div>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Únete a la Familia TeniStar
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Suscríbete para recibir ofertas exclusivas, lanzamientos anticipados 
              y descuentos especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg">
                Suscribirse
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
