import React from "react";
import { IconProps } from "../types";

export const FacebookIcon: React.FC<IconProps> = ({
  size = "52",
  color = "#1C1B1F",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="52" height="52" rx="15" fill="#FFFAF1" />
      <path
        d="M31.5122 27.0625L32.2065 22.5381H27.8652V19.6021C27.8652 18.3643 28.4717 17.1577 30.416 17.1577H32.3896V13.3057C32.3896 13.3057 30.5986 13 28.8862 13C25.311 13 22.9741 15.167 22.9741 19.0898V22.5381H19V27.0625H22.9741V38H27.8652V27.0625H31.5122Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
