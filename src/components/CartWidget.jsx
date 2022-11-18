import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import { contextoGeneral } from "../components/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ({ quantity }) => {
  const { whiteMode } = useContext(contextoGeneral);

  return (
    <div>
      <Link to="/cart">
        <Button
          variant="outlinedSizeSmall"
          sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}
          fullWidth={false}
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          {quantity}{" "}
        </Button>
      </Link>
    </div>
  );
};

export default CartWidget;
