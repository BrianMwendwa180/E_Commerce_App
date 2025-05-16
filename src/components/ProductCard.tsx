
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md animate-scale-in">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-60 w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-foreground">${product.price.toFixed(2)}</p>
          <Button size="sm" variant="outline" className="transition-transform hover:scale-105">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
