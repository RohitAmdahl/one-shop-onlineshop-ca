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
  });
  // local storage adding products to localstorge
  const getItemCart = () => {
    const newCartData = localStorage.getItem("cartItem");
    if (newCartData === []) {
      return [];
    } else {
      return JSON.parse(newCartData);
    }
  };
  // seetitem cart
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify([cart]));
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // checking item if its alredy in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        console.log(...cart);
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);

      console.log(getItemCart());
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
