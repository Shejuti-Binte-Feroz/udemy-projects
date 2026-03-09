import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";


// STEP 1
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const authReducer = (prevState, action) => {

}


export const AuthProvider = ({ children }) => {
  const initialCartState = (() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  })();

  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { product, quantity } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Calculate total quantity
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
