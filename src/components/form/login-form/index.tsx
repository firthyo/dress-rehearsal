import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import GoogleIcon from "assets/icons/social/GoogleIcon";

import TextFieldForm from "components/core/text-field";
import Button from "components/core/button";
import Spacer from "components/core/spacer";

import DiviverWithText from "components/core/divider-with-text";

import { FormContainer, Link, RowWrapper, TextWrapper } from "../styles";
import { Typography } from "components/core/typography";
import AlertMessage from "components/core/AlertMessage";

import { LOGIN_USER_MUTATION } from "graphql/user/authMutation";
import { LoginFormType } from "../type";
import { useAuth } from "context/AuthContext";

const LoginForm = () => {
  const [loginError, setLoginError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const [login, { data, loading, error }] = useMutation(LOGIN_USER_MUTATION);
  console.log("this is loading fronm login", loading);
  const { loginAuth } = useAuth();

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const { email, password } = data;
      const response = await login({ variables: { email, password } });

      if (response.data && response.data.login.token) {
        const { token, user } = response.data.login;
        loginAuth(token, user);
        console.log("Login successful:", response.data);
        // Redirect user or perform other actions post-login
      } else {
        console.error("Login error: Invalid credentials");
        setLoginError(true);
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
          <Typography variant="h2" customColor={"#684F3B"}>
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
