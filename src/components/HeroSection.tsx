
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl animate-fade-in">
          Discover Your Next Favorite Thing
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Explore our curated collection of high-quality products designed to enhance your lifestyle.
        </p>
        <div className="mt-10 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" asChild className="transition-transform hover:scale-105">
            <Link to="/shop">Shop Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
            <Link to="/#featured-products">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
