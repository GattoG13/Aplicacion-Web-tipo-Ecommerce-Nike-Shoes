import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";

// Son component
export default function CartWidget() {
  return (
    <div>
      <Button
        variant="outlinedSizeSmall"
        color="primary"
        fullWidth={false}
        startIcon={<ShoppingCartOutlinedIcon />}
      >
        {" "}
        0
      </Button>
    </div>
  );
}
