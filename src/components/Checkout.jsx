import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import "../assets/css/index.css";
import { contextoGeneral } from "../components/CartContext";
import { db } from "../index";

const Checkout = () => {
  const { cart, pay, whiteMode } = useContext(contextoGeneral);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [credit, setCredit] = useState("");

  const handleClickBuyButton = () => {
    alert(
      name +
        " quiere comprar " +
        JSON.stringify(cart) +
        " con un total a pagar de:" +
        pay
    );
    const order = {
      buyer: { name, phone, email, credit },
      item: cart,
      payment: pay,
    };
    const orders = collection(db, "orders");
    addDoc(orders, order).then((finishOrder) => {
      console.log(finishOrder.id);
    });
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
        variant="h5"
      >
        Cart
        {cart.map((item) => (
          <p>{item.title + " " + item.price + "$ Amount:" + item.quantity} </p>
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <TextField
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <TextField
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        placeholder="credit/debit card number"
        value={credit}
        onChange={(e) => setCredit(e.target.value)}
      />
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
