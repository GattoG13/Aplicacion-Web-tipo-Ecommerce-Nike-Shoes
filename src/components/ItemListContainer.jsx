import React, { useContext } from "react";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import { contextoGeneral } from "../components/CartContext";

const ItemListContainer = () => {
  const { whiteMode } = useContext(contextoGeneral);

  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="ItemList-container"
    >
      <ItemList />
    </Box>
  );
};

export default ItemListContainer;
