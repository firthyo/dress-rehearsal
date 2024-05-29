import styled from "styled-components";

export const ColorButtons = styled.button`
  width: 24px; /* Fixed width */
  height: 24px; /* Fixed height */
  background-color: ${(props) =>
    props.color}; /* Background color passed via props */
  border-radius: 50%; /* Makes the button round */
  position: relative; /* Positioning context for shadow */
  border: none; /* No physical border */
  box-shadow: 0 0 0 4px ${(props) => props.color}, 0 0 0 4px white,
    0 0 0 8px none; /* No black border by default */
  transition: box-shadow 0.3s; /* Smooth transition for the shadow effect */
margin-right: 20px;
  &:not(.selected) {
    box-shadow: 0 0 0 4px ${(props) => props.color}, 0 0 0 4px white,
      0 0 0 8px none;
    /* Maintain no black border when not selected */
  }

  &.selected {
    box-shadow: 0 0 0 0px ${(props) => props.color}, 0 0 0 4px white,
      0 0 0 6px black; /* Black border appears only when selected */
  }
`;
