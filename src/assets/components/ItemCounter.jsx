import { Button } from "@mui/material";
import React from "react";
import "../css/ItemCounter.css";

// Son component
export default function ItemCounter() {
  return (
    <div>
      <Button sx={{ background: "#ddd" }}>-</Button>
      <span>0</span>
      <Button sx={{ background: "#ddd" }}>+</Button>
    </div>
  );
}
