import React, { useContext, useState } from "react";
import ItemListContainer from "./ItemList/Container";
import Box from "@mui/material/Box";
import { contextoGeneral } from "../components/CartContext";

const ItemList = () => {
  const { whiteMode } = useContext(contextoGeneral);
  const [data, setData] = useState([]);

  return data.map((item) => {
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="ItemList-container"
    >
      <ItemListContainer />
    </Box>;
  });
};
export default ItemList;
