import styled from "styled-components";

type BackgroundUrl = {
  backgroundUrl?: string;
};

export const Container = styled.div<BackgroundUrl>`
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
  width: 620px;
  height: 646px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
`;
