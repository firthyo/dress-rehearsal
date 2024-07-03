import React from "react";

import { CloseIcon, FavoritOutline, ShareIcon } from "assets/icons";
import {
  Box,
  Drawer,
  IconButton,
  Snackbar,
  Divider,
  SwipeableDrawer,
} from "@mui/material";

import {
  Button,
  Counter,
  InlineWrapper,
  SizeSelection,
  Spacer,
  Typography,
} from "components/core";
import MockProduct from "assets/mock-pic/mock_product1.png";

export const ShoppingBagDrawer = () => {
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
      <div style={{ margin: "24px" }}>
        <InlineWrapper justifyContent="space-between">
          <InlineWrapper>
            <Typography color="systemDark">Your Bag</Typography>
            <Typography color="systemDark">{"(3 Items)"}</Typography>
          </InlineWrapper>
          <CloseIcon />
        </InlineWrapper>
      </div>

      <Divider />

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <div style={{ margin: "24px" }}>
          <Typography variant={"p-medium"} color="systemDark">
            Practice etiquette T-shirt
          </Typography>
          <Spacer y={12} />
          <div style={{ display: "flex" }}>
            <img src={MockProduct} width={"40%"}></img>
            <Spacer x={24} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography color="systemDark">Color: Black</Typography>
              <Typography color="systemDark">Size: Oversize</Typography>
              <Typography color="systemDark">THB 900</Typography>
              <Typography color="systemDark">Quantity</Typography>
              <Counter />
              <Typography color="systemDark" variant={"p-medium"}>
                Subtotal : 900
              </Typography>
            </div>
          </div>
          <Spacer y={24} />
          <Divider />
          <Spacer x={24} />
        </div>
      </Box>
      {/* <Button>Checkout</Button> */}
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
          <Typography color="systemDark">THB 1800</Typography>
        </InlineWrapper>
        <Spacer y={12} />
        <InlineWrapper justifyContent="space-between">
          <Button width={162} variant="outlined" customColor="#000">
            Review Bag
          </Button>
          <Spacer x={8} />
          <Button width={162} customColor="#000">
            Check out
          </Button>
        </InlineWrapper>
      </Box>
    </Box>
  );
};

export default ShoppingBagDrawer;
