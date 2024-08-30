import React from "react";

import { CustomStepper } from "components/core/stepper";
import StoreImage from "assets/mock-pic/mock_product1.png";

import {
  BoxWrapper,
  ImageWrapper,
  ItemImage,
  StyledInfoContainer,
  TrackOrdersContainer,
  TrackOrdersWrapper,
  TrackingBoxWrapper,
} from "./styles";
import {
  Button,
  InlineWrapper,
  Spacer,
  TextFieldForm,
  Typography,
} from "components/core";
import { InfoContainer } from "../styles";
import TrackOrderForm from "components/form/track-order-form";
import { CustomizedSteppers } from "components/core/progress";
import {
  DoorOpen,
  Headset,
  LocalShippingOutline,
  PackageIcon,
  PaperIcon,
} from "assets/icons";

export const TrackOrders = () => {
  const steps = ["Order Placed", "Preparing Shipment", "Shipped", "Delivered"];

  const stepsData = [
    { label: "Order Placed", icon: <PaperIcon color="#fff" /> },
    { label: "Preparing Shipment", icon: <PackageIcon color="#fff" /> },
    { label: "Shipped", icon: <LocalShippingOutline color="#fff" /> },
    { label: "Delivered", icon: <DoorOpen color="#fff" /> },
  ];

  return (
    <>
      <InlineWrapper justifyContent="flex-start">
        <Typography variant="h4" color="systemDark">
          Track your orders
        </Typography>
      </InlineWrapper>

      <TrackOrdersContainer>
        <ImageWrapper>
          <Typography variant={"p-medium"} color="systemDark">
            Tracking Order #2345432
          </Typography>
          <Typography color="systemDark">
            Order Placed on : Tue, Aug 12
          </Typography>

          <Typography color="systemDark"> item(s) : 1</Typography>
          <InlineWrapper>
            <img
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
              src={StoreImage}
              alt="Store"
            />
            <img
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
              src={StoreImage}
              alt="Store"
            />
          </InlineWrapper>
        </ImageWrapper>
        <StyledInfoContainer>
          <CustomizedSteppers
            steps={stepsData}
            activeStep={1}
            statusText="Your order is currently being prepared for shipment. We will notify you when it has been shipped."
          />
        </StyledInfoContainer>
      </TrackOrdersContainer>
      <InlineWrapper>
        <TrackingBoxWrapper>
          <TrackOrderForm></TrackOrderForm>
        </TrackingBoxWrapper>
        <Spacer x={32} />
        <TrackingBoxWrapper>
          <BoxWrapper>
            <Headset size={40}></Headset>
            <Spacer y={12} />
            <Typography variant="p-medium" color="systemDark">
              Need Help with Your Order?
            </Typography>
            <Spacer y={12} />
            <Typography color="systemDark">
              Our customer support team is here to assist you. If you have any
              questions or concerns regarding your order, feel free to reach out
              to us.
            </Typography>
            <Spacer y={24}></Spacer>

            <InlineWrapper justifyContent="center">
              <Button width={200}>Contact us</Button>
            </InlineWrapper>
          </BoxWrapper>
        </TrackingBoxWrapper>
      </InlineWrapper>
    </>
  );
};

export default TrackOrders;
