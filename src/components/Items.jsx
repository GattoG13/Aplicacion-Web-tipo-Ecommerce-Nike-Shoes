import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import { contextoGeneral } from "../components/CartContext";

import Typography from "@mui/material/Typography";

const Items = ({ producto }) => {
  const { whiteMode } = useContext(contextoGeneral);
  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#000" : "#f9f9f9" }}
      className="item-container"
    >
      <img className="images" src={producto.image} alt="product" />
      <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }} variant="h5">
        {producto.title}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}>
        Size: {producto.size}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}>
        Color: {producto.color}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#000" }}>
        Price: {producto.price}
      </Typography>
      <Box className="details-btn">
        <Link to={`/item/${producto.id}`}>
          <Button
            sx={{
              backgroundColor: whiteMode ? "#f9f9f9" : "#000",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#000",
                color: "inherit",
              },
            }}
            variant="contained"
            id={producto.id}
          >
            <Typography
              sx={{
                color: whiteMode ? "#000" : "#f9f9f9",
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
