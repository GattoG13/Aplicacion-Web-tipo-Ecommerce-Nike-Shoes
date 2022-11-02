import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemCounter from "../src/components/ItemCounter";
import TestPokeApi from "./components/TestPokeApi";
import "./assets/css/App.css";

// Father - functions go in here
function App() {
  //* El nombre del componente y la funcion SIEMPRE igual
  const AddCart = (quantity) => {
    alert("Usted a agregado " + quantity + " items al carrito");
  };

  return (
    <>
      <Navbar />
      <TestPokeApi />
      <ItemCounter stock={10} initial={0} AddCart={AddCart} />
      <ItemListContainer greeting={"Bienvenido"} />
      <Footer />
    </>
  );
}

export default App;
