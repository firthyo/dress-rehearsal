import styled from "styled-components";

type LineProps = {
  marginVertical?: number;
  marginHorizontal?: number;
};
export const Line = styled.div<LineProps>`
  border-left:1px solid black;
  margin: ${(props) => `${props.marginVertical}px`}${(props) => `${props.marginHorizontal}px`};

  height: 30px;
`;
