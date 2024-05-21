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

export const AuthenticationPage = () => {
  const { showModal, hideModal } = useModal();

  const handleOpenModal = () => {
    showModal(
      <PageWrapper>
        <IconWrapper>
          <button
            type="button"
            onClick={hideModal}
            style={{
              borderColor: "transparent",
              backgroundColor: "transparent",
            }}
          >
            <CloseIcon size={36} color="#6C4E39" />
          </button>
        </IconWrapper>
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
