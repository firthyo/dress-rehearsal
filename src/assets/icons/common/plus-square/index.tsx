import { IconProps } from "assets/icons/types";
import React from "react";

export const PlusSquare: React.FC<IconProps> = ({
  color = "#6D4E39",
  size = "40px",
  fill = "#FFFAF1",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill={color} />
      <path
        d="M21.1168 27.7137V12.292C21.1168 11.6768 20.6181 11.1781 20.0029 11.1781C19.3878 11.1781 18.8891 11.6768 18.8891 12.292V27.7137C18.8891 28.3288 19.3878 28.8275 20.0029 28.8275C20.6181 28.8275 21.1168 28.3288 21.1168 27.7137Z"
        fill={fill}
        stroke={fill}
        stroke-width="0.3"
        stroke-linecap="round"
      />
      <path
        d="M27.7137 18.8891H12.292C11.6768 18.8891 11.1781 19.3878 11.1781 20.0029C11.1781 20.6181 11.6768 21.1168 12.292 21.1168H27.7137C28.3288 21.1168 28.8275 20.6181 28.8275 20.0029C28.8275 19.3878 28.3288 18.8891 27.7137 18.8891Z"
        fill={fill}
        stroke={fill}
        stroke-width="0.3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default PlusSquare;
