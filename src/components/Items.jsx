import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import { contextoGeneral } from "../components/CartContext";

import Typography from "@mui/material/Typography";

const Items = ({ productos }) => {
  const { whiteMode } = useContext(contextoGeneral);
  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="item-container"
    >
      <img className="images" src={productos.image} alt="product" />
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }} variant="h5">
        {productos.title}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
        Size: {productos.size}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
        Color: {productos.color}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
        Price: {productos.price}
      </Typography>
      <Box className="details-btn">
        <Link to={`/item/${productos.id}`}>
          <Button
            sx={{
              backgroundColor: whiteMode ? "#000" : "#f9f9f9",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#f9f9f9",
                color: "inherit",
              },
            }}
            variant="contained"
            id={productos.id}
          >
            <Typography
              sx={{
                color: whiteMode ? "#f9f9f9" : "#000",
                "&:hover": {
                  backgroundColor: "inherit",
                  color: "inherit",
                },
              }}
            >
              {" "}
              DETAILS
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Items;
