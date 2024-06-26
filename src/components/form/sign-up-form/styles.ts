import styled from "styled-components";

type LinkProps = {
  linkColor?: string;
};

export const Wrapper = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
`;

export const RowWrapperMultipleCol = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
`;

export const RowWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 10px;
`;

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.linkColor || props.theme.colors.info};
  text-decoration: none;
  text-decoration: underline;
`;
