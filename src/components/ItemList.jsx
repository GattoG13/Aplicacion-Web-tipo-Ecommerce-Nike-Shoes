import React from "react";
import Items from "./Items";

const ItemList = ({ data }) => {
  return (
    <>
      <div>
        {data.map((producto) => {
          return <Items producto={producto} key={producto.id} />;
        })}
      </div>
    </>
  );
};
export default ItemList;
