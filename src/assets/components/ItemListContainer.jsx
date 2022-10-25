import React from "react";
import ItemListContainer from "../src/assets/css/ItemListContainer.css";

// Son component
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemList-container">
      {greeting ? <p>Bienvenide</p> : <p>No sos bienvenide</p>}
    </div>
  );
}
