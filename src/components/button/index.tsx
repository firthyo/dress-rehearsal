import React from "react";

import { Wrapper } from "./styles";

export type ButtonVariantProps = "filled" | "outlined" | "link";

export type ButtonAlignItemsProps =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";

export type MainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantProps;
  height?: number;
  width?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  isLoading?: boolean;
  alignItem?: ButtonAlignItemsProps;
  customColor?: string;
};
export const Button: React.FC<MainButtonProps> = ({
  color,

  customColor = "#684F3B",
  variant = "filled",
  isLoading,
  alignItem = "center",
  children,
  ...props
}) => {
  //   const hexColor = useSelectColor(color, customColor);

  return (
    <Wrapper
      {...props}
      variant={variant}
      color={customColor}
      className={isLoading ? "loading" : undefined}
      alignItem={alignItem}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
