import React from "react";
import { createContext, useState } from "react";
// create context
export const CartContext = createContext();

// create provider with function
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // checking item if its alredy in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // removing the cart
  const removeFromCart = (id, discountedPrice) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  const TotalAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
    console.log(`item${id} amount `);
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, TotalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
