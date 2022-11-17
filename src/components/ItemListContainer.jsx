//@ts-check
import React, { useEffect, useState } from "react";
import Items from "./Items";
import { useParams } from "react-router-dom";
import { db } from "../index";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { idcategory } = useParams();
  const [data, setData] = useState([]);
  console.log(data);
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
    <div className="item-container2">
      <Items products={data} />
    </div>
  );
};

export default ItemListContainer;
