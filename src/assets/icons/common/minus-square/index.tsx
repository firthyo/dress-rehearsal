import React from "react";
import { IconProps } from "assets/icons/types";

export const MinusSquare: React.FC<IconProps> = ({
  color = "#6D4E39",
  size = "40px",
  fill = "#EDE3DA",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill={fill} />
      <path
        d="M28.75 19.6H12.75C12.1149 19.6 11.6 20.1149 11.6 20.75C11.6 21.3851 12.1149 21.9 12.75 21.9H28.75C29.3851 21.9 29.9 21.3851 29.9 20.75C29.9 20.1149 29.3851 19.6 28.75 19.6Z"
        fill={color}
        stroke={color}
        stroke-width="0.3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default MinusSquare;
