import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const TabStyle = styled.div<{ isActive: boolean }>`
  padding: 10px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#000" : "#6b6b6b")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  border-left: ${({ isActive }) => (isActive ? "4px solid #2d2d2d" : "none")};
  padding-left: ${({ isActive }) => (isActive ? "6px" : "10px")};
  display: flex;
  align-items: center;

  /* background-color: ${(props) => (props.isActive ? "#1a73e8" : "#5f6368")}; */
  color: ${(props) => (props.isActive ? "#1a73e8" : "#5f6368")};

  /* &:hover {
    background-color: #f0f0f0;
  } */
`;
