import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #000; // You can customize the color
  margin: 0 10px; // Adjust spacing around the text
`;

export const DividerText = styled.span`
  white-space: nowrap; // Prevents the text from wrapping
`;
