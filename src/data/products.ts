
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Modern Wireless Headphones",
    price: 79.99,
    imageUrl: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description: "Experience immersive sound with these sleek wireless headphones. Long battery life and comfortable design.",
  },
  {
    id: "2",
    name: "Classic Leather Wallet",
    price: 49.50,
    imageUrl: "https://images.pexels.com/photos/27467423/pexels-photo-27467423/free-photo-of-choice-of-leather-wallets.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Accessories",
    description: "A timeless leather wallet with multiple compartments for cards and cash. Durable and stylish.",
  },
  {
    id: "3",
    name: "Minimalist Desk Lamp",
    price: 35.00,
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Home Goods",
    description: "Brighten up your workspace with this elegant minimalist desk lamp. Adjustable and energy-efficient.",
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    price: 25.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Apparel",
    description: "Soft and comfortable t-shirt made from 100% organic cotton. Available in various colors.",
  },
];
