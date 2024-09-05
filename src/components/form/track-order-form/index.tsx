import React from "react";

import {
  Button,
  InlineWrapper,
  Spacer,
  TextFieldForm,
  Typography,
} from "components/core";

import { useForm, FormProvider } from "react-hook-form";
import { FormWapper } from "./styles";
import { MagnifyingGlass } from "assets/icons";

// Styled components for the form

export const TrackOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <FormWapper>
        <div>
          <MagnifyingGlass size={40}></MagnifyingGlass>
        </div>
        <Spacer y={12} />
        <Typography variant="p-medium" color="systemDark">
          Can't Find Your Order in the List?
        </Typography>
        <Spacer y={12} />
        <Typography color="systemDark">
          Enter the order number found in the order confirmation email
        </Typography>
        <Spacer y={24} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldForm
            variant="outlined"
            fullWidth
            label="Order No. *"
            placeholder="Eg. DR61022000664"
            {...register("orderNumber", {
              required: "Order number is required",
            })}
            error={!!errors.orderNumber}
            //   helperText={errors.orderNumber?.message}
          />
          <Spacer y={24}></Spacer>
          <InlineWrapper justifyContent="center">
            <Button width={200}>Track order</Button>
          </InlineWrapper>
        </form>
      </FormWapper>
    </FormProvider>
  );
};

export default TrackOrderForm;
