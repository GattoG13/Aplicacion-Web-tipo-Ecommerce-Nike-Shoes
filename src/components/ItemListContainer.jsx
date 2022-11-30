//@ts-check
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../index";
import { collection, getDocs } from "firebase/firestore";
import { Box } from "@mui/material";
import "../assets/css/index.css";

const ItemListContainer = () => {
  const { idcategory } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const products = collection(db, "products");
    getDocs(products).then((res) => {
      const arrayShoes = res.docs.map((product) => {
        return {
          id: product.id,
          title: product.data().title,
          size: product.data().size,
          color: product.data().color,
          price: product.data().price,
          pictureURL: product.data().pictureURL,
          category: product.data().category,
        };
      });
      if (idcategory) {
        setData(arrayShoes.filter((item) => item.category === idcategory));
      } else {
        setData(arrayShoes);
      }
    });
  }, [idcategory]);

  return (
    <Box className="item-container2">
      <ItemList data={data} />
    </Box>
  );
};

export default ItemListContainer;
