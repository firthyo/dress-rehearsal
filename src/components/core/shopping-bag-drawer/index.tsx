import React from "react";
import { CloseIcon } from "assets/icons";
import { Box, Divider, IconButton } from "@mui/material";
import {
  Button,
  Counter,
  InlineWrapper,
  Spacer,
  Typography,
} from "components/core";
import { useCart } from "context/CartContext";
import { DetailWrapper, TitleWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

interface CartItem {
  productId: string;
  variantId: string;
  size: string;
  name: string;
  price: number;
  color?: string;
  quantity: number;
  image: string;
}

interface ShoppingBagDrawerProps {
  cartItems: CartItem[];
  onClose: (event: React.SyntheticEvent | Event, reason?: string) => void; // Updated the onClose prop type
}

export const ShoppingBagDrawer: React.FC<ShoppingBagDrawerProps> = ({
  cartItems,
  onClose,
}) => {
  const { addItemToCart, subtractItemFromCart } = useCart();
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    const quantityDifference = newQuantity - item.quantity;
    if (quantityDifference > 0) {
      const updatedItem = { ...item, quantity: quantityDifference };
      addItemToCart(updatedItem);
    } else {
      const updatedItem = { ...item, quantity: Math.abs(quantityDifference) };
      subtractItemFromCart(updatedItem);
    }
  };

  return (
    <Box
      sx={{
        width: 380,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
      role="presentation"
    >
      <TitleWrapper>
        <InlineWrapper justifyContent="space-between">
          <InlineWrapper>
            <Typography color="systemDark">Your Bag</Typography>
            <Spacer x={8} />
            <Typography color="systemDark">
              {`(${totalQuantity} Items)`}
            </Typography>
          </InlineWrapper>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </InlineWrapper>
      </TitleWrapper>

      <Divider />

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {cartItems.map((item, index) => (
          <div key={index} style={{ margin: "24px" }}>
            <Typography variant={"p-detail"} color="systemDark">
              {item.name}
            </Typography>
            <Spacer y={12} />
            <div style={{ display: "flex" }}>
              <img src={item.image} width={"40%"} alt="Product" />
              <Spacer x={24} />
              <DetailWrapper>
                <Typography color="systemDark">Color: {item.color}</Typography>
                <Typography color="systemDark">Size: {item.size}</Typography>
                <Typography color="systemDark">THB {item.price}</Typography>
                <Typography color="systemDark">Quantity</Typography>
                <Counter
                  initialCount={item.quantity}
                  onChange={(value) => handleQuantityChange(item, value)}
                />
                <Typography color="systemDark" variant={"p-medium"}>
                  Subtotal : {item.price * item.quantity}
                </Typography>
              </DetailWrapper>
            </div>

            <Spacer y={24} />
            <Divider />
          </div>
        ))}
      </Box>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          padding: "16px",
          boxShadow: " 4px 0px 10px 0px rgba(0, 0, 0, 0.15);",
        }}
      >
        <InlineWrapper justifyContent="space-between">
          <Typography color="systemDark" variant="p-medium">
            Est. Total:{" "}
          </Typography>
          <Typography color="systemDark">THB {totalPrice}</Typography>
        </InlineWrapper>
        <Spacer y={12} />
        <InlineWrapper justifyContent="space-between">
          <Button width={162} variant="outlined">
            Review Bag
          </Button>
          <Spacer x={8} />
          <Button width={162} onClick={navigateToCheckout}>
            Check out
          </Button>
        </InlineWrapper>
      </Box>
    </Box>
  );
};

export default ShoppingBagDrawer;
