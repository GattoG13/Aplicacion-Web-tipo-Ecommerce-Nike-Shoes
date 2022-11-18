import React, { createContext, useState } from "react";
export const contextoGeneral = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const found = cart.findIndex((product) => product.id === id);
    return found;
  };
  const totalPrice = () => {
    cart.reduce((value, quantity) => value + quantity, 0);
  };
  const addItem = (item, cantidad) => {};
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
