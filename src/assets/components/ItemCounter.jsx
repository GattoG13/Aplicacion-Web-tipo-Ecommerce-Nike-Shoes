import { Button } from "@mui/material";
import React, { useState } from "react";
import "../css/ItemCounter.css";

// Son component
export default function ItemCounter(stock, initial, AddCart) {
  const [cont, setCont] = useState(0);
  const sumar = () => {
    setCont(cont + 1);
  };
  const restar = () => {
    setCont(cont - 1);
  };
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
      <Button
        disabled={cont >= stock || cont <= 0}
        sx={{ background: "#ddd" }}
        onClick={() => AddCart()}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}
