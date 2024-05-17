import React, { ReactNode } from "react";
import { CenteredContent, PaletteBackgroundWrapper } from "./styles";

export type PaletteBackgroundProps = {
  color?: string;
  size?: number;
  children?: ReactNode;
};

const PaletteBackground: React.FC<PaletteBackgroundProps> = ({
  color = "#6D4E39",
  size = 108,
  children,
}) => {
  const fillOpacityOuter = 0.1;
  const fillOpacityInner = 0.4;
  const outerRadius = size / 2;
  const innerRadius = (outerRadius / 54) * 46;

  return (
    <PaletteBackgroundWrapper size={size}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="54"
          cy="54"
          r={outerRadius}
          fill={color}
          fillOpacity={fillOpacityOuter}
        />
        <circle
          cx="54"
          cy="54"
          r={innerRadius}
          fill={color}
          fillOpacity={fillOpacityInner}
        />
      </svg>
      <CenteredContent>{children}</CenteredContent>
    </PaletteBackgroundWrapper>
  );
};

export default PaletteBackground;
