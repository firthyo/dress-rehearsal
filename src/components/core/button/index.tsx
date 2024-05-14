import React from "react";

import { Wrapper } from "./styles";

export type ButtonVariantProps = "filled" | "outlined" | "link";

export type ButtonAlignItemsProps =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";

export type ButtonBorderRadius = "none" | "small" | "large";
export const borderRadiusMapping: Record<ButtonBorderRadius, string> = {
  none: "0px",
  small: "8px",
  large: "50px",
};

export type MainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantProps;
  height?: number;
  width?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  isLoading?: boolean;
  alignItem?: ButtonAlignItemsProps;
  customColor?: string;
  borderRadius?: ButtonBorderRadius;
};
export const Button: React.FC<MainButtonProps> = ({
  color,
  customColor = "#684F3B",
  variant = "filled",
  isLoading,
  alignItem = "center",
  children,
  borderRadius = "small",
  ...props
}) => {
  //   const hexColor = useSelectColor(color, customColor);
  const processedBorderRadius = borderRadiusMapping[borderRadius];

  return (
    <Wrapper
      {...props}
      variant={variant}
      color={customColor}
      className={isLoading ? "loading" : undefined}
      alignItem={alignItem}
      borderRadius={processedBorderRadius}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
