import React from "react";

import MainLogo from "assets/logo/MainLogo";
import Button from "components/button";
import Spacer from "components/spacer";
import Divider from "components/divider";

import {
  LogoWrapper,
  NavWrapper,
  Navbar,
  NavbarLink,
  NavbarLinksContainer,
} from "./styles";

export const HeaderNav = () => {
  return (
    <>
      <Navbar>
        {/* <MainLogo /> */}
        <NavWrapper>
          <LogoWrapper>
            <MainLogo />
          </LogoWrapper>

          <NavbarLinksContainer>
            <NavbarLink href="#">ABOUT US</NavbarLink>
            <NavbarLink href="#">SHOP</NavbarLink>
            <NavbarLink href="#">GALLERY</NavbarLink>
            <NavbarLink href="#">CONTACT</NavbarLink>
            <Spacer x={32} />
            <Divider marginHorizontal={4}></Divider>
            <Spacer x={32} />
            <NavbarLink href="/sign-up">
              <Button>Sign up</Button>
            </NavbarLink>

            {/* Add more NavbarLinks as needed */}
          </NavbarLinksContainer>
        </NavWrapper>

        {/* Add other navbar content, e.g., logo */}
      </Navbar>
    </>
  );
};

export default HeaderNav;
