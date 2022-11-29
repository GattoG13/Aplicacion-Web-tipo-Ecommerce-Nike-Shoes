import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext } from "react";
import "../assets/css/index.css";
import "../assets/css/ItemCounter.css";
import { contextoGeneral } from "../components/CartContext";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({ productos }) => {
  const { darkMode, addItem } = useContext(contextoGeneral);

  const onAddToCart = (quantity) => {
    addItem(productos, quantity);
  };

  return (
    <Box
      sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
      className="itemdetail-container"
    >
      {productos.id ? (
        <Box
          sx={{ backgroundColor: darkMode ? "#000" : "#f9f9f9" }}
          className="itemdetail2-container"
          key={productos.id}
        >
          <img className="images" src={productos.pictureURL} alt="product" />
          <Typography
            sx={{ color: darkMode ? "#f9f9f9" : "#000" }}
            variant="h5"
          >
            {productos.title}
          </Typography>
          <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
            Sizes: {JSON.stringify(productos.size)}
          </Typography>
          <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
            Color: {productos.color}
          </Typography>
          <Typography sx={{ color: darkMode ? "#f9f9f9" : "#000" }}>
            Price: {productos.price}
          </Typography>
          <Box className="itembox1-details">
            <Box className="itemcount-details">
              <ItemCounter initial={0} stock={10} onAddToCart={onAddToCart} />
            </Box>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default ItemDetail;
