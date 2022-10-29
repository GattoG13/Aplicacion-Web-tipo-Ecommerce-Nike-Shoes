import { Button } from "@mui/material";
import React from "react";

function Items({ title, size, color, price, pictureURL, id }) {
  return (
    <div>
      <div>
        <img src={pictureURL} alt="product" />
      </div>
      <h2>{title}</h2>
      <p>Sizes: {size}</p>
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
          Buy
        </Button>
      </div>
    </div>
  );
}

export default Items;
