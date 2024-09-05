import { styled } from "styled-components";

type LinkProps = {
  linkColor?: string;
};

export const NoContent = styled.div`
  /* for Page under construction */
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  /* height: 100%; */
`;

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.linkColor || props.theme.colors.info};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
  
`;
