import styled, { css } from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";
import { useTheme } from "@mui/material/styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Visual = styled.div`
  width: calc(50% - ${STYLE_CONSTANTS.PAGE_HORIZONTAL_SPACE});
  height: calc(100% - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  display: flex;
  justify-content: center;
  margin-right: 5%;
`;

export const Detail = styled.div`
  /* width: calc(40% - ${STYLE_CONSTANTS.PAGE_HORIZONTAL_SPACE}); */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  ${({ theme }) => css`
    width: calc(40% - ${STYLE_CONSTANTS.PAGE_HORIZONTAL_SPACE});

    @media (max-width: ${theme.breakpoints.values.md}px) {
      width: 100%;
    }

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      width: 100%;
    }
  `}
`;

export const SelectionContainer = styled.div``;

export const TitleWrapper = styled.div`
  border-bottom: 2px solid #d6d6d6;
  margin-top: 16px;
  margin-bottom: 24px;
  width: fit-content;
`;

export const Container = styled.div`
  overflow-y: auto;
  /* margin: 0px 56px; */
  width: 100%;
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    /* Styles for screens smaller than 600px */
    height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE});
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE});
    margin: 0 56px;
  }
`;
