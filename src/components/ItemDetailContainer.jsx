import React, { useEffect, useState } from "react";
import { getProduct } from "../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../index";
import { collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { iditem } = useParams();
  const [data, setData] = useState({});
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
      setData(arrayShoes);
    });
  }, [iditem]);

  return (
    <div>
      <ItemDetail productos={data} />
    </div>
  );
};

export default ItemDetailContainer;
