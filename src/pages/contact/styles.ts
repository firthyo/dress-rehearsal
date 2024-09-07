import styled from "styled-components";
import { STYLE_CONSTANTS } from "styles/style-constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Ensure both sections stretch to the same height */
  gap: 40px; /* Add spacing between LeftSection and RightSection */
  /* height: 100%; */
  width: calc(
    100% - 360px
  ); /* Subtracting 200px (100px on each side) from the full width */
  margin: 10px 180px;

  @media (max-width: 1024px) {
    width: calc(100% - 40px); /* Reduce the margins for smaller screens */
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the sections vertically on small screens */
    width: 100%; /* Full width for very small screens */
    margin: 0;
    gap: 20px; /* Adjust the gap for small screens if needed */
  }
`;

export const HeaderWrapper = styled.div`
  width: calc(
    100% - 360px
  ); /* Subtracting 200px (100px on each side) from the full width */
  margin: 0px 200px;
  text-align: left;
`;

export const LeftSection = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  margin: 20px 0px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
`;

export const FAQSection = styled.div`
  width: 40%;
  margin: 20px 0px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
`;

export const ContactForm = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  flex-grow: 1;
`;

export const ChatBox = styled.div`
  background-color: #fff;
  padding: 20px;

  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT});
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    height: calc(100vh - ${STYLE_CONSTANTS.HEADER_HEIGHT_MOBILE});
  }

  position: relative;
  width: 100%;

  overflow-y: auto;
`;
