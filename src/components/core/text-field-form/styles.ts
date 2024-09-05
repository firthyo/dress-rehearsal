import styled from "styled-components";

type PropsFlexBox = {
  width?: number;
  height?: number;
  grow?: number; // Add flexibility to grow
  shrink?: number; // Add flexibility to shrink
};

export const FlexBox = styled.div<PropsFlexBox>`
  display: ${(props) =>
    props.width && props.width > 0 ? "inline-flex" : "flex"};

  flex-grow: ${(props) => props.grow ?? 1}; // Default to grow
  flex-shrink: ${(props) => props.shrink ?? 1}; // Default to shrinkƒ
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  min-width: 0; // Ensure the FlexBox itself can shrink
`;
