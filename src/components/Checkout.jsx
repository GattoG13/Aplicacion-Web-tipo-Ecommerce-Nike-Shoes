import { Button, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { Box } from "@mui/system";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import "../assets/css/index.css";
import { contextoGeneral } from "../components/CartContext";
import { db } from "../index";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, pay, darkMode, validateEmail, clear } =
    useContext(contextoGeneral);
  // FORMULARIO!!
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [credit, setCredit] = useState("");
  const [order, setOrder] = useState("");

  const handleClickBuyButton = () => {
    const order = {
      buyer: { name, phone, email, credit },
      item: cart,
      payment: pay,
    };

    if (name === "" || phone === "" || email === "" || credit === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Data!",
        text: "Please verify the data before proceeding",
      });
      return;
    }
    if (cart === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Cart is empty!",
        text: "Please add items to the cart to proceed",
      });
    }
    if (validateEmail(email) === false) {
      return;
    }
    const orders = collection(db, "orders");
    addDoc(orders, order).then((finishOrder) => {
      setOrder(finishOrder.id);
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "Thank you " + name + " your purchase has been processed correctly",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      clear();
    }, "1500");
  };
  return (
    <>
      {order === "" ? (
        <Box
          className="checkout-container"
          sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
        >
          <Typography
            sx={{
              backgroundColor: darkMode ? "#000" : "#f9f9f9",
              color: darkMode ? "#f9f9f9" : "#000",
            }}
            variant="h5"
          >
            Cart
            {cart.map((item) => (
              <p>
                {item.title + " " + item.price + "$ Amount:" + item.quantity}{" "}
              </p>
            ))}
          </Typography>
          <Typography
            sx={{
              backgroundColor: darkMode ? "#000" : "#f9f9f9",
              color: darkMode ? "#f9f9f9" : "#000",
            }}
          >
            TOTAL AMOUNT: {pay}
          </Typography>
          <TextField
            sx={{ color: darkMode ? "f9f9f9" : "#f9f9f9" }}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            placeholder="phone"
            value={phone}
            type="number"
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
            type="number"
            onChange={(e) => setCredit(e.target.value)}
          />
          <br />
          <br />

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
            onClick={handleClickBuyButton}
          >
            {" "}
            <Typography
              sx={{
                color: darkMode ? "#000" : "#f9f9f9",
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
      ) : (
        <Box>
          <Box
            sx={{ backgroundColor: darkMode ? "#000" : "#b3b3b3" }}
            className="recipe-container"
          >
            <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
              Thank you {name} for your purchase.
              <br />
              Your order's number is {order}
              <br />
              Soon we'll send you the recipe order to: {email}
              <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/">
                <Button
                  sx={{
                    backgroundColor: darkMode ? "#f9f9f9" : "#000",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "inherit",
                    },
                  }}
                >
                  Return Home
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Checkout;
