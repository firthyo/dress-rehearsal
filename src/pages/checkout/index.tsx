import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Button, Spacer, TextFieldForm, Typography } from "components/core";
import { Accordion } from "components/core/accordion";
import React from "react";
import {
  Form,
  Line,
  Link,
  Overview,
  RowWrapperMultipleCol,
  Wrapper,
} from "./styles";
import { useForm } from "react-hook-form";
import CheckoutForm from "components/form/checkout-form";
type CheckoutFormVariables = {
  email: string;
  terms: boolean;
  firstName: string;
};

const EmailLabel = () => {
  return (
    <Typography>
      Receive emails about new products, sales and store events.{" "}
    </Typography>
  );
};
export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormVariables>();
  const handleNext = () => {
    console.log("handleNext");
  };
  return (
    <div>
      <div>
        <Wrapper>
          <Form>
            <CheckoutForm></CheckoutForm>
          </Form>
          <Overview>test test</Overview>
        </Wrapper>
      </div>
    </div>
  );
};

export default Checkout;
