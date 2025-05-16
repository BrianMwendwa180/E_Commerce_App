
import ProductList from "@/components/ProductList";
import { mockProducts } from "@/data/products";

const ShopPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Our Products</h1>
      <ProductList products={mockProducts} />
    </div>
  );
};

export default ShopPage;
