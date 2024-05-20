import { useMutation } from "@apollo/client";
import {
  FORGOT_PASSWORD_MUTATION,
  LOGIN_USER_MUTATION,
  REGISTER_USER_MUTATION,
} from "graphql/user/authMutation";

type LoginVariables = {
  email: string;
  password: string;
};

type LoginResponse = {
  login: {
    token: string;
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
};

type SignUpVariables = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
};

type SignUpResponse = {
  register: {
    success: boolean;
    message?: string;
  };
};

type ForgotPasswordVariables = {
  email: string;
};

type ForgotPasswordResponse = {
  forgotPassword: {
    success: boolean;
    message: string;
  };
};

export const useRegisterUser = () => {
  const [loginUser, loginResult] = useMutation<LoginResponse, LoginVariables>(
    LOGIN_USER_MUTATION
  );

  const [registerMutation, registerResult] = useMutation<
    SignUpResponse,
    SignUpVariables
  >(REGISTER_USER_MUTATION);

  const [forgotPassword, forgotPasswordResult] = useMutation<
    ForgotPasswordResponse,
    ForgotPasswordVariables
  >(FORGOT_PASSWORD_MUTATION);
  const registerUser = async (variables: SignUpVariables): Promise<any> => {
    return registerMutation({ variables })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };

  return {
    loginUser,
    loginData: loginResult.data,
    loginLoading: loginResult.loading,
    loginError: loginResult.error,
    registerUser,
    registerData: registerResult.data,
    registerLoading: registerResult.loading,
    registerError: registerResult.error,
    forgotPassword,
    forgotPasswordData: forgotPasswordResult.data,
    forgotPasswordLoading: forgotPasswordResult.loading,
    forgotPasswordError: forgotPasswordResult.error,
  };
};
