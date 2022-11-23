import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { contextoGeneral } from "../components/CartContext";
import "../assets/css/index.css";

const Checkout = () => {
  const { cart, pay, whiteMode } = useContext(contextoGeneral);
  const handleClickBuyButton = () => {
    alert("quiere comprar " + JSON.stringify(cart) + " total a pagar:" + pay);
  };
  return (
    <Box
      className="checkout-container"
      sx={{ backgroundColor: whiteMode ? "#000" : "#f9f9f9" }}
    >
      <Typography
        sx={{
          backgroundColor: whiteMode ? "#000" : "#f9f9f9",
          color: whiteMode ? "#f9f9f9" : "#000",
        }}
      >
        Cart
        {cart.map((item) => (
          <p>{item.title + " " + item.price + " " + item.quantity} </p>
        ))}
      </Typography>
      <Typography
        sx={{
          backgroundColor: whiteMode ? "#000" : "#f9f9f9",
          color: whiteMode ? "#f9f9f9" : "#000",
        }}
      >
        TOTAL AMOUNT: {pay}
      </Typography>
      <TextField
        sx={{ color: whiteMode ? "f9f9f9" : "#f9f9f9" }}
        placeholder="name"
      />
      <br />
      <TextField placeholder="phone" />
      <br />
      <TextField placeholder="email" />
      <br />
      <TextField placeholder="credit/debit card number" />
      <br />
      <br />

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
        onClick={handleClickBuyButton}
      >
        {" "}
        <Typography
          sx={{
            color: whiteMode ? "#000" : "#f9f9f9",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#inherit",
              color: "inherit",
            },
          }}
          variant="contained"
        >
          {" "}
          BUY
        </Typography>{" "}
      </Button>
    </Box>
  );
};

export default Checkout;
