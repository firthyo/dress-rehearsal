import React from "react";
import { IconProps } from "assets/icons/types";

export const ArrowRight: React.FC<IconProps> = ({
  color = "#1C1B1F",
  size = "20px",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_670_22380"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_670_22380)">
      <path
        d="M12.9463 11.9995L8.87301 7.92652C8.73468 7.78802 8.66385 7.61394 8.66051 7.40427C8.65735 7.19477 8.72818 7.01752 8.87301 6.87252C9.01801 6.72769 9.19368 6.65527 9.40001 6.65527C9.60634 6.65527 9.78201 6.72769 9.92701 6.87252L14.4213 11.3668C14.5148 11.4604 14.5808 11.5592 14.6193 11.663C14.6578 11.7669 14.677 11.879 14.677 11.9995C14.677 12.12 14.6578 12.2322 14.6193 12.336C14.5808 12.4399 14.5148 12.5386 14.4213 12.6323L9.92701 17.1265C9.78851 17.2649 9.61443 17.3357 9.40476 17.339C9.19526 17.3422 9.01801 17.2714 8.87301 17.1265C8.72818 16.9815 8.65576 16.8059 8.65576 16.5995C8.65576 16.3932 8.72818 16.2175 8.87301 16.0725L12.9463 11.9995Z"
        fill={color}
      />
    </g>
  </svg>
);

export default ArrowRight;
