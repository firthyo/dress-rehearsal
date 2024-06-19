import styled from "styled-components";

export const ColorButtons = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: relative;
  border: none;
  box-shadow: 0 0 0 4px ${(props) => props.color}, 0 0 0 4px #fffaf1,
    0 0 0 8px none 0 0 55px rgba(0, 0, 0, 0.25); // Add a shadow for depth;
  transition: box-shadow 0.3s;
  margin-right: 20px;
  &:not(.selected) {
    box-shadow: 0 0 0 4px ${(props) => props.color}, 0 0 0 4px #fffaf1,
      0 0 0 8px none 0 0 100px rgba(0, 0, 0, 0.25); // Add a shadow for depth;
  }

  &.selected {
    box-shadow: 0 0 0 0px ${(props) => props.color}, 0 0 0 4px #fffaf1,
      0 0 0 6px black, 0 0 15px rgba(0, 0, 0, 0.25); // Add a shadow for depth;
  }
`;
