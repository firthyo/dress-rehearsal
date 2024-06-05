import styled from "styled-components";

export const SizeButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  margin: 0px 12px 0px 0px;
  background-color: ${(props) => (props.isActive ? "#D3D3D3" : "#F5F5F5")};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d3d3d3;
  }
`;
