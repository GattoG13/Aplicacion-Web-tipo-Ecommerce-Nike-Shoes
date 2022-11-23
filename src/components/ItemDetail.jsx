import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../components/CartContext";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({ productos }) => {
  const { whiteMode, addItem } = useContext(contextoGeneral);

  const onAddToCart = (quantity) => {
    addItem(productos, quantity);
  };

  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#000" : "#f9f9f9" }}
      className="itemdetail-container"
    >
      {productos.id ? (
        <Box
          sx={{ backgroundColor: whiteMode ? "#000" : "#f9f9f9" }}
          className="itemdetail2-container"
          key={productos.id}
        >
          <img className="images" src={productos.pictureURL} alt="product" />
          <Typography
            sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}
            variant="h5"
          >
            {productos.title}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}>
            Size: {productos.size}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}>
            Color: {productos.color}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}>
            Price: {productos.price}
          </Typography>
          <Box className="itembox1-details">
            <Box className="itemcount-details">
              <ItemCounter initial={0} stock={10} onAddToCart={onAddToCart} />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>"Loading..."</Box>
      )}
    </Box>
  );
};

export default ItemDetail;
