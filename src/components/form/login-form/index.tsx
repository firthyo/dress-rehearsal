import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { ApolloError } from "@apollo/client";
import { useAuth } from "context/AuthContext";
import GoogleIcon from "assets/icons/social/GoogleIcon";

import {
  Button,
  Spacer,
  DividerWithText,
  Typography,
  AlertMessage,
  TextFieldForm,
} from "components/core";

import { FormContainer, Link, RowWrapper, TextWrapper } from "../styles";

import { LoginFormType } from "../type";

interface LoginFormProps {
  loginUser: (options: {
    variables: {
      email: string;
      password: string;
    };
  }) => Promise<any>;
  loading: boolean;
  data?: any;
  error?: ApolloError;
  setIsUserForgotPassword: (isUserForgotPassword: boolean) => void;
}
const LoginForm: React.FC<LoginFormProps> = ({
  loginUser,
  loading,
  data,
  error,
  setIsUserForgotPassword,
}) => {
  const [loginError, setLoginError] = useState<boolean>(false);
  console.log("this is data", data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  // const [login, { data, loading, error }] = useMutation(LOGIN_USER_MUTATION);
  const { loginAuth, authStage, setAuthStage } = useAuth();

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const { email, password } = data;
      const response = await loginUser({ variables: { email, password } });

      if (response.data && response.data.login.token) {
        const { token, user } = response.data.login;
        loginAuth(token, user);
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

  const toggleForgotPassword = () => {
    setIsUserForgotPassword(true);
    setAuthStage("FORGOT_PASSWORD");
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
          <Typography variant="h4" customColor={"#684F3B"}>
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
        <DividerWithText label={"or"} />
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
          <Link onClick={toggleForgotPassword} linkColor="#6D4E39">
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
