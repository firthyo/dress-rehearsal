import { styled } from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const TrackOrdersWrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  margin-right: 20px;
`;

export const TrackOrdersContainer = styled.div`
  display: flex;
  flex-direction: row; /* Ensures items are aligned in a row */
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100%;
  text-align: left;
  padding: 32px;

  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.systemLight};
  border-radius: 12px;
  flex-wrap: wrap; /* Allows wrapping to prevent overflow */
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Adds some space between the text and images */
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const StyledInfoContainer = styled.div`
  flex: 3;

  display: flex;
  flex-direction: column;
`;

export const TrackingBoxWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.systemLight};

  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  min-height: 350px;
  width: 100%;
`;
export const SInlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap; /* This ensures that the items will wrap onto the next line if they don't fit */
  width: 100%;
`;

export const BoxWrapper = styled.div`
  padding: 32px;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  /* min-width: 460px; */
  width: 100%;
  /* display: flex; */
  flex-wrap: wrap;
  /* width: 460px; */
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

export const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;

  gap: 20px;

  justify-content: space-between; /* Distribute space evenly between the boxes */
  align-items: stretch; /* Ensure both boxes are equal in height */

  flex-wrap: wrap; /* Allow the boxes to wrap to the next line if necessary */

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-direction: column; /* Stack boxes vertically on smaller screens */
    width: 100vw;
    height: calc(
      100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE}
    ); // Adjust height for small devices
  }
`;

export const FormWapper = styled.div`
  border-radius: 8px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  min-width: 460px;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.systemLight};
  box-sizing: border-box;
`;

export const SecondBox = styled.div`
  border-radius: 8px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  min-width: 460px;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.systemLight};
  box-sizing: border-box;
`;

export const Line = styled.div`
  border-top: solid 2px ${(props) => props.theme.colors.ternary};
`;

export const ProfileBox = styled.div`
  border-radius: 8px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 32px;
  width: 100%;
  min-width: 460px;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.systemLight};
  box-sizing: border-box;
`;

export const NoContent = styled.div`
  /* for Page under construction */
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  /* height: 100%; */
`;

export const ProfileInfoWrapper = styled.div`
  flex: 0 0 50%;
  text-align: left;
`;

export const NoDetail = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  align-items: center;
  height: 100%;
`;
