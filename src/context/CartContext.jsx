import React, { useEffect } from "react";
import { createContext, useState } from "react";

// create context
export const CartContext = createContext();
// create provider with function
const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // amount state
  const [itemAmount, setItemAmount] = useState(0);

  // update item in navbar
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // total price in cart page state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.discountedPrice * item.amount;
    }, 0);
    setTotal(total);
  }, [cart]);
  // local storage adding products to localstorge
  const getItemCart = () => {
    const cart = localStorage.getItem("cartItem");
    if (cart === []) {
      return [];
    } else {
      return JSON.parse(cart);
    }
  };
  console.log(cart);
  // seetitem cart
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify([cart]));
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    getItemCart();
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

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // setIncrease amount with id and amount
  const setIncrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  // setDecrease with id and ammount

  const setDecrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
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
