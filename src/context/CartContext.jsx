import React from "react";
import { createContext, useEffect, useState } from "react";
// create context
export const CartContext = createContext();

// create provider with function
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = () => {
    console.log("addtoCart");
  };
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
