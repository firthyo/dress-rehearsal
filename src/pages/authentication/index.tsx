import React from "react";

import Divertimento from "assets/dress-rehearsal/divertimento-white.svg";
import Drbg from "assets/dress-rehearsal/Dr-bg-light.svg";

import { CenteredContent, Container, FormWrapper } from "./styles";
import { useModal } from "context/ModalContext";

import FormContent from "components/form/form-container";
import { UserCircle } from "assets/icons";
import { CustomizedDialogs } from "components/core";
import { useAuth } from "context/AuthContext";

export const AuthenticationPage = () => {
  const { showModal } = useModal();
  const { setAuthStage } = useAuth();

  const handleOpenModal = () => {
    showModal(
      <CustomizedDialogs
        customClose={() => setAuthStage("LOGIN")}
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
      <button
        onClick={handleOpenModal}
        type="button"
        style={{
          padding: "8px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
      >
        <UserCircle></UserCircle>
      </button>
    </div>
  );
};

export default AuthenticationPage;
