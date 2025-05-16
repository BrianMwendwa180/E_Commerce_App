
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-primary">Shopping Cart</h1>
      <p className="text-muted-foreground mb-8">Your cart is currently empty.</p>
      <Button asChild className="hover-scale">
        <Link to="/shop">Continue Shopping</Link>
      </Button>
    </div>
  );
};

export default CartPage;
