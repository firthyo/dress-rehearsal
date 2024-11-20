import Tabs from "components/core/tabs";
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
import { Button } from "components/core";

export const FormContent = () => {
  const getActiveTab = useCallback(() => {
    return process.env?.REACT_APP_GRAPHQL_URL?.includes("fortunelife") ? 1 : 0;
  }, []);
  const [activeTab, setActiveTab] = useState(getActiveTab());
  const { authStage, setAuthStage } = useAuth();
  // const [showVerifyEmail, setShowVerifyEmail] = useState<boolean>(false);

  const [isUserForgotPassword, setIsUserForgotPassword] =
    useState<boolean>(false);

  const handleForgotPasswordChange = (newValue: boolean) => {
    setIsUserForgotPassword(newValue);
  };

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
    const loading = loginLoading || registerLoading || forgotPasswordLoading;

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
  }, [registerLoading, loginLoading, forgotPasswordLoading]);

  useEffect(() => {
    if (authStage === "LOGIN") {
      setActiveTab(1);
    }
  }, [authStage]);
  console.log("This is authStage", authStage);
  // if (registerData?.register.success) {
  //   setAuthStage("VERIFY_EMAIL");
  //   setShowVerifyEmail(true);
  // } else if (loginData?.login.token) {
  //   setAuthStage("LOGIN");
  // }
  useEffect(() => {
    const handleStageChange = () => {
      if (registerData?.register.success) {
        setAuthStage("VERIFY_EMAIL");
        // onVerifyEmailSuccess(true);
      } else if (loginData?.login.token) {
        setAuthStage("LOGIN");
      }
    };

    handleStageChange();
  }, [registerData, loginData]);

  // if (loadingInterval) {
  //   return <CircularProgress size={68} style={{ color: "#684F3B" }} />;
  // }
  const handleBackToMain = () => {
    setAuthStage("MAIN");
    setActiveTab(1);
    // onVerifyEmailSuccess(false);
  };

  const renderAuthComponent = () => {
    switch (authStage) {
      case "RESET_PASSWORD":
        return <ResetPasswordInfo email={"firth.maneesuksri@gmail.com"} />;
      case "VERIFY_EMAIL":
        return (
          <>
            {loadingInterval ? (
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <CircularProgress size={68} style={{ color: "#684F3B" }} />
              </div>
            ) : (
              <>
                <VerifyEmailInfo email={"example@gmail.com"} />
                {/* <Button onClick={handleBackToMain}>Back to Login</Button> */}
              </>
            )}
          </>
        );
      case "FORGOT_PASSWORD":
        return (
          <ForgotPasswordForm
            forgotPassword={forgotPassword}
            loading={forgotPasswordLoading}
            error={forgotPasswordError}
          />
        );
      case "LOGIN":
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
