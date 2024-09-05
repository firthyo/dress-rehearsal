import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* background-color: white; */
`;

export const TabStyle = styled.div<{ isActive: boolean }>`
  padding: 10px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#000" : "#6b6b6b")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  /* border-left: ${({ isActive }) =>
    isActive ? "4px solid #2d2d2d" : "none"}; */
  padding-left: ${({ isActive }) => (isActive ? "6px" : "10px")};
  display: flex;
  width: 100%;
  align-items: center;

  background-color: ${(props) => (props.isActive ? "#DCC9BC" : "")};
  color: ${(props) => (props.isActive ? "#6D4E39" : "#5f6368")};
  border-radius: ${(props) => (props.isActive ? "8px" : "0px")};

  /* &:hover {
    background-color: #f0f0f0;
  } */
`;

export const TabIndicator = styled.div<{ isActive: boolean }>`
  border-left: ${({ isActive }) => (isActive ? "4px solid #2d2d2d" : "none")};
`;
