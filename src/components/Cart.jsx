import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import "../assets/css/index.css";
import { contextoGeneral } from "../components/CartContext";
import ItemCart from "./ItemCart";

function Cart() {
  const { cart, clear, whiteMode } = useContext(contextoGeneral);
  if (cart.length === 0) {
    return (
      <Box>
        <Typography>No hay elementos en el carrito</Typography>
        <Link to="/">
          <Button
            sx={{
              backgroundColor: whiteMode ? "#f9f9f9" : "#000",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: whiteMode ? "#f9f9f9" : "#000",
                color: whiteMode ? "#000" : "#f9f9f9",
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
      <Box className="cart-content">
        <Box sx={{ backgroundColor: whiteMode ? "#000" : "#f9f9f9" }}>
          <Button
            sx={{
              backgroundColor: whiteMode ? "#f9f9f9" : "#000",
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
                color: whiteMode ? "#000" : "#f9f9f9",
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
}

export default Cart;
