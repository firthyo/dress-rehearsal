import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  margin-top: ${STYLE_CONSTANTS.HEADER_HEIGHT};
`;
export const FormWrapper = styled.div`
  border-radius: 20px;
  background: rgba(237, 227, 218, 0.44);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 48px;
  width: 50%; // Set width to 50%
  max-width: 488px;  // Set maximum width to 688px

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between; // Adjusts alignment to keep children separated

  /* justify-content: space-around; */
  align-items: center;
  height: calc(100vh - 120px);
  padding: 0px 56px;
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; // Set width to 50%
  flex-shrink: 0; // Prevents the container from shrinking
  flex-grow: 0; // Prevents the container from growing
  height: 100vh; /* Adjust the height as necessary */
`;
