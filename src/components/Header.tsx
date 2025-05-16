
import { Link } from "react-router-dom";
import { ShoppingCart, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming this is a shadcn/ui button

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <Package2 className="h-6 w-6 text-primary" />
          <span>MyShop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link to="/shop" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Shop
          </Link>
          {/* Add more links as needed, e.g., About, Contact */}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          {/* Could add a mobile menu trigger here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
