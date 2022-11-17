import React from "react";
import ReactDOM from "react-dom/client";
import Pepe from "./App";
import "./assets/css/index.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0LvDTKKWfnOSQbmgL-5DVHUe6PAvkuTw",
  authDomain: "gatto-projectreact.firebaseapp.com",
  projectId: "gatto-projectreact",
  storageBucket: "gatto-projectreact.appspot.com",
  messagingSenderId: "165681605572",
  appId: "1:165681605572:web:2b369ae4b61fdf18be5291",
  measurementId: "G-7K60VYKR07",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <Pepe />
    {/* </React.StrictMode> */}
  </>
);
