import styled from "styled-components";

// Wrapper for the entire footer
export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  height: 164px;

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    height: auto;
  }
`;

// Right Wrapper for content on the right
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: start;

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    order: 2; // Push to the bottom on smaller screens
    text-align: center;
  }
`;

// Left Wrapper for content on the left, such as social icons
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row; // Adjusted from column to row for better alignment of icons
  justify-content: flex-start;
  align-self: center;
  text-align: end;

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    order: 1; // Pull to the top on smaller screens
    width: 100%;
    justify-content: center;
    margin-bottom: 20px; // Add some space between the content blocks
  }
`;
