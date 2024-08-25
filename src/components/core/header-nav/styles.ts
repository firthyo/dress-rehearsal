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
  max-height: 110px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
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

export const Content = styled.div`
  position: fixed;

  height: 100vh;
`;

export const LogoWrapper = styled.div`
  /* width: 100%; */
  height: 70px;
`;

export const LogoMobileWrapper = styled.div`
  /* width: 100%; */
  margin-top: 10px;
  height: 7px;
`;

interface NavbarLinksContainerProps {
  isOpen?: boolean;
}

export const NavbarLinksContainer = styled.div<NavbarLinksContainerProps>`
  display: flex;
  align-items: center;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  /* margin-left: 10px; */
  /* justify-content: center;
  align-items: center; */
`;
