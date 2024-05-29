import React from "react";
import { IconProps } from "assets/icons/types";

export const ArrowIos: React.FC<IconProps> = ({
  color = "#1C1B1F",
  size = "20px",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_570_20321"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect
          x="24"
          y="24"
          width="24"
          height="24"
          transform="rotate(-180 24 24)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_570_20321)">
        <path
          d="M14.8155 12.0002L7.28276 4.46748C7.08409 4.26881 6.98726 4.03489 6.99226 3.76573C6.99743 3.49639 7.09934 3.2624 7.29801 3.06373C7.49684 2.86506 7.73084 2.76573 8.00001 2.76573C8.26918 2.76573 8.50318 2.86506 8.70201 3.06373L16.373 10.7195C16.5538 10.9003 16.6878 11.1029 16.775 11.3272C16.8622 11.5516 16.9058 11.7759 16.9058 12.0002C16.9058 12.2246 16.8622 12.4489 16.775 12.6732C16.6878 12.8976 16.5538 13.1001 16.373 13.281L8.70201 20.9522C8.50318 21.1509 8.26659 21.2476 7.99226 21.2425C7.71793 21.2373 7.48143 21.1354 7.28276 20.9367C7.08409 20.7381 6.98476 20.5041 6.98476 20.2347C6.98476 19.9656 7.08409 19.7316 7.28276 19.533L14.8155 12.0002Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ArrowIos;
