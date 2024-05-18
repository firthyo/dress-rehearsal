import React, { useState } from "react";

import MainLogo from "assets/logo/MainLogo";
import Button from "components/core/button";
import Spacer from "components/core/spacer";
import Divider from "components/core/divider";
import { useAuth } from "context/AuthContext";

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
import { Avatar } from "@mui/material";

export const HeaderNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("Modal closed!");
  };
  const { isLoggedIn, user } = useAuth(); // Use the authentication context

  const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };
  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
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
            {isLoggedIn ? (
              <NavbarLink>
                {/* Assuming you have a way to get the user's avatar */}
                <Avatar
                  {...stringAvatar(
                    (user && `${user?.firstName} ${user?.lastName}`) ||
                      "Dress Rehearsal"
                  )}
                />
              </NavbarLink>
            ) : (
              <NavbarLink>
                <AuthenticationPage></AuthenticationPage>
              </NavbarLink>
            )}
          </NavbarLinksContainer>
        </NavWrapper>

        {/* Add other navbar content, e.g., logo */}
      </Navbar>
    </>
  );
};

export default HeaderNav;
