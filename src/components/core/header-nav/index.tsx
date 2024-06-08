import React, { useState } from "react";
import MainLogo from "assets/logo/MainLogo";
import Button from "components/core/button";
import Spacer from "components/core/spacer";
import Divider from "components/core/divider";
import { useAuth } from "context/AuthContext";
import ProfileMenu from "components/profile-menu";
import AuthenticationPage from "pages/authentication";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  LogoWrapper,
  NavWrapper,
  Navbar,
  NavbarLink,
  NavbarLinksContainer,
} from "./styles";
import { MenuIcon } from "assets/icons";

export const HeaderNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: "center", width: "100vw" }}>
      {/* Adjust width as needed */}
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Shop" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Gallery" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
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
            <MenuIcon size={32}/>
          </IconButton>

          {/* Navbar Links for larger screens */}
          <NavbarLinksContainer>
            <NavbarLink href="#">ABOUT US</NavbarLink>
            <NavbarLink href="/shop">SHOP</NavbarLink>
            <NavbarLink href="#">GALLERY</NavbarLink>
            <NavbarLink href="#">CONTACT</NavbarLink>
            <Spacer x={24} />
            <Divider marginHorizontal={4} />
            <Spacer x={24} />
            {isLoggedIn ? <ProfileMenu /> : <AuthenticationPage />}
          </NavbarLinksContainer>
        </NavWrapper>
      </Navbar>

      {/* Material-UI Drawer */}
      <Drawer
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
