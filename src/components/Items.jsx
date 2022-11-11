import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import { contextoGeneral } from "../App.js";
import Typography from "@mui/material/Typography";

const Items = ({ title, size, color, price, image, id }) => {
  const { whiteMode } = useContext(contextoGeneral);
  return (
    <Box
      sx={{ backgroundColor: whiteMode ? "#f9f9f9" : "#000" }}
      className="item-container"
    >
      <img className="images" src={image} alt="product" />
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }} component="h2">
        {title}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
        Size: {size}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
        Color: {color}
      </Typography>
      <Typography sx={{ color: whiteMode ? "#000" : "#f9f9f9" }}>
        Price: {price}
      </Typography>
      <Box className="details-btn">
        <Link to={`/item/${id}`}>
          <Button
            sx={{
              backgroundColor: whiteMode ? "#000" : "#f9f9f9",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "inherit",
                color: "#000",
              },
            }}
            variant="contained"
            id={id}
          >
            <Typography sx={{ color: whiteMode ? "#f9f9f9" : "#f9f9f9" }}>
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
