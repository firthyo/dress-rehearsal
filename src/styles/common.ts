import styled, { css } from "styled-components";
import { STYLE_CONSTANTS } from "./style-constants";

export const AppContainer = styled.div`
  text-align: center;
  margin-top: 110px;
  overflow-y: auto;


  @media (max-width: 600px) {
    margin-top: 86px;
  }
`;

export const AppHeader = styled.header`
  background-color: #fffaf1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Wrapper = styled.div`
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
