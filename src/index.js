import React from "react";
import ReactDOM from "react-dom/client";
import Pepe from "./App";
import "./assets/css/index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0LvDTKKWfnOSQbmgL-5DVHUe6PAvkuTw",
  authDomain: "gatto-projectreact.firebaseapp.com",
  projectId: "gatto-projectreact",
  storageBucket: "gatto-projectreact.appspot.com",
  messagingSenderId: "165681605572",
  appId: "1:165681605572:web:2b369ae4b61fdf18be5291",
  measurementId: "G-7K60VYKR07",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <Pepe />
    {/* </React.StrictMode> */}
  </>
);
