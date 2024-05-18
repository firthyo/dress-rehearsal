import React, { useEffect, useState } from "react";

import SignUpForm from "components/form/sign-up-form";
import Tabs from "components/core/tab";

import Divertimento from "assets/dress-rehearsal/divertimento-white.svg";
import Drlogobg from "assets/dress-rehearsal/dr-logo-bg.svg";
import Drbg from "assets/dress-rehearsal/Dr-bg-light.svg";

import { CenteredContent, Container, FormWrapper, PageWrapper } from "./styles";
import LoginForm from "components/form/login-form";
import { useModal } from "context/ModalContext";
import Button from "components/core/button";
import PaletteIcon from "components/core/PaletteIcon";
import VerifyEmailInfo from "./verifyEmailInfo";
import { useRegisterUser } from "hooks/useRegisterUser";
import { useAuth } from "context/AuthContext";
import { CircularProgress } from "@mui/material";
import FormContent from "components/form/form-content";

export const AuthenticationPage = () => {
  const { showModal } = useModal();

  const handleOpenModal = () => {
    showModal(
      <PageWrapper>
        <Container>
          <CenteredContent backgroundImage={Drbg}>
            <img
              style={{ width: "80%" }}
              src={Divertimento}
              alt="divertimento-logo"
            />
          </CenteredContent>

          <FormWrapper>
            <FormContent />
          </FormWrapper>
        </Container>
      </PageWrapper>,
      {
        onAfterClose: () => {}, // Define this function if needed
        cancelCloseOnClick: true,
        confirmBeforeClose: true,
        noPadding: false,
        isPopup: false,
      }
    );
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
