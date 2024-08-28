import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ShippingBox = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px solid;
  border-color: ${(props) =>
    props.selected ? "blue" : "grey"}; /* Update the colors as needed */
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border-color: blue; /* Update the hover color as needed */
  }
`;

export const ShippingTitle = styled.h2`
  color: #333;
  margin-bottom: 16px;
`;

export const ShippingText = styled.p<{ small?: boolean }>`
  font-size: ${(props) => (props.small ? "12px" : "16px")};
  margin: 4px 0;
  color: #555;
`;
