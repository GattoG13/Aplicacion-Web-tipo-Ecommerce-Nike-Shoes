import React, { useContext, useState } from "react";
import Items from "./Items";
import Box from "@mui/material/Box";
import { contextoGeneral } from "../components/CartContext";

const ItemList = ({ data }) => {
  const { whiteMode } = useContext(contextoGeneral);
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
