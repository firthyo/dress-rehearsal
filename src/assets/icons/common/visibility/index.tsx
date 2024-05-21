import React from "react";
import { IconProps } from "assets/icons/types";

export const VisibilityIcon: React.FC<IconProps> = ({
  color = "#9c9c9c",
  size = "16px",
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
        id="mask0_541_19354"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_541_19354)">
        <path
          d="M12.0028 15.577C13.136 15.577 14.0984 15.1804 14.8901 14.3872C15.6817 13.5941 16.0776 12.6309 16.0776 11.4978C16.0776 10.3646 15.681 9.40217 14.8878 8.6105C14.0946 7.81883 13.1315 7.423 11.9983 7.423C10.8651 7.423 9.90273 7.81958 9.11106 8.61275C8.3194 9.40592 7.92356 10.3691 7.92356 11.5023C7.92356 12.6354 8.32015 13.5978 9.11331 14.3895C9.90648 15.1812 10.8696 15.577 12.0028 15.577ZM12.0006 14.2C11.2506 14.2 10.6131 13.9375 10.0881 13.4125C9.56306 12.8875 9.30056 12.25 9.30056 11.5C9.30056 10.75 9.56306 10.1125 10.0881 9.5875C10.6131 9.0625 11.2506 8.8 12.0006 8.8C12.7506 8.8 13.3881 9.0625 13.9131 9.5875C14.4381 10.1125 14.7006 10.75 14.7006 11.5C14.7006 12.25 14.4381 12.8875 13.9131 13.4125C13.3881 13.9375 12.7506 14.2 12.0006 14.2ZM12.0018 18.5C9.70231 18.5 7.60706 17.8657 5.71606 16.597C3.82506 15.3285 2.43273 13.6295 1.53906 11.5C2.43273 9.3705 3.82456 7.6715 5.71456 6.403C7.60473 5.13433 9.69965 4.5 11.9993 4.5C14.2988 4.5 16.3941 5.13433 18.2851 6.403C20.1761 7.6715 21.5684 9.3705 22.4621 11.5C21.5684 13.6295 20.1766 15.3285 18.2866 16.597C16.3964 17.8657 14.3015 18.5 12.0018 18.5Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default VisibilityIcon;
