import React, { createContext, useState } from "react";
export const contextoGeneral = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const pos = cart.findIndex((product) => product.id === id);
    return pos;
  };

  const addItem = (item, quantity) => {
    const pos = isInCart(item.id);
    if (pos === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const cartAux = [...cart];
      cartAux[pos] = {
        ...cartAux[pos],
        quantity: cartAux[pos].quantity + quantity,
      };
      setCart(cartAux);
    }
  };

  const totalPrice = () => {
    cart.reduce((value, quantity) => value + quantity, 0);
  };
  const clear = () => setCart([]);

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const [whiteMode, setWhiteMode] = useState(false);
  return (
    <contextoGeneral.Provider
      value={{
        whiteMode,
        cart,
        setWhiteMode,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </contextoGeneral.Provider>
  );
};

export default CartContext;
