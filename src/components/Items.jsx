import { Button } from "@mui/material";
import React from "react";
import "../assets/css/index.css";
function Items({ title, size, color, price, image, id }) {
  return (
    <div className="item-container">
      <div>
        <img src={image} alt="product" />
      </div>
      <h2>{title}</h2>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <p>Price: {price}</p>
      <div>
        <Button
          sx={{
            backgroundColor: "#000",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#ddd",
              color: "#000",
            },
          }}
          variant="contained"
          id={id}
        >
          DETAILS
        </Button>
      </div>
    </div>
  );
}

export default Items;
