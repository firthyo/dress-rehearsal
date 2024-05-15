import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  /* margin-top: ${STYLE_CONSTANTS.HEADER_HEIGHT}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
`;
