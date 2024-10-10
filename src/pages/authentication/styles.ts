import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

type CenteredContentProps = {
  backgroundImage: string;
};

type LinkProps = {
  linkColor?: string;
};

export const Wrapper = styled.div`
  margin-top: ${STYLE_CONSTANTS.HEADER_HEIGHT};
`;
export const FormWrapper = styled.div`
  border-radius: 20px;

  padding: 0px 36px;
  width: 50vw;
  min-height: 674px;
  height: 100%;
  margin: 48px 0px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 1332px;
  width: 100%;
`;

export const CenteredContent = styled.div<CenteredContentProps>`
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex: 1 0 50%;
  width: 100%;
  flex-basis: 50%;
  overflow: hidden;
  /* border-radius: 20px 0px 0px 20px; */
`;

export const VerifyEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.linkColor || props.theme.colors.info};
  text-decoration: none;
  text-decoration: underline;
  margin-left: 5px;
`;

export const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 170px;
  /* background-color: #6c4e3930;
  border-radius: 50%;
  width: 48px;
  height: 48px; */
`;
