import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { contextoGeneral } from "../components/CartContext";

const ItemCart = ({ product }) => {
  const { darkMode, removeItem } = useContext(contextoGeneral);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  return (
    <Box
      sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
      className="itemcart-container"
    >
      {product.id ? (
        <Box
          sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
          className="itemcart2-container"
          key={product.id}
        >
          <img className="images" src={product.pictureURL} alt="product" />
          <Typography
            sx={{ color: darkMode ? "#f9f9f9" : "#000" }}
            variant="h5"
          >
            {product.title}
          </Typography>
          <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
            Sizes: {JSON.stringify(product.size)}
          </Typography>
          <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
            Color: {product.color}
          </Typography>
          <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
            Price: {product.price}
          </Typography>
          <br />
          <Box sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}>
            <Button
              sx={{
                backgroundColor: darkMode ? "#f9f9f9" : "#000",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#inherit",
                  color: "inherit",
                },
              }}
              variant="contained"
              onClick={() => {
                handleRemoveItem(product.id);
              }}
            >
              <Typography
                sx={{
                  color: darkMode ? "#000" : "#f9f9f9",
                  "&:hover": {
                    backgroundColor: "#inherit",
                    color: "inherit",
                  },
                }}
              >
                Remove from Cart
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>"Loading..."</Box>
      )}
    </Box>
  );
};

export default ItemCart;
