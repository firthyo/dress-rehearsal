import DressRehearsalLogoShadow from "assets/dress-rehearsal/DressRehearsalLogoShadow";
import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

type MobileWrapperProps = {
  backgroundImage: string;
};

export const Wrapper = styled.div`
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    height: calc(
      100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE}
    ); // Example: Adjust height for small devices
  }
  overflow-y: auto;
  position: relative;
  width: 100%;
`;
export const FirstSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    height: calc(
      100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE}
    ); // Example: Adjust height for small devices
  }
  width: 100vw;
`;

export const CollectionWrapper = styled.div`
  text-align: left;
  padding: 0px 116px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div``;

export const MobileWrapper = styled.div<MobileWrapperProps>`
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 50%;
  width: 100%;
  flex-basis: 50%;
  overflow: hidden;
`;

export const CenteredLogo = styled(DressRehearsalLogoShadow)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; // Ensures it overlays the PracticeEtiquette component
`;

export const CollectionWrapperMoblie = styled.div`
  text-align: left;
  padding: 16px 24px;
`;

export const TextWrapper = styled.div`
  text-align: left;
  padding: 16px 24px;
`;
