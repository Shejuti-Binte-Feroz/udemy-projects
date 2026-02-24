import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../store/cart-context.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="w-72 rounded-md mx-auto border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden flex flex-col bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-lighter transition">

      <Link to={`/products/${product.id}`} state={{ product }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow font-primary">

        <h2 className="text-xl font-semibold text-primary mb-2 dark:text-light">
          {product.name}
        </h2>

        <p className="text-base text-gray-600 dark:text-lighter mb-4">
          {product.description}
        </p>

        {/* Price + Button in Same Row */}
        <div className="flex items-center justify-between mt-auto">

          <div className="bg-lighter dark:bg-light text-primary font-medium text-sm py-2 px-3 rounded-md">
            <Price currency="$" price={product.price} />
          </div>

          <button
            className="bg-primary dark:bg-light text-white dark:text-primary text-sm py-2 px-4 rounded-md hover:opacity-90 transition"
            onClick={()=>addToCart(product, 1)}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}