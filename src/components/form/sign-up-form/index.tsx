import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormControlLabel, Checkbox, Button } from "@mui/material";

import TextFieldForm from "components/text-field";
import Spacer from "components/spacer";
// import Button from "components/button";

import {
  FormContainer,
  Link,
  RowWrapper,
  RowWrapperMultipleCol,
} from "./styles";

import { SignUpFormType } from "./type";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    console.log("this is data", data); // You can replace this with a call to your backend API
  };

  const TermsLabel = () => {
    return (
      <div>
        I agree to the <Link href="/terms-of-service">Terms of Service</Link>
        and <Link href="/privacy-notice">Privacy Notice</Link>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        Create new account
        <FormContainer>
          <RowWrapperMultipleCol>
            <TextFieldForm
              variant="outlined"
              label="First name"
              {...register("firstName", { required: true })}
            />
            <Spacer x={12} />
            <TextFieldForm
              variant="outlined"
              label="Last name"
              {...register("lastName", { required: true })}
            />
          </RowWrapperMultipleCol>
          <RowWrapper>
            <TextFieldForm
              variant="outlined"
              label="Email"
              {...register("email", { required: true })}
            />
          </RowWrapper>
          <RowWrapper>
            <TextFieldForm
              variant="outlined"
              label="Password"
              type={"password"}
              {...register("password", { required: true })}
            />
          </RowWrapper>
          <RowWrapper>
            <FormControlLabel
              control={<Checkbox defaultChecked {...register("terms")} />}
              label={<TermsLabel />}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked {...register("rememberMe")} />}
              label={<div>{"Remember me"}</div>}
            />
          </RowWrapper>
          <RowWrapper>
            <Button type="submit">{"Create account!"}</Button>
          </RowWrapper>
        </FormContainer>
      </div>
    </form>
  );
};

export default SignUpForm;
