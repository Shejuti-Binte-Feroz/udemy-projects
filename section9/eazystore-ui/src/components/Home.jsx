import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

// Hook
export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Run once when the component mounts
  // Mounting is the process of creating and adding the component to the DOM
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('products');
      console.log("API response:", response.data); // ✅ log the actual data
      setProducts(response.data); // update state
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred while fetching products."
      );
    }
    finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <span className="text-xl font-semibold">Loading products...</span>
    </div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">
      <span className="text-xl font-semibold">Error: {error}</span>
    </div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}