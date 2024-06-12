import styled from "styled-components";

type ContainerProps = {
  backgroundUrl?: string;
  fullWidth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 11.5%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("${(props) => props.backgroundUrl}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: border 0.3s;

  height: 646px;
  width: ${(props) => (props.fullWidth ? "100%" : "45%")};

  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    width: ${(props) => (props.fullWidth ? "100%" : "224px")};
    height: 224px;
  }

  max-width: ${(props) => (props.fullWidth ? "1320px" : "620px")};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
`;
