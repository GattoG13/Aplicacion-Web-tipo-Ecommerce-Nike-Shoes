import React from "react";
import Footer from "../src/assets/components/Footer";
import ItemListContainer from "../src/assets/components/ItemListContainer";
import Navbar from "../src/assets/components/Navbar";
import ItemCounter from "./assets/components/ItemCounter";
import "./assets/css/App.css";

// Father - functions go in here
function Pepe() {
  // function sumar() {}
  // function restar() {}
  return (
    <>
      <Navbar />
      <ItemCounter stock={10} initial={0} />
      <ItemListContainer greeting={"Bienvenido"} />
      <Footer />
    </>
  );
}

export default Pepe;
