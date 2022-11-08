// import React from "react";
import Airmax1 from "../assets/images/airmax-greyred.webp";
import Airmax2 from "../assets/images/airmaxdama-white.webp";
import Jordan1 from "../assets/images/nikejordan-twhite.webp";
import Airmax3 from "../assets/images/airmax-whitered.webp";
import Jordan2 from "../assets/images/nikejordan-redwhite.webp";
import Airmax4 from "../assets/images/airmax-blackwhite.webp";
import Jordan3 from "../assets/images/nikejordan-whitegrey.webp";

const shoes = [
  {
    id: 1,
    title: "Nike Hombre Air Max Genome",
    size: "7 - 13",
    color: "grey/red",
    price: "310 U$S",
    pictureURL: Airmax1,
    category: "Airmax",
  },
  {
    id: 2,
    title: "Nike Air Jordan 1 Mid Triple White",
    size: "9.5 - 16",
    color: "white",
    price: "390 U$S",
    pictureURL: Jordan1,
    category: "Jordan",
  },
  {
    id: 3,
    title: "Nike Dama Air Max 97 - White",
    size: "7 - 11",
    color: "white",
    price: "280 U$S",
    pictureURL: Airmax2,
    category: "Airmax",
  },
  {
    id: 4,
    title: "Nike Air Max 90",
    size: "8 - 12",
    color: "white/red",
    price: "300 U$S",
    pictureURL: Airmax3,
    category: "Airmax",
  },
  {
    id: 5,
    title: "Nike Air Jordan 1 Mid Red/White/Black",
    size: "10 - 15",
    color: "red/white/black",
    price: "380 U$S",
    pictureURL: Jordan2,
    category: "Jordan",
  },
  {
    id: 6,
    title: "Nike Air Max Excee",
    size: "8 - 12",
    color: "black/white",
    price: "240 U$S",
    pictureURL: Airmax4,
    category: "Airmax",
  },
  {
    id: 7,
    title: "Nike Air Jordan 1 Mid (white Wolf Grey)",
    size: "10 - 15",
    color: "white/grey",
    price: "320 U$S",
    pictureURL: Jordan3,
    category: "Jordan",
  },
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shoes);
    }, 2000);
  });
};
