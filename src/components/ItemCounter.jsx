import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../components/CartContext";

const ItemCounter = ({ stock, initial, onAddToCart }) => {
  const { whiteMode } = useContext(contextoGeneral);

  const [cont, setCont] = useState(parseInt(initial));
  const sumar = () => {
    if (cont < stock) {
      setCont(cont + 1);
    }
  };
  const restar = () => {
    if (cont > 1) {
      setCont(cont - 1);
    }
  };

  useEffect(() => {
    setCont(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <Button disabled={cont <= 0} sx={{ background: "#ddd" }} onClick={restar}>
        -
      </Button>
      <span>{cont}</span>
      <Button
        disabled={cont >= stock}
        sx={{ background: "#ddd" }}
        onClick={sumar}
      >
        +
      </Button>
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
            onAddToCart(cont);
          }}
        >
          Add to Cart
        </Button>
      </Link>
    </div>
  );
};

export default ItemCounter;
