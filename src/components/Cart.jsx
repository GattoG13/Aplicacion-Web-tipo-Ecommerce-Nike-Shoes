import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import "../assets/css/index.css";
import { contextoGeneral } from "../components/CartContext";
import ItemCart from "./ItemCart";

function Cart() {
  const { cart, removeItem, clear, whiteMode } = useContext(contextoGeneral);
  if (cart.length === 0) {
    return (
      <Box>
        <Typography>No hay elementos en el carrito</Typography>
        <Link to="/">
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
          >
            Return to buy
          </Button>
        </Link>
      </Box>
    );
  }
  return (
    <Grid>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
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
    </Grid>
  );
}

export default Cart;
