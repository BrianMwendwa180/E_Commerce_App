
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";
import { mockProducts } from "@/data/products";

const Index = () => {
  // Show a limited number of products on the homepage
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div>
      <HeroSection />
      <ProductList products={featuredProducts} title="Featured Products" />
      {/* You can add more sections here, like categories, promotions, etc. */}
    </div>
  );
};

export default Index;
