import React from "react";

export const RemoveIcon = ({ size = 24, color = "#1C1B1F" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_977_25016"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_977_25016)">
      <path d="M5.5 12.75V11.25H18.5V12.75H5.5Z" fill={color} />
    </g>
  </svg>
);

export default RemoveIcon;
