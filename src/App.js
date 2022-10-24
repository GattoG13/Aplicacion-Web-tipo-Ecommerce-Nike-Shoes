import React from "react";
import Body from "../src/assets/components/Body";
import Footer from "../src/assets/components/Footer";
import ItemListContainer from "../src/assets/components/ItemListContainer";
import Navbar from "../src/assets/components/Navbar";
import "./assets/css/App.css";

// Father - functions go in here
function Pepe() {
  return (
    <>
      <Navbar color={"#000000"} />
      <ItemListContainer greeting={true} />
      <Body />
      <Footer />
    </>
  );
}

export default Pepe;
