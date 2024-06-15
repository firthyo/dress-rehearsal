import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  /* height: 100vh; */
  /* overflow-y: auto; */
  margin: 0px 32px;
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    /* Styles for screens smaller than 600px */
    height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE});
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    /* Styles for screens larger than or equal to 960px */
    margin: 0 56px;
  }
`;
