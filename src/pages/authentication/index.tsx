import React from "react";

import SignUpForm from "components/form/sign-up-form";
import Tabs from "components/core/tab";

import Divertimento from "assets/dress-rehearsal/divertimento-white.svg";
import Drlogobg from "assets/dress-rehearsal/dr-logo-bg.svg";
import Drbg from "assets/dress-rehearsal/Full-bg-dr.svg";

import { CenteredContent, Container, FormWrapper } from "./styles";
import LoginForm from "components/form/login-form";

export const AuthenticationPage = () => {
  const handleChangeActiveTab = (index: number) => {
    // setValue("activeTab", index);
  };
  return (
    <div>
      <Container>
        <CenteredContent backgroundImage={Drbg}>
          <img
            style={{ width: "80%" }}
            src={Divertimento}
            alt="divertimento-logo"
          />
        </CenteredContent>
        <FormWrapper>
          <Tabs
            background="FILLED"
            variant="grouped"
            active={0}
            onChange={handleChangeActiveTab}
            items={[
              {
                name: "Sign up",
                content: () => <SignUpForm />,
              },
              {
                name: "Login",
                content: () => <LoginForm />,
              },
            ]}
          />
        </FormWrapper>
      </Container>
    </div>
  );
};

export default AuthenticationPage;
