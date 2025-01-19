/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  function handleAddToCart(dessert) {
    console.log(cart.some((item) => item.name === dessert.name));
    if (cart.some((item) => item.name === dessert.name)) {
      const newCart = cart.map((item) => {
        if (item.name === dessert.name) {
          item.count += 1;
          item.totalPrice += dessert.price;
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, dessert]);
      console.log([...cart, dessert]);
    }
  }

  function handleDecrementQuantity(id) {
    const newCart = cart
      .map((item) => {
        if (item.id === id) {
          item.count -= 1;
          item.totalPrice -= item.price;
        }
        return item;
      })
      .filter((item) => item.count > 0); // Remove items with count 0

    setCart(newCart);
  }

  function handleIncrementQuantity(id) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.totalPrice += item.price;
      }
      return item;
    });
    setCart(newCart);
  }

  function handleDeleteFromTheCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function handleResetOrder() {
    setCart([]);
    setShowPopup(false);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleDeleteFromTheCart,
        handleDecrementQuantity,
        handleIncrementQuantity,
        showPopup,
        setShowPopup,
        handleResetOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
}

export { CartProvider, useCart };
