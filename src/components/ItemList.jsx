import React from "react";
import Items from "./Items";
import "../assets/css/index.css";

const ItemList = ({ data }) => {
  return (
    <>
      <div className="card-container">
        {data.map((producto) => {
          return <Items producto={producto} key={producto.id} />;
        })}
      </div>
    </>
  );
};
export default ItemList;
