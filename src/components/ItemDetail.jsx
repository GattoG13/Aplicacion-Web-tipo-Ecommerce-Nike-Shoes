import React from "react";

function ItemDetail({ productos }) {
  return (
    <div>
      {!productos && "Loading..."}
      {productos.imagen}
      {productos.title}
      {productos.size}
      {productos.price}
    </div>
  );
}

export default ItemDetail;
