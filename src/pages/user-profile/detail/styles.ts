import { styled } from "styled-components";

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
  width: 100%;
  text-align: left;
  padding: 16px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
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
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  min-height: 624px;
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
  width: 460px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
`;
