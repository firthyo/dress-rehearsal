import React from "react";

import SignUpForm from "components/form/sign-up-form";
import Tabs from "components/core/tab";

import Divertimento from "assets/dress-rehearsal/divertimento-white.svg";
import Drlogobg from "assets/dress-rehearsal/dr-logo-bg.svg";
import Drbg from "assets/dress-rehearsal/Dr-bg-light.svg";

import { CenteredContent, Container, FormWrapper } from "./styles";
import LoginForm from "components/form/login-form";
import { useModal } from "context/ModalContext";
import Button from "components/core/button";

export const AuthenticationPage = () => {
  const { showModal, hideModal } = useModal();
  const handleOpenModal = () => {
    showModal(
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
      </div>,
      {
        onAfterClose: () => {}, // Define this function if needed
        cancelCloseOnClick: true,
        confirmBeforeClose: true,
        noPadding: false,
        isPopup: false,
      }
    );
  };

  const handleChangeActiveTab = (index: number) => {
    // setValue("activeTab", index);
  };
  return (
    <div>
      <Button onClick={handleOpenModal} type="button">
        Sign up
      </Button>
    </div>
  );
};

export default AuthenticationPage;
