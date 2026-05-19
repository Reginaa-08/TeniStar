import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import ProductCard from "./ProductCard";
import type { Product } from "@/react-app/data/products";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  onAddToCart: (product: Product) => void;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  viewAllLink,
  onAddToCart,
}: ProductSectionProps) {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="flex items-center gap-1 text-primary font-medium hover:underline text-sm"
          >
            Ver todos
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
