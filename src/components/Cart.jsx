import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "../assets/css/index.css";
import { contextoGeneral } from "../components/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clear, darkMode } = useContext(contextoGeneral);
  if (cart.length === 0) {
    return (
      <Box>
        <Typography>No hay elementos en el carrito</Typography>
        <Link to="/">
          <Button
            sx={{
              backgroundColor: darkMode ? "#f9f9f9" : "#000",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: darkMode ? "#f9f9f9" : "#000",
                color: darkMode ? "#000" : "#f9f9f9",
              },
            }}
            variant="contained"
          >
            Return to buy
          </Button>
        </Link>
      </Box>
    );
  }
  return (
    <Box>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <br />
      <br />
      <Link
        to="/checkout"
        sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
      >
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
            Proceed to checkout
          </Typography>
        </Button>
      </Link>
      <br />
      <br />
      <Box className="cart-content">
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
              clear();
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
              Clear Cart
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
