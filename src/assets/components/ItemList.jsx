import React, { useState, useEffect } from "react";
import Airmax1 from "../images/airmax-greyred.svg";
import Airmax2 from "../images/airmaxdama-white.svg";
import Jordan1 from "../images/nikejordan-twhite.svg";
import Airmax3 from "../images/airmax-whitered.svg";
import Jordan2 from "../images/nikejordan-redwhite.svg";
import Airmax4 from "../images/airmax-blackwhite.svg";
import Jordan3 from "../images/nikejordan-whitegrey.svg";
import Items from "./Items";

function ItemList() {
  const shoes = [
    {
      id: 1,
      title: "Nike Hombre Air Max Genome",
      size: "7 - 13",
      color: "grey/red",
      price: "310 U$S",
      pictureURL: Airmax1,
    },
    {
      id: 2,
      title: "Nike Air Jordan 1 Mid Triple White",
      size: "9.5 - 16",
      color: "white",
      price: "390 U$S",
      pictureURL: Jordan1,
    },
    {
      id: 3,
      title: "Nike Dama Air Max 97 - White",
      size: "7 - 11",
      color: "white",
      price: "280 U$S",
      pictureURL: Airmax2,
    },
    {
      id: 4,
      title: "Nike Air Max 90",
      size: "8 - 12",
      color: "white/red",
      price: "300 U$S",
      pictureURL: Airmax3,
    },
    {
      id: 5,
      title: "Nike Air Jordan 1 Mid Red/White/Black",
      size: "10 - 15",
      color: "red/white/black",
      price: "380 U$S",
      pictureURL: Jordan2,
    },
    {
      id: 6,
      title: "Nike Air Max Excee",
      size: "8 - 12",
      color: "black/white",
      price: "240 U$S",
      pictureURL: Airmax4,
    },
    {
      id: 7,
      title: "Nike Air Jordan 1 Mid (white Wolf Grey)",
      size: "10 - 15",
      color: "white/grey",
      price: "320 U$S",
      pictureURL: Jordan3,
    },
  ];
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const callback = new Promise((res, rej) => {
      res(shoes);
    });

    callback
      .then((res) => {
        setProducts(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return Products.map((item) => {
    return (
      <div key={item.id}>
        <Items
          image={item.pictureURL}
          title={item.title}
          size={item.size}
          color={item.color}
          price={item.price}
          id={item.id}
        />
      </div>
    );
  });
}

export default ItemList;
