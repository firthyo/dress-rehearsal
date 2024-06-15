import styled, { css } from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  margin-top: 120px;
  overflow-y: auto;

  @media (max-width: 600px) {
    margin-top: 86px;
  }
`;

export const AppHeader = styled.header`
  background-color: #fffaf1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
