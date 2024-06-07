import React from "react";
import { IconProps } from "assets/icons/types";

export const ArrowLeft: React.FC<IconProps> = ({
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
      id="mask0_670_22374"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_670_22374)">
      <path
        d="M10.4538 11.9998L14.527 16.0728C14.6654 16.2113 14.7362 16.3853 14.7395 16.595C14.7427 16.8045 14.6719 16.9818 14.527 17.1268C14.382 17.2716 14.2064 17.344 14 17.344C13.7937 17.344 13.618 17.2716 13.473 17.1268L8.97877 12.6325C8.88527 12.5388 8.81927 12.4401 8.78077 12.3363C8.74227 12.2324 8.72302 12.1203 8.72302 11.9998C8.72302 11.8793 8.74227 11.7671 8.78077 11.6633C8.81927 11.5594 8.88527 11.4607 8.97877 11.367L13.473 6.87276C13.6115 6.73442 13.7856 6.66359 13.9953 6.66026C14.2048 6.65709 14.382 6.72792 14.527 6.87276C14.6719 7.01776 14.7443 7.19342 14.7443 7.39976C14.7443 7.60609 14.6719 7.78176 14.527 7.92676L10.4538 11.9998Z"
        fill={color}
      />
    </g>
  </svg>
);

export default ArrowLeft;
