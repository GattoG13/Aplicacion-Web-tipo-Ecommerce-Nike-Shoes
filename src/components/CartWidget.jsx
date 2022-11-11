import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import { contextoGeneral } from "../App.js";

const CartWidget = () => {
  const { whiteMode } = useContext(contextoGeneral);

  return (
    <div>
      <Button
        variant="outlinedSizeSmall"
        sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}
        fullWidth={false}
        startIcon={<ShoppingCartOutlinedIcon />}
      >
        {" "}
        0
      </Button>
    </div>
  );
};

export default CartWidget;
