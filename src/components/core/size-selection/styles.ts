import styled from "styled-components";

export const SizeButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  margin: 0px 12px 0px 0px;
  /* background-color: ${(props) =>
    props.isActive ? "#6D4E39" : "#F5F5F5"}; */
  color: #000;

  border: ${(props) =>
    props.isActive ? "2px solid #000" : "2px solid #ededee;"};

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #d3d3d3; */
  }
`;
