import React, { useState } from "react";

import MainLogo from "assets/logo/MainLogo";
import Button from "components/core/button";
import Spacer from "components/core/spacer";
import Divider from "components/core/divider";

import {
  LogoWrapper,
  NavWrapper,
  Navbar,
  NavbarLink,
  NavbarLinksContainer,
} from "./styles";
import Modal from "components/core/modal";
import SignUpForm from "components/form/sign-up-form";
import AuthenticationPage from "pages/authentication";

export const HeaderNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("Modal closed!");
  };
  return (
    <>
      <Navbar>
        <NavWrapper>
          <LogoWrapper>
            <NavbarLink href="/">
              <MainLogo />
            </NavbarLink>
          </LogoWrapper>

          <NavbarLinksContainer>
            <NavbarLink href="#">ABOUT US</NavbarLink>
            <NavbarLink href="#">SHOP</NavbarLink>
            <NavbarLink href="#">GALLERY</NavbarLink>
            <NavbarLink href="#">CONTACT</NavbarLink>
            <Spacer x={32} />
            <Divider marginHorizontal={4}></Divider>
            <Spacer x={32} />
            <NavbarLink>
              <Button onClick={handleOpenModal}>Sign up</Button>
            </NavbarLink>
          </NavbarLinksContainer>
        </NavWrapper>
        <div>
          <button onClick={handleOpenModal}>Open Modal</button>
          {isModalOpen && (
            <Modal
              content={
                <>
                  <AuthenticationPage></AuthenticationPage>
                </>
              }
              onAfterClose={handleCloseModal}
              cancelCloseOnClick={true}
              confirmBeforeClose={true}
              noPadding={false}
              isPopup={false}
            />
          )}
        </div>
        {/* Add other navbar content, e.g., logo */}
      </Navbar>
    </>
  );
};

export default HeaderNav;
