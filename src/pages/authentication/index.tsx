import React from "react";

import Divertimento from "assets/dress-rehearsal/divertimento-white.svg";
import Drbg from "assets/dress-rehearsal/Dr-bg-light.svg";

import {
  CenteredContent,
  Container,
  FormWrapper,
  IconWrapper,
  PageWrapper,
} from "./styles";
import { useModal } from "context/ModalContext";
import Button from "components/core/button";

import FormContent from "components/form/form-container";
import { CloseIcon } from "assets/icons";
import { CustomizedDialogs } from "components/core";

export const AuthenticationPage = () => {
  const { showModal } = useModal();

  const handleOpenModal = () => {
    showModal(
      <CustomizedDialogs
        body={
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
        }
      />
    );
  };

  return (
    <div>
      <Button onClick={handleOpenModal} type="button" borderRadius="none">
        Sign up
      </Button>
    </div>
  );
};

export default AuthenticationPage;
