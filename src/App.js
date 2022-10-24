import React from "react";
import Body from "./assets/components/Body";
import CartWidget from "./assets/components/CartWidget";
import Footer from "./assets/components/Footer";
import ItemListContainer from "./assets/components/ItemListContainer";
import Navbar from "./assets/components/Navbar";
import "./assets/css/App.css";

// Father - functions go in here
export default function Pepe() {
  return (
    <>
      <div className="Navbar">
        <Navbar color={"#000000"} />
        <CartWidget />
      </div>
      <div className="ItemList">
        <ItemListContainer greeting={true} />
      </div>
      <div className="Body">
        <Body />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
