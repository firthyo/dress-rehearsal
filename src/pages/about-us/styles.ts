import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Wrapper = styled.div`
  overflow-y: scroll;

  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  div {
    text-align: left;
  }
`;

export const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 160px;
  padding: 20px 0px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const OurStory = styled.div`
  width: 40%; /* 40% of the width */

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  text-align: center;
  align-items: center;
  box-sizing: border-box;

`;

export const ImageWrapper = styled.div`
  width: 60%;

  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GridItem = styled.div`
  padding: 20px 0px;
  text-align: center;
`;

export const WhatWeStandFor = styled.div`
  align-items: start;

  max-width: 1200px;

  margin: 0 auto;
`;

export const Subscribe = styled.div`
  background-color: ${(props) => props.theme.colors.ternary};
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
`;

export const Title = styled.h1`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #5a3e2b;
  font-family: "IBM Plex Serif", serif;

  &::after {
    content: "";
    display: block;
    width: 25%; /* Adjust as needed */
    height: 3px;
    background-color: #5a3e2b;
    margin: 10px auto 0; /* Center the line */
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 460px;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 10px;
  max-width: 400px;
  padding: 0 20px;
  box-sizing: border-box;
`;
