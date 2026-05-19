import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-secondary to-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestseller && (
            <Badge className="bg-primary text-white border-0 shadow-lg">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Top Venta
            </Badge>
          )}
          {product.isSeasonal && (
            <Badge className="bg-accent text-accent-foreground border-0 shadow-lg">
              Temporada
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="shadow-lg">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90 shadow-lg h-10 w-10"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-semibold text-foreground line-clamp-1 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Sizes Preview */}
        <div className="mt-3 flex items-center gap-1">
          <span className="text-xs text-muted-foreground">Tallas:</span>
          <div className="flex gap-1 overflow-hidden">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-xs bg-secondary px-1.5 py-0.5 rounded"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
