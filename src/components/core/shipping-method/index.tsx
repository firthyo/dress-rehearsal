import React, { useState } from "react";
import { LocalShippingOutline, Lighting } from "assets/icons"; // Replace with your actual icon imports
import {
  Container,
  OptionWrapper,
  ShippingBox,
  ShippingTitle,
  ShippingText,
} from "./styles";
import Spacer from "../spacer";

interface ShippingMethodProps {
  onChange: (method: string) => void;
}

export const ShippingMethod: React.FC<ShippingMethodProps> = ({ onChange }) => {
  const [selectedMethod, setSelectedMethod] = useState("standard");

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
    onChange(method); // Send the selected method to the parent component
  };

  return (
    <Container>
      <ShippingTitle>Shipping Method</ShippingTitle>
      <OptionWrapper>
        <ShippingBox
          onClick={() => handleSelect("standard")}
          selected={selectedMethod === "standard"}
        >
          <LocalShippingOutline size={32} />
          <ShippingText>Standard: Free</ShippingText>
          <ShippingText small>Get it by Saturday, July 13</ShippingText>
        </ShippingBox>
        <Spacer x={16} />
        <ShippingBox
          onClick={() => handleSelect("express")}
          selected={selectedMethod === "express"}
        >
          <Lighting size={32} />
          <ShippingText>Express: $12.95</ShippingText>
          <ShippingText small>Get it by Tuesday, July 09</ShippingText>
        </ShippingBox>
      </OptionWrapper>
    </Container>
  );
};

export default ShippingMethod;
