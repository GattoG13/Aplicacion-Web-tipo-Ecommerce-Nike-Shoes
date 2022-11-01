import React from "react";
import ItemList from "./ItemList";

// Son component
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemList-container">
      <p style={{ color: "red" }}>{greeting}</p>
      <ItemList />
    </div>
  );
}
