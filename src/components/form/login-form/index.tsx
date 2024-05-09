import React from "react";

import { useForm } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

import GoogleIcon from "assets/icons/social/GoogleIcon";

import TextFieldForm from "components/text-field";
import Button from "components/button";
import Spacer from "components/spacer";

import DiviverWithText from "components/divider-with-text";

import { FormContainer, Link, RowWrapper, TextWrapper } from "./styles";
import { Typography } from "components/typography";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("this is data", data); // You can replace this with a call to your backend API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Spacer y={24} />
      <TextWrapper>
        <Typography variant="titles" customColor={"#684F3B"}>
          Welcome back!
        </Typography>
      </TextWrapper>
      <Spacer y={24} />
      <FormContainer>
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
          <Link href="/terms-of-service" linkColor="#6D4E39">
            Forgot password
          </Link>
          <FormControlLabel
            control={<Checkbox defaultChecked {...register("rememberMe")} />}
            label={<div>{"Remember me"}</div>}
          />
        </RowWrapper>

        <RowWrapper>
          <Button type="submit">{"Login"}</Button>
        </RowWrapper>
      </FormContainer>
    </form>
  );
};

export default LoginForm;
