import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

type CenteredContentProps = {
  backgroundImage: string;
};

export const Wrapper = styled.div`
  margin-top: ${STYLE_CONSTANTS.HEADER_HEIGHT};
`;
export const FormWrapper = styled.div`
  border-radius: 20px;

  padding: 0px 36px;
  width: 50%;
  min-height: 674px;
  margin: 48px 0px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: auto;
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
  flex-grow: 1;
  width: auto;
  flex-basis: 50%;
  overflow: hidden;
  /* border-radius: 20px 0px 0px 20px; */
`;
