import React, { useEffect } from "react";
import { createContext, useState } from "react";

const getItemCart = () => {
  const cart = localStorage.getItem("cartItem");
  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getItemCart());
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const saveCart = (cart) => {
    setCart(cart);
    localStorage.setItem("cartItem", JSON.stringify(cart));
  };

  useEffect(() => {
    if (cart.length > 0) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.discountedPrice * item.amount;
    }, 0);
    setTotal(total);
  }, [cart]);
  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // checking item if its already in cart
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
      saveCart(newCart);
    } else {
      saveCart([...cart, newItem]);
    }
  };

  // removing the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);

    // Update itemAmount here
    const amount = newCart.reduce((acc, currentItem) => {
      return acc + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  };

  // clear cart
  const clearCart = () => {
    saveCart([]);
    // Update itemAmount here
    setItemAmount(0);
  };
  // setIncrease amount with id and amount
  const setIncrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // setDecrease with id and amount
  const setDecrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem && cartItem.amount <= 1) {
      removeFromCart(id);
    } else if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      saveCart(newCart);

      // Update itemAmount
      const amount = newCart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        setIncrease,
        setDecrease,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
