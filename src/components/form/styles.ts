import styled from "styled-components";

type LinkProps = {
  linkColor?: string;
};

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 460px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const RowWrapperMultipleCol = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px 0px;
`;

export const RowWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 10px 0px;
`;

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.linkColor || props.theme.colors.info};
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  text-align: start;
  display: flex;
  margin-left: 12px;
`;

export const ResetPasswordFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
`;

export const Line = styled.div`
  border-top: solid 1px #ededee;
`;
