import Tabs from "components/core/tab";
import React, { useEffect, useState } from "react";
import SignUpForm from "../sign-up-form";
import LoginForm from "../login-form";
import VerifyEmailInfo from "pages/authentication/verifyEmailInfo";
import { useAuth } from "context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useRegisterUser } from "hooks/useRegisterUser";

export const FormContent = () => {
  const handleChangeActiveTab = (index: number) => {
    // setValue("activeTab", index);
  };
  const { registerUser, data, loading, error } = useRegisterUser();

  const [loadingInterval, setLoading] = useState(false);
  console.log("this is loading", loading, data);
  useEffect(() => {
    if (loading) {
      setLoading(true);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loadingInterval) {
    return <CircularProgress size={68} style={{ color: "#684F3B" }} />;
  }
  return data?.register.success ? (
    <VerifyEmailInfo />
  ) : (
    <Tabs
      background="FILLED"
      variant="grouped"
      active={0}
      onChange={handleChangeActiveTab}
      items={[
        {
          name: "Sign up",
          content: () => (
            <SignUpForm
              registerUser={registerUser}
              data={data}
              loading={loading}
              error={error}
            />
          ),
        },
        {
          name: "Login",
          content: () => <LoginForm />,
        },
      ]}
    />
  );
};

export default FormContent;
