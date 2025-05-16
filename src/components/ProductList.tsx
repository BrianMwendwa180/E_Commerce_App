
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <section id="featured-products" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {title && <h2 className="mb-8 text-center text-3xl font-bold text-primary md:mb-12">{title}</h2>}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
