import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";

// Son component
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemList-container">
      <p style={{ color: "red" }}>{greeting}</p>
      <ItemDetailContainer />
    </div>
  );
}
