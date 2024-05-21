import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  height: 164px;
`;

export const RigthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  text-align: start;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  text-align: end;
`;
