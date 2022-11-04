import React from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  // const AddCart = (quantity) => {
  //   alert("Usted a agregado " + quantity + " items al carrito");
  // };
  return (
    <div className="ItemList-container">
      <ItemList />
    </div>
  );
}
