import React from "react";

// Son component
export default function ItemListContainer({ greeting }) {
  return <div>{greeting ? <p>Bienvenide</p> : <p>No sos bienvenide</p>}</div>;
}
