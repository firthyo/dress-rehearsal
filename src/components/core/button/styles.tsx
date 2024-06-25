import styled, { css } from "styled-components";
import {
  ButtonAlignItemsProps,
  ButtonVariantProps,
  borderRadiusMapping,
} from ".";

type WrapperProps = {
  variant: ButtonVariantProps;
  color: string;
  disabled?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  height?: number;
  width?: number;
  alignItem: ButtonAlignItemsProps;
  borderRadius?: string;
  isUppercase?: boolean;
};

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
    border: 1px solid ${(props) => props.color};
  `,

  none: css<WrapperProps>`
    color: ${(props) => props.color};
    background-color: transparent;
    border: transparent;
    padding: 0px;
  `,
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
  text-transform: ${(props) => props.isUppercase && "uppercase"};
  color: white;
  position: relative;
  padding: ${(props) => props.paddingVertical || 0}px
    ${(props) =>
      props.paddingHorizontal === undefined ? 32 : props.paddingHorizontal}px;
  height: ${(props) => props.height || 44}px;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  border-radius: ${(props) => props.borderRadius};

  cursor: pointer; //
  ${(props) => variants[props.variant]}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}
`;
