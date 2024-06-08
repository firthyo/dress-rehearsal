import styled from "styled-components";

type NavbarLinkProps = {
  noPadding?: boolean;
};

export const Navbar = styled.nav`
  background-color: ${(props) => props.theme.colors.ternary};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  max-height: 102px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  @media (max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
    padding: 8px 16px; // Reduced padding for 'sm' and below
  }
`;

// Styled navbar links
export const NavbarLink = styled.a<NavbarLinkProps>`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  text-align: center;
  padding: ${({ noPadding }) => (noPadding ? "0px" : "14px")};

  text-decoration: none;
  width: fit-content;
`;

// Styled page content
export const Content = styled.div`
  position: fixed;

  height: 100vh;
  /* padding-top: 20px; Add padding-top equal to the height of the navbar */
`;

export const LogoWrapper = styled.div`
  /* width: 100%; */
  height: 70px;
`;

interface NavbarLinksContainerProps {
  isOpen?: boolean;
}

export const NavbarLinksContainer = styled.div<NavbarLinksContainerProps>`
  display: flex;
  align-items: center;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  @media (min-width: 768px) {
    display: flex; // Always visible on larger screens
  }
`;
