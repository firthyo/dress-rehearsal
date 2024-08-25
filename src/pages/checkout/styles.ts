import styled from "styled-components";
type LinkProps = {
  linkColor?: string;
};
export const Line = styled.div`
  border-top: solid 1px #ededee;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Form = styled.div`
  flex: 2; /* Takes up 60% of the width */
  background-color: #ffffff;
  padding: 20px 60px;
  box-sizing: border-box;
  text-align: left;
`;

export const Overview = styled.div`
  flex: 1; /* Takes up 40% of the width */

  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
`;

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.linkColor || props.theme.colors.info};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
`;

export const RowWrapperMultipleCol = styled.div`
  display: flex;
  box-sizing: border-box;
  /* padding: 10px; */
`;
