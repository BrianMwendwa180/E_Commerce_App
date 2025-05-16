import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <img src = "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=400" ></img>
      <img src = "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=400" ></img>
      <img src = "https://images.pexels.com/photos/4568373/pexels-photo-4568373.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">View More</h1>
        <p className="text-xl text-gray-600 mb-4">Continue to browser more Items</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
