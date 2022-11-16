import React, { createContext, useState } from "react";
export const contextoGeneral = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const found = cart.find((product) => product.id === id);
    return cart.includes(found);
  };
  const totalPrice = () => {
    cart.reduce((value, quantity) => value + quantity, 0);
  };
  const addItem = (item, cantidad) => {
    isInCart() ? console.log("item found") : (item.quantity = cantidad);
    setCart([...cart, item]);
  };
  const onAdd = (quantity) => {
    alert("se agregaron " + quantity + " al carrito");
  };

  const clear = () => setCart([]);

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const [whiteMode, setWhiteMode] = useState(false);
  return (
    <contextoGeneral.Provider
      value={{
        whiteMode,
        setWhiteMode,
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
        isInCart,
        onAdd,
      }}
    >
      {children}
    </contextoGeneral.Provider>
  );
};

export default CartContext;
