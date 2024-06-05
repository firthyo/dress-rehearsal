import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  margin: 0px 56px;
  display: flex;
`;

export const Visual = styled.div`
  width: 50%;
  height: calc(100% - ${STYLE_CONSTANTS.HEADER_HEIGHT});
`;

export const Detail = styled.div`
  width: 50%;
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

  width: 100%;
  height: calc(
    100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT}
  ); // Ensure this calculates to a positive value
`;
