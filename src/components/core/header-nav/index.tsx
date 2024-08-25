import React, { useEffect, useState } from "react";
import MainLogo from "assets/logo/MainLogo";
import Spacer from "components/core/spacer";
import Divider from "components/core/divider";
import { useAuth } from "context/AuthContext";
import ProfileMenu from "components/profile-menu";
import AuthenticationPage from "pages/authentication";
import { Box, Drawer, IconButton, List, Typography } from "@mui/material";
import {
  LogoMobileWrapper,
  LogoWrapper,
  MenuMobileWrapper,
  NavWrapper,
  Navbar,
  NavbarLink,
  NavbarLinksContainer,
} from "./styles";

import { MenuIcon } from "assets/icons";
import BadgeIndicator from "../badge-indicator";

export const HeaderNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Assuming your AuthContext initializes the state on mount
    // Set authChecked to true after the initial authentication check
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    // While authentication is being checked, show a loading indicator or null
    return null; // or a loading spinner if you prefer
  }
  const drawer = (
    <Box
      onClick={toggleDrawer}
      sx={{ textAlign: "left", width: "100vw", height: "100vh" }}
    >
      <LogoMobileWrapper>
        <NavbarLink href="/">
          <Spacer x={2} /> <MainLogo />
        </NavbarLink>
      </LogoMobileWrapper>
      {/* <Divider /> */}
      <Spacer x={24} />
      <List>
        <MenuMobileWrapper>
          <NavbarLink href="/about-us">ABOUT US</NavbarLink>
          <NavbarLink href="/shop">SHOP</NavbarLink>
          <NavbarLink href="#">GALLERY</NavbarLink>
          <NavbarLink href="#">CONTACT</NavbarLink>
        </MenuMobileWrapper>
      </List>
    </Box>
  );

  return (
    <>
      <Navbar>
        <NavWrapper>
          <LogoWrapper>
            <NavbarLink href="/">
              <MainLogo />
            </NavbarLink>
          </LogoWrapper>

          {/* Hamburger icon for small screens */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon size={32} />
          </IconButton>

          {/* Navbar Links for larger screens */}
          <NavbarLinksContainer>
            <Spacer x={100} />
            <NavbarLink href="/about-us">ABOUT US</NavbarLink>
            <NavbarLink href="/shop">SHOP</NavbarLink>
            <NavbarLink href="#">GALLERY</NavbarLink>
            <NavbarLink href="#">CONTACT</NavbarLink>
            {/* <Spacer x={24} />
            <Divider marginHorizontal={4} />
            <Spacer x={24} /> */}
          </NavbarLinksContainer>
          <NavbarLinksContainer>
            {isLoggedIn ? <ProfileMenu /> : <AuthenticationPage />}
            <Spacer x={12} />
            <BadgeIndicator></BadgeIndicator>
          </NavbarLinksContainer>
        </NavWrapper>
      </Navbar>

      {/* Material-UI Drawer */}
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", sm: "none" } }} // Only show on small screens
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default HeaderNav;
