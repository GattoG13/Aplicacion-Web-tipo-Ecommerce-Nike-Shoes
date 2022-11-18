import { Box, Typography, Link, Button } from "@mui/material";
import ItemCounter from "./ItemCounter";
import React, { useContext } from "react";
import { contextoGeneral } from "../components/CartContext";

function ItemCart({ product }) {
  const { whiteMode, removeItem, clear } = useContext(contextoGeneral);

  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="itemdetail-container"
    >
      {product.id ? (
        <Box
          sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
          className="itemdetail2-container"
          key={product.id}
        >
          <img className="images" src={product.pictureURL} alt="product" />
          <Typography
            sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}
            variant="h5"
          >
            {product.title}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
            Size: {product.size}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
            Color: {product.color}
          </Typography>
          <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
            Price: {product.price}
          </Typography>
          <Box className="cart-content">
            <Box sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}>
              <Button
                sx={{
                  backgroundColor: whiteMode ? "#000" : "#f9f9f9",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#inherit",
                    color: "inherit",
                  },
                }}
                variant="contained"
                onClick={() => {
                  removeItem();
                }}
              >
                <Typography
                  sx={{
                    color: whiteMode ? "#f9f9f9" : "#000",
                    "&:hover": {
                      backgroundColor: "#inherit",
                      color: "inherit",
                    },
                  }}
                >
                  Remove Item
                </Typography>
              </Button>
            </Box>
            <Box sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}>
              <Button
                sx={{
                  backgroundColor: whiteMode ? "#000" : "#f9f9f9",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#inherit",
                    color: "inherit",
                  },
                }}
                variant="contained"
                onClick={() => {
                  clear();
                }}
              >
                <Typography
                  sx={{
                    color: whiteMode ? "#f9f9f9" : "#000",
                    "&:hover": {
                      backgroundColor: "#inherit",
                      color: "inherit",
                    },
                  }}
                >
                  Clear Cart
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>"Loading..."</Box>
      )}
    </Box>
  );
}

export default ItemCart;
