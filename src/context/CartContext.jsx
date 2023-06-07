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
    // getItemCart();
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

      // Update itemAmount here
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

// import React, { useEffect } from "react";
// import { createContext, useState } from "react";
// // local storage adding products to local storage but i have tried alot code works but some problm i face when header cart icon gives NAN , and clear cart does not remove the cart item in header cart icon, i need to rersh my page to see 0 item , code is under i comment it out, cart - v1
// const getItemCart = () => {
//   const cart = localStorage.getItem("cartItem");
//   if (cart === []) {
//     return [];
//   } else {
//     return JSON.parse(cart);
//   }
// };
// // create context
// export const CartContext = createContext();
// // create provider with function
// const CartProvider = ({ children }) => {
//   // cart state
//   const [cart, setCart] = useState([]);
//   // amount state
//   const [itemAmount, setItemAmount] = useState(0);
//   // total price in cart page state
//   const [total, setTotal] = useState(0);

//   // update item in navbar
//   useEffect(() => {
//     if (cart) {
//       const amount = cart.reduce((acc, currentItem) => {
//         return acc + currentItem.amount;
//       }, 0);
//       setItemAmount(amount);
//     }
//   }, [cart]);

//   useEffect(() => {
//     const total = cart.reduce((acc, item) => {
//       return acc + item.discountedPrice * item.amount;
//     }, 0);
//     setTotal(total);
//   }, [cart]);

//   console.log(cart);
//   // set item cart
//   useEffect(() => {
//     localStorage.setItem("cartItem", JSON.stringify([cart]));
//   }, [cart]);

//   // add to cart
//   const addToCart = (product, id) => {
//     getItemCart();
//     const newItem = { ...product, amount: 1 };
//     // checking item if its alredy in cart
//     const cartItem = cart.find((item) => {
//       return item.id === id;
//     });
//     if (cartItem) {
//       const newCart = [...cart].map((item) => {
//         if (item.id === id) {
//           return { ...item, amount: cartItem.amount + 1 };
//         } else {
//           return item;
//         }
//       });
//       setCart(newCart);
//     } else {
//       setCart([...cart, newItem]);
//     }
//   };

//   // removing the cart
//   const removeFromCart = (id, discountedPrice) => {
//     const newCart = cart.filter((item) => {
//       return item.id !== id;
//     });
//     setCart(newCart);
//   };

//   // clear cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   // setIncrease amount with id and amount
//   const setIncrease = (id) => {
//     const cartItem = cart.find((item) => item.id === id);
//     addToCart(cartItem, id);
//   };
//   // setDecrease with id and amount

//   const setDecrease = (id) => {
//     const cartItem = cart.find((item) => item.id === id);
//     addToCart(cartItem, id);
//     if (cartItem) {
//       const newCart = cart.map((item) => {
//         if (item.id === id) {
//           return { ...item, amount: cartItem.amount - 1 };
//         } else {
//           return item;
//         }
//       });
//       setCart(newCart);
//     }
//     if (cartItem.amount < 2) {
//       removeFromCart(id);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         setIncrease,
//         setDecrease,
//         itemAmount,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
// export default CartProvider;

// cart - v1 ; code with local storage
