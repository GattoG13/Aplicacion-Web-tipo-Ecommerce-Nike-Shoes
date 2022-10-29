import React from "react";
import "../css/Navbar.css";
import ItemList from "./ItemList";

// Son component
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemList-container">
      <ItemList />
    </div>
  );
}
