import React from "react";
import { IconProps } from "assets/icons/types";

export const ArrowUp: React.FC<IconProps> = ({
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
      id="mask0_675_22615"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        x="24"
        width="24"
        height="24"
        transform="rotate(90 24 0)"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_675_22615)">
      <path
        d="M12 10.4534L7.927 14.5267C7.7885 14.665 7.61441 14.7358 7.40475 14.7392C7.19525 14.7423 7.018 14.6715 6.873 14.5267C6.72816 14.3817 6.65575 14.206 6.65575 13.9997C6.65575 13.7933 6.72816 13.6177 6.873 13.4727L11.3672 8.97841C11.4609 8.88491 11.5597 8.81891 11.6635 8.78041C11.7673 8.74191 11.8795 8.72266 12 8.72266C12.1205 8.72266 12.2327 8.74191 12.3365 8.78041C12.4403 8.81891 12.5391 8.88491 12.6327 8.97841L17.127 13.4727C17.2653 13.6112 17.3362 13.7852 17.3395 13.9949C17.3427 14.2044 17.2718 14.3817 17.127 14.5267C16.982 14.6715 16.8063 14.7439 16.6 14.7439C16.3937 14.7439 16.218 14.6715 16.073 14.5267L12 10.4534Z"
        fill={color}
      />
    </g>
  </svg>
);

export default ArrowUp;
