import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const TitleWrapper = styled.div`
  display: flex;
  text-align: start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin: 30px 24px 0px 24px;
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

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;
