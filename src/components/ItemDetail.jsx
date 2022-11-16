import { Box, Button, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import ItemCounter from "./ItemCounter";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../components/CartContext";

const ItemDetail = ({ productos }) => {
  const { whiteMode, addItem, onAdd } = useContext(contextoGeneral);

  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="itemdetail-container"
    >
      {productos.id ? (
        <Box
          sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
          className="itemdetail2-container"
          key={productos.id}
        >
          <img className="images" src={productos.pictureURL} alt="product" />
          <Typography
            sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}
            variant="h5"
          >
            {productos.title}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
            Size: {productos.size}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
            Color: {productos.color}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
            Price: {productos.price}
          </Typography>
          <Box className="itembox1-details">
            <Box className="itemcount-details">
              <ItemCounter initial={0} stock={10} />
            </Box>
            <Link sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
              <Button
                sx={{
                  backgroundColor: whiteMode ? "#000" : "#f9f9f9",
                  borderRadius: 2,
                  color: whiteMode ? "#f9f9f9" : "#000",
                  "&:hover": {
                    backgroundColor: "inherit",
                    color: "inherit",
                  },
                }}
                variant="contained"
                onClick={() => {
                  onAdd();
                }}
              >
                Add to Cart
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box>"Loading..."</Box>
      )}
    </Box>
  );
};

export default ItemDetail;
