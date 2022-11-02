import React, { useState, useEffect } from "react";
import Items from "./Items";
import ItemCounter from "./ItemCounter";

export default function ItemDetailContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setData(resJson);
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("finish");
      });
  }, []);

  return data.map((item) => {
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
        <ItemCounter />
      </div>
    );
  });
}
