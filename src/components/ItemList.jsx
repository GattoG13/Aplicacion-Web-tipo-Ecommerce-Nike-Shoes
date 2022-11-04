import React, { useEffect, useState } from "react";
import { getCategory, getId } from "../data/data";
import Items from "./Items";
import { useParams } from "react-router-dom";

function ItemList() {
  const { idcategory } = useParams;
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategory()
      .then((res) => {
        if (idcategory) {
          setData(res.filter((item) => item.category == idcategory));
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
      <div key={item.id}>
        {/* {!data.length && "Loading..."} */}
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
