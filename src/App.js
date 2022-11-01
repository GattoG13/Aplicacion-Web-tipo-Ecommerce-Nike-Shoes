import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemCounter from "../src/components/ItemCounter";
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
      <ItemListContainer greeting={"Bienvenido"} />
      <Footer />
    </>
  );
}

export default Pepe;
