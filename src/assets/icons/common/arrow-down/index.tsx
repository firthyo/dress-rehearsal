import React from "react";
import { IconProps } from "assets/icons/types";

export const ArrowDown: React.FC<IconProps> = ({
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
      id="mask0_675_22612"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        y="24"
        width="24"
        height="24"
        transform="rotate(-90 0 24)"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_675_22612)">
      <path
        d="M12 13.5466L16.073 9.47334C16.2115 9.33501 16.3856 9.26418 16.5953 9.26084C16.8048 9.25768 16.982 9.32851 17.127 9.47334C17.2718 9.61834 17.3443 9.79401 17.3443 10.0003C17.3443 10.2067 17.2718 10.3823 17.127 10.5273L12.6328 15.0216C12.5391 15.1151 12.4403 15.1811 12.3365 15.2196C12.2327 15.2581 12.1205 15.2773 12 15.2773C11.8795 15.2773 11.7673 15.2581 11.6635 15.2196C11.5597 15.1811 11.4609 15.1151 11.3673 15.0216L6.873 10.5273C6.73467 10.3888 6.66384 10.2148 6.6605 10.0051C6.65734 9.79559 6.72817 9.61834 6.873 9.47334C7.018 9.32851 7.19367 9.25609 7.4 9.25609C7.60634 9.25609 7.782 9.32851 7.927 9.47334L12 13.5466Z"
        fill={color}
      />
    </g>
  </svg>
);

export default ArrowDown;
