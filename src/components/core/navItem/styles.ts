import styled, { css } from "styled-components";

type Props = {
  isActive: boolean;
};

export const Wrapper = styled.button<Props>`
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 4px;
    `}

  ${(props) =>
    props.isActive
      ? css`
          padding-bottom: 4px;
        `
      : css`
          padding-bottom: 5px;
        `}
`;
