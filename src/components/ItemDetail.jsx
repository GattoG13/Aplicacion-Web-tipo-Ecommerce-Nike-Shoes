import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import ItemCounter from "./ItemCounter";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../App.js";

const ItemDetail = ({ productos }) => {
  const AddCart = (quantity) => {
    alert("Usted a agregado " + quantity + " items al carrito");
  };
  const { whiteMode } = useContext(contextoGeneral);

  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="itemdetail-container"
    >
      {productos.id ? (
        <Box
          sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
          className="itemdetail2-container"
          key={productos.id}
        >
          <img className="images" src={productos.pictureURL} alt="product" />
          <h2>{productos.title}</h2>
          <Typography>Size: {productos.size}</Typography>
          <Typography>Color: {productos.color}</Typography>
          <Typography>Price: {productos.price}</Typography>
          <Box className="itembox1-details">
            <Box className="itemcount-details">
              <ItemCounter initial={0} stock={10} AddCart={AddCart} />
            </Box>
            <Link to="/checkout">
              <Button
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "inherit",
                    color: "#000",
                  },
                }}
                variant="contained"
              >
                BUY
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box>"Loading..."</Box>
      )}
    </Box>
  );
};

export default ItemDetail;
