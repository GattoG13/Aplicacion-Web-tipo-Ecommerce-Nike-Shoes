import React, { useEffect, useState } from "react";
import { getProduct } from "../data/data";
import Items from "./Items";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const { idcategory } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getProduct(idcategory)
      .then((res) => {
        if (idcategory) {
          setData(res.filter((item) => item.category === idcategory));
        } else {
          setData(res);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finish");
      });
  }, [idcategory]);

  return data.map((item) => {
    return (
      <div className="item-container2" key={item.id}>
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
};

export default ItemList;
