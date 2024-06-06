import styled from "styled-components";

export const ColorButtons = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: relative;
  border: none;
  box-shadow: 0 0 0 4px ${(props) => props.color}, 0 0 0 4px #fffaf1,
    0 0 0 8px none;
  transition: box-shadow 0.3s;
  margin-right: 20px;
  &:not(.selected) {
    box-shadow: 0 0 0 4px ${(props) => props.color}, 0 0 0 4px #fffaf1,
      0 0 0 8px none;
  }

  &.selected {
    box-shadow: 0 0 0 0px ${(props) => props.color}, 0 0 0 4px #fffaf1,
      0 0 0 6px black;
  }
`;
