import React from "react";
import styled from "styled-components";
import { useCart } from "context/CartContext";
import {
  Divider,
  ItemDetail,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemRow,
  ItemsList,
  SummaryContainer,
  SummaryRow,
  Title,
} from "./styles";

import Spacer from "../spacer";
import { Typography } from "../typography";
import { InlineWrapper } from "../inline-wrapper";
import EditIcon from "assets/icons/common/edit-con";

export const OrderSummary = () => {
  const { cartItems } = useCart();
  console.log("cartItems", cartItems);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = cartItems.length > 0 ? 40 : 0; // Example shipping logic
  const promoDiscount = cartItems.length > 0 ? 40 : 0; // Example promo logic
  const estimatedTax = 0; // Example tax logic
  const orderTotal = subtotal + shippingCost - promoDiscount + estimatedTax;

  return (
    <>
      <SummaryContainer>
        <Spacer y={8} />
        <InlineWrapper justifyContent="space-between">
          <Typography variant="label-medium" color="systemDark">
            Order summary
          </Typography>
          <Spacer y={16} />
        </InlineWrapper>

        <Spacer y={16} />
        <SummaryRow>
          <Typography color="systemDark">Subtotal:</Typography>
          <Typography color="systemDark">THB {subtotal}</Typography>
        </SummaryRow>
        <Spacer y={8} />
        <SummaryRow>
          <Typography color="systemDark">Shipping:</Typography>
          <Typography color="systemDark">THB {shippingCost}</Typography>
        </SummaryRow>
        <Spacer y={8} />
        <SummaryRow>
          <Typography color="systemDark">
            Promo: Free Standard Shipping
          </Typography>
          <Typography color="systemDark">-THB {promoDiscount}</Typography>
        </SummaryRow>
        <Spacer y={8} />
        <SummaryRow>
          <Typography color="systemDark">Estimated Tax:</Typography>
          <Typography color="systemDark">THB {estimatedTax}</Typography>
        </SummaryRow>
        <Spacer y={16} />
        <Divider />
        <Spacer y={16} />
        <SummaryRow>
          <Typography>Order total</Typography>
          <Typography>THB {orderTotal}</Typography>
        </SummaryRow>
      </SummaryContainer>
      <Spacer x={24} />
      <div style={{ padding: "16px" }}>
        <InlineWrapper justifyContent="space-between">
          <Typography variant="label-medium" color="systemDark">
            Shipping ({cartItems.length} Items)
          </Typography>
          <InlineWrapper>
            <Typography color="systemDark" variant="action-text">
              Edit
            </Typography>
            <Spacer x={4} />
            <EditIcon size={24} />
          </InlineWrapper>
        </InlineWrapper>

        <ItemsList>
          {cartItems.map((item, index) => (
            <ItemRow key={index}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <Typography>{item.name}</Typography>
                <Typography>Color: {item.color}</Typography>
                <Typography>Size: {item.size}</Typography>
                <Typography>THB {item.price}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
                <Typography>
                  Subtotal: THB {item.price * item.quantity}
                </Typography>
              </ItemDetails>
            </ItemRow>
          ))}
        </ItemsList>
      </div>
    </>
  );
};

export default OrderSummary;
