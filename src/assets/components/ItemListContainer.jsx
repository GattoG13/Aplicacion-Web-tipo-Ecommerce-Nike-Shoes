import React from "react";
import "../css/Navbar.css";

// Son component
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemList-container">
      <p style={{ color: "#f00" }}>{greeting} </p>
    </div>
  );
}
