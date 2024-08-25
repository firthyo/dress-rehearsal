import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "assets/icons/common/shopping-cart-icon";
import { useCart } from "context/CartContext";
import { IconButton, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShoppingBagDrawer from "../shopping-bag-drawer";
// import MailIcon from "@mui/icons-material/Mail";

type BadgeIndicatorProps = {
  icon?: React.ReactElement;
};

export const BadgeIndicator: React.FC<BadgeIndicatorProps> = ({ icon }) => {
  const { itemCount, cartItems, addItemToCart } = useCart();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  // const handleClick = () => {
  //   navigate("/cart");
  // };

  console.log("itemCount", itemCount);
  return (
    <>
      <IconButton color="default" onClick={handleDrawerOpen}>
        <Badge badgeContent={itemCount} color="primary">
          {icon || <ShoppingCartIcon />}
        </Badge>
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={handleDrawerClose} anchor={"right"}>
        <ShoppingBagDrawer cartItems={cartItems} onClose={handleDrawerClose} />
      </Drawer>
    </>
  );
};

export default BadgeIndicator;
