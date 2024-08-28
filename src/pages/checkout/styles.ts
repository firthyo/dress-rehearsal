import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";
type LinkProps = {
  linkColor?: string;
};
export const Line = styled.div`
  border-top: solid 1px #ededee;
`;

export const Wrapper = styled.div`
  /* margin: 0px 32px; */

  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    /* Styles for screens smaller than 600px */
    height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE});
  }
  background-color: white;
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    /* Styles for screens larger than or equal to 960px */
    /* margin: 0 56px; */
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Form = styled.div`
  flex: 3; /* Takes up 60% of the width */
  background-color: #ffffff;
  padding: 20px 0px 20px 80px;
  box-sizing: border-box;
  text-align: left;
`;

export const Overview = styled.div`
  flex: 2; /* Takes up 40% of the width */
  background-color: #ffffff;
  padding: 20px 80px 20px 40px;
  box-sizing: border-box;
  overflow-y: auto; /* Ensure this section can scroll if content overflows */
`;

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.linkColor || props.theme.colors.info};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
`;

export const RowWrapperMultipleCol = styled.div`
  display: flex;
  box-sizing: border-box;
  /* padding: 10px; */
`;
