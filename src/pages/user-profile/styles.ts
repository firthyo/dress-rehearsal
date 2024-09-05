import { styled } from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Sidebar = styled.div`
  width: 200px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT} - 40px);
  background-color: ${(props) => props.theme.colors.systemLight};
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 40px;
  max-width: 100%;
  width: 100px;
`;

export const InfoContainer = styled.div`
  flex: 1; /* This will make the typography container take up available space */
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  width: 100vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 100vw;
    height: calc(
      100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE}
    ); // Example: Adjust height for small devices
  }
`;
