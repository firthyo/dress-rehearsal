import React from "react";

import SignUpForm from "components/form/sign-up-form";
import Tabs from "components/tab";

import Divertimento from "assets/dress-rehearsal/Divertimento.svg";

import { CenteredContent, Container, FormWrapper } from "./styles";
import LoginForm from "components/form/login-form";

const Authentication = () => {
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
            active={1}
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

export default Authentication;
