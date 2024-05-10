import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

import GoogleIcon from "assets/icons/social/GoogleIcon";

import TextFieldForm from "components/core/text-field";
import Spacer from "components/core/spacer";
import Button from "components/core/button";
import { Typography } from "components/core/typography";
import DiviverWithText from "components/core/divider-with-text";

import {
  FormContainer,
  Link,
  RowWrapper,
  RowWrapperMultipleCol,
  TextWrapper,
} from "./styles";

import { SignUpFormType } from "./type";
import { useMutation } from "@apollo/client";
import { REGISTER_USER_MUTATION } from "graphql/user/authMutation";

const SignUpForm = () => {
  const [registerUser, { data, loading, error }] = useMutation(
    REGISTER_USER_MUTATION
  );
  console.log("this is data from mutation :", data, loading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<SignUpFormType> = async (formData) => {
    console.log("this is formData", formData);
    try {
      const response = await registerUser({
        variables: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          terms: formData.terms,
        },
      });
      console.log("Registration successful", response.data); // Log the data here
    } catch (err) {
      console.error("Registration error", err);
    }
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <Spacer y={24} />
          <TextWrapper>
            <Typography variant="titles" customColor={"#684F3B"}>
              Create new account
            </Typography>
          </TextWrapper>
          <Spacer y={24} />
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

            <Spacer y={24} />
            <DiviverWithText label={"or"} />
            <Spacer y={24} />

            <RowWrapper>
              <Button type="button" variant="outlined">
                <GoogleIcon width="24" height="24" />
                <Spacer x={8} />
                {"Sign up with Google"}
              </Button>
            </RowWrapper>

            <Spacer y={24} />

            <RowWrapper>
              <FormControlLabel
                control={<Checkbox defaultChecked {...register("terms")} />}
                label={<TermsLabel />}
              />
              <FormControlLabel
                control={
                  <Checkbox defaultChecked {...register("rememberMe")} />
                }
                label={<div>{"Remember me"}</div>}
              />
            </RowWrapper>

            <RowWrapper>
              <Button type="submit">{"Create account!"}</Button>
            </RowWrapper>
          </FormContainer>
        </>
      </form>
    </>
  );
};

export default SignUpForm;
