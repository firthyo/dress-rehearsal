import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Visual = styled.div`
  width: calc(50% - ${STYLE_CONSTANTS.PAGE_HORIZONTAL_SPACE});
  height: calc(100% - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  display: flex;
  justify-content: center;
`;

export const Detail = styled.div`
  width: calc(40% - ${STYLE_CONSTANTS.PAGE_HORIZONTAL_SPACE});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
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
  height: calc(
    100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT}
  ); // Ensure this calculates to a positive value
`;
