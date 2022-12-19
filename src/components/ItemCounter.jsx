import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../components/CartContext";

const ItemCounter = ({ stock, initial, onAddToCart }) => {
  const { darkMode } = useContext(contextoGeneral);

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
      <Link sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}>
        <Button
          sx={{
            backgroundColor: darkMode ? "#f9f9f9" : "#000",
            borderRadius: 2,
            color: darkMode ? "#000" : "#f9f9f9",
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
