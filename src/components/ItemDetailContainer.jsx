import React, { useEffect, useState } from "react";
import { getId } from "../data/data";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getId()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finish");
      });
  }, []);

  return <ItemDetail productos={data} />;
}
