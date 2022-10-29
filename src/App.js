import React from "react";
import Footer from "../src/assets/components/Footer";
import ItemListContainer from "../src/assets/components/ItemListContainer";
import Navbar from "../src/assets/components/Navbar";
import ItemCounter from "./assets/components/ItemCounter";
import "./assets/css/App.css";

// Father - functions go in here
function Pepe() {
  const AddCart = (quantity) => {
    alert("Usted a agregado " + quantity + " items al carrito");
  };
  return (
    <>
      <Navbar />
      <ItemCounter stock={10} initial={0} AddCart={AddCart} />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default Pepe;
