import React from "react";
import "../css/Navbar.css";

// Son component
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemList-container">
      <p>{greeting} </p>
    </div>
  );
}
