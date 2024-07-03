import React from "react";
import { IconProps } from "assets/icons/types";

export const AddIcon: React.FC<IconProps> = ({
  color = "#1C1B1F",
  size = "20px",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_977_25005"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="25"
    >
      <rect x="0.75" y="0.321289" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_977_25005)">
      <path
        d="M12 13.0713H6.25V11.5713H12V5.82129H13.5V11.5713H19.25V13.0713H13.5V18.8213H12V13.0713Z"
        fill={color}
      />
    </g>
  </svg>
);

export default AddIcon;
