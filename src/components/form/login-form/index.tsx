import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

import GoogleIcon from "assets/icons/social/GoogleIcon";

import TextFieldForm from "components/text-field";
import Button from "components/button";
import Spacer from "components/spacer";

import DiviverWithText from "components/divider-with-text";

import { FormContainer, Link, RowWrapper, TextWrapper } from "./styles";
import { Typography } from "components/typography";
import { useMutation } from "@apollo/client";
import { LOGIN_USER_MUTATION } from "graphql/user/authMutation";
import { LoginFormType } from "../sign-up-form/type";
import AlertMessage from "components/AlertMessage";

const LoginForm = () => {
  const [loginError, setLoginError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const [login, { data, loading, error }] = useMutation(LOGIN_USER_MUTATION);

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const { email, password } = data;
      const response = await login({ variables: { email, password } });

      if (response.data && response.data.errors) {
        const errorMessages = response.data.errors.map(
          (error: any) => error.message
        );
        console.error("Login error:", errorMessages);
        setLoginError(true);
      } else {
        console.log("Login successful:", response.data);
      }
    } catch (err) {
      console.error("Login error:", err);
      setLoginError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!loginError && <Spacer y={24} />}

      <TextWrapper>
        {loginError ? (
          <AlertMessage
            severity="error"
            color="error"
            text={
              <>
                The email address and password you entered doesn't match our
                records. Please try again or reset your password.
              </>
            }
          />
        ) : (
          <Typography variant="titles" customColor={"#684F3B"}>
            Welcome back!
          </Typography>
        )}
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
          {/* <FormControlLabel
            control={<Checkbox defaultChecked {...register("rememberMe")} />}
            label={<div>{"Remember me"}</div>}
          /> */}
        </RowWrapper>

        <RowWrapper>
          <Button type="submit">{"Login"}</Button>
        </RowWrapper>
      </FormContainer>
    </form>
  );
};

export default LoginForm;