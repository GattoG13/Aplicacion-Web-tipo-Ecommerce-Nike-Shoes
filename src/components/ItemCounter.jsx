import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../components/CartContext";

const ItemCounter = ({ stock, initial }) => {
  // const { onAdd } = useContext(contextoGeneral);
  const [cont, setCont] = useState(parseInt(initial));
  const sumar = () => {
    setCont(cont + 1);
  };
  const restar = () => {
    setCont(cont - 1);
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
    </div>
  );
};

export default ItemCounter;
