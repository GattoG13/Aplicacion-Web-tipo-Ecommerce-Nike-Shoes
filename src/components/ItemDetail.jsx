import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import ItemCounter from "./ItemCounter";
import "../assets/css/ItemCounter.css";

const ItemDetail = ({ productos }) => {
  const AddCart = (quantity) => {
    alert("Usted a agregado " + quantity + " items al carrito");
  };
  return (
    <div className="itemdetail-container">
      {productos.id ? (
        <div className="itemdetail2-container" key={productos.id}>
          <img className="images" src={productos.pictureURL} alt="product" />
          <h2>{productos.title}</h2>
          <p>Size: {productos.size}</p>
          <p>Color: {productos.color}</p>
          <p>Price: {productos.price}</p>
          <div className="itembox1-details">
            <div className="itemcount-details">
              <ItemCounter initial={0} stock={10} AddCart={AddCart} />
            </div>
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
};

export default ItemDetail;
