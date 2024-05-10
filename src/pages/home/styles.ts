import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  overflow-y: auto;
  position: relative;
  width: 100%;
`;
export const FirstSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  width: 100vw;
`;
