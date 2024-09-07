import {
  Button,
  InlineWrapper,
  Spacer,
  TextFieldForm,
  Typography,
} from "components/core";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import { FormContainer } from "./styles";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  orderNumber: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const methods = useForm<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <Typography color="systemDark">
          Reach out to us via email if you have any questions or concerns.{" "}
          <br />
          We're here to help with your orders, returns, and more.
        </Typography>

        <Spacer y={24}></Spacer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldForm
            variant="outlined"
            label="Subject"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
          <Spacer y={24} />
          <InlineWrapper>
            <TextFieldForm
              variant="outlined"
              label="Email"
              {...register("email", { required: true })}
            />
            {errors.lastName && <span>This field is required</span>}
            <Spacer x={16} />
            <TextFieldForm
              variant="outlined"
              label="Order Number"
              {...register("orderNumber", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </InlineWrapper>

          <Spacer y={24} />

          <TextFieldForm
            variant="outlined"
            label="Order Number"
            {...register("orderNumber")}
          />
          <Spacer y={24} />
          <TextFieldForm
            variant="outlined"
            label="Message"
            {...register("message", { required: true })}
            multiline
            rows={4}
          />
          {errors.message && <span>This field is required</span>}
          <Spacer y={24} />
          <InlineWrapper justifyContent="center">
            <Button style={{ width: "50%" }}>Submit</Button>
          </InlineWrapper>
        </form>
      </FormContainer>
    </FormProvider>
  );
};
