import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import ItemCounter from "./ItemCounter";

function ItemDetail({ productos }) {
  const AddCart = (quantity) => {
    // alert("Usted a agregado " + quantity + " items al carrito");
  };
  return (
    <div>
      {productos.id ? (
        <div className="item-container" key={productos.id}>
          <img className="images" src={productos.pictureURL} alt="product" />
          <h2>{productos.title}</h2>
          <p>Size: {productos.size}</p>
          <p>Color: {productos.color}</p>
          <p>Price: {productos.price}</p>
          <div>
            <ItemCounter initial={0} stock={10} AddCart={AddCart} />

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
          </div>
        </div>
      ) : (
        <div>"Loading..."</div>
      )}
    </div>
  );
}

export default ItemDetail;
