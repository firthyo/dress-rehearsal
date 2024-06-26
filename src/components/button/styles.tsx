import styled, { css } from "styled-components";
import { ButtonAlignItemsProps, ButtonVariantProps } from ".";

const variants: Record<ButtonVariantProps, any> = {
  link: css<WrapperProps>`
    border: 0px;
    color: ${(props) => props.color};
    background-color: inherit;
  `,

  filled: css<WrapperProps>`
    background: ${(props) => props.color};
  `,

  outlined: css<WrapperProps>`
    color: ${(props) => props.color};
    background-color: inherit;
  `,
};

type WrapperProps = {
  variant: ButtonVariantProps;
  color: string;
  disabled?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  height?: number;
  width?: number;
  alignItem: ButtonAlignItemsProps;
};

export const Wrapper = styled.button<WrapperProps>`
  border: 1px solid ${(props) => props.color};
  font-weight: 600;
  font-size: 14px;
  display: flex;
  line-height: 14px;
  align-items: ${(props) => props.alignItem};
  justify-content: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: white;
  position: relative;
  padding: ${(props) => props.paddingVertical || 0}px
    ${(props) =>
      props.paddingHorizontal === undefined ? 32 : props.paddingHorizontal}px;
  height: ${(props) => props.height || 40}px;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  border-radius: 8px;

  ${(props) => variants[props.variant]}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}
`;
