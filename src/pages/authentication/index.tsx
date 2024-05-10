import React from "react";

import SignUpForm from "components/form/sign-up-form";
import Tabs from "components/tab";

import Divertimento from "assets/dress-rehearsal/Divertimento.svg";

import { CenteredContent, Container, FormWrapper } from "./styles";
import LoginForm from "components/form/login-form";

export const AuthenticationPage = () => {
  const handleChangeActiveTab = (index: number) => {
    // setValue("activeTab", index);
  };
  return (
    <div>
      <Container>
        <CenteredContent>
          <img src={Divertimento} alt="divertimento-logo" />
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
