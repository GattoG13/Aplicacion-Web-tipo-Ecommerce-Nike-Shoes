//@ts-check
import React, { useEffect, useState } from "react";
import { getProduct } from "../data/data";
import Items from "./Items";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemList = () => {
  const { idcategory } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productos = collection(db, "productos");
    getDocs(productos).then((res) => {
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

  return data.map((item) => {
    return (
      <div className="item-container2">
        <Items productos={data} />
      </div>
    );
  });
};

export default ItemList;
