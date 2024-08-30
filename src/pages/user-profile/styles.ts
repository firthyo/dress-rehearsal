import { styled } from "styled-components";

export const Sidebar = styled.div`
  width: 200px; /* Fixed width for VerticalTab */
  flex-shrink: 0; /* Prevent shrinking */
`;

export const ContentArea = styled.div`
  flex: 1; /* Allow content to take remaining space */
  padding: 20px; /* Add some padding */
`;

export const InfoContainer = styled.div`
  flex: 1; /* This will make the typography container take up available space */
  display: flex;
  flex-direction: column;
`;
