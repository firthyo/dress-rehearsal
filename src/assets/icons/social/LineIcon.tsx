import React from "react";
import { IconProps } from "../types";

export const LineIcon: React.FC<IconProps> = ({
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
      <rect width={size} height={size} rx="15" fill="#FFFAF1" />
      <path
        d="M40.7653 23.3203C39.5277 13.6489 26.5846 9.98902 18.8145 14.3982C7.13336 21.0018 12.054 34.9251 24.086 36.5216L24.2472 36.5535C24.6264 36.6286 24.7283 36.7318 24.7547 36.7724C24.8034 36.8484 24.7779 36.9978 24.7584 37.0799C24.5932 37.7746 24.3892 38.4445 24.5225 39.2214C24.9156 41.2981 27.0983 40.2754 28.2016 39.5528C29.5975 38.7328 30.9128 37.8081 31.9027 37.0942C36.5831 33.8321 41.522 29.7766 40.7653 23.3203Z"
        fill={color}
      />
      <path
        d="M21.0867 27.6936H18.6126C18.2387 27.6936 17.9355 27.3905 17.9355 27.0166V21.8238C17.9579 20.9328 19.2664 20.9294 19.2893 21.8238V26.3396H21.0861C21.9779 26.3613 21.9801 27.6713 21.0867 27.6936Z"
        fill="#F1F1F1"
      />
      <path
        d="M23.6666 26.9971C23.6446 27.8883 22.3354 27.8911 22.3125 26.9971C22.3125 25.9462 22.3125 22.8049 22.3125 21.8042C22.3345 20.913 23.6436 20.9102 23.6666 21.8042V26.9971Z"
        fill="#F1F1F1"
      />
      <path
        d="M29.7858 26.9971C29.8053 27.6322 28.9218 27.9243 28.561 27.3948L26.1234 24.0375V26.9974C26.102 27.8883 24.792 27.8914 24.7697 26.9974V21.953C24.7573 21.3117 25.6271 21.0271 25.9945 21.5553L28.4323 24.9126V21.8042C28.4537 20.913 29.7638 20.9102 29.7861 21.8042L29.7858 26.9971Z"
        fill="#F1F1F1"
      />
      <path
        d="M34.7191 27.5684H31.3686C30.9947 27.5684 30.6916 27.2652 30.6916 26.8913C30.6925 25.5971 30.6909 22.9925 30.6916 21.6985C30.6916 21.3247 30.9947 21.0215 31.3686 21.0215H34.6152C35.5077 21.0447 35.5086 22.3523 34.6152 22.3753H32.0456V23.6177H34.1307C35.0229 23.6401 35.0238 24.9492 34.1307 24.9715H32.0456V26.214H34.7191C35.6103 26.2357 35.6128 27.5461 34.7191 27.5684Z"
        fill="#F1F1F1"
      />
    </svg>
  );
};

export default LineIcon;