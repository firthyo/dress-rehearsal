import Tabs from "components/core/tab";
import React, { useCallback, useEffect, useState } from "react";
import SignUpForm from "../sign-up-form";
import LoginForm from "../login-form";

import { useAuth } from "context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useRegisterUser } from "hooks/useRegisterUser";
import VerifyEmailInfo from "components/sent-email-info/VerifyEmailInfo";
import { useModal } from "context/ModalContext";
import ResetPasswordInfo from "components/sent-email-info/ResetPasswordInfo";
import ForgotPasswordForm from "../forgot-password-form";

export const FormContent = () => {
  const getActiveTab = useCallback(() => {
    return process.env?.REACT_APP_GRAPHQL_URL?.includes("fortunelife") ? 1 : 0;
  }, []);
  const [activeTab, setActiveTab] = useState(getActiveTab());
  const { authStage, setAuthStage } = useAuth();
  const [isUserForgotPassword, setIsUserForgotPassword] =
    useState<boolean>(false);

  const handleForgotPasswordChange = (newValue: boolean) => {
    setIsUserForgotPassword(newValue);
  };
  const { hideModal } = useModal();

  const {
    loginUser,
    loginData,
    loginLoading,
    loginError,
    registerUser,
    registerData,
    registerLoading,
    registerError,
    forgotPassword,
    forgotPasswordData,
    forgotPasswordLoading,
    forgotPasswordError,
  } = useRegisterUser();

  const [loadingInterval, setLoading] = useState(false);
  useEffect(() => {
    const loading = loginLoading || registerLoading;

    if (loading) {
      setLoading(true);
    }

    const timer = setTimeout(() => {
      setLoading(false);
      // if (loginData?.login.token) {
      //   hideModal();
      // }
    }, 1500);

    return () => clearTimeout(timer);
  }, [registerLoading, loginLoading]);

  // if (registerData?.register.success) {
  //   setAuthStage("VERIFY_EMAIL");
  // } else if (loginData?.login.token) {
  //   setAuthStage("LOGIN");
  // }
  if (loadingInterval) {
    return <CircularProgress size={68} style={{ color: "#684F3B" }} />;
  }

  const renderAuthComponent = () => {
    switch (authStage) {
      case "RESET_PASSWORD":
        return <ResetPasswordInfo email={"firth.maneesuksri@gmail.com"} />;
      case "VERIFY_EMAIL":
        return <VerifyEmailInfo email={"firth.maneesuksri@gmail.com"} />;
      case "FORGOT_PASSWORD":
        return (
          <ForgotPasswordForm
            forgotPassword={forgotPassword}
            loading={forgotPasswordLoading}
            error={forgotPasswordError}
          />
        );
      default:
        return (
          <Tabs
            background="FILLED"
            variant="grouped"
            active={activeTab}
            onChange={(index) => setActiveTab(index)}
            items={[
              {
                name: "Sign Up",
                content: () => (
                  <SignUpForm
                    registerUser={registerUser}
                    data={registerData}
                    loading={registerLoading}
                    error={registerError}
                  />
                ),
              },
              {
                name: "Login",
                content: () => (
                  <LoginForm
                    loginUser={loginUser}
                    data={loginData}
                    loading={loginLoading}
                    error={loginError}
                    setIsUserForgotPassword={handleForgotPasswordChange}
                  />
                ),
              },
            ]}
          />
        );
    }
  };

  return renderAuthComponent();
};

export default FormContent;
