import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/Footer";
import ItemListContainer from "../src/components/ItemListContainer";
import Navbars from "../src/components/Navbars";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";

const Pepe = () => {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <Navbars />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/category/:idcategory"
              element={<ItemListContainer />}
            />
            <Route path="/item/:iditem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}>
              {" "}
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </>
  );
};

export default Pepe;
