import React, { useContext } from "react";
import { IconProps } from "assets/icons/types";
import { ThemeContext } from "styled-components";

export const TaskCheckedLight: React.FC<IconProps> = ({
  size,
  color,
  themeColor,
}) => {
  const theme = useContext(ThemeContext); // Get the theme context

  // Determine the color: direct `color` prop or `themeColor` key from theme, or a default
  const finalColor =
    (themeColor && theme?.colors[themeColor]) || theme?.colors.primary || color;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_397_70674"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_397_70674)">
        <path
          d="M12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74942 9.45267 3.24825 8.2965C3.74692 7.14033 4.42375 6.13467 5.27875 5.2795C6.13375 4.42433 7.13917 3.74725 8.295 3.24825C9.45083 2.74942 10.6858 2.5 12 2.5C13.0533 2.5 14.05 2.65833 14.99 2.975C15.93 3.29167 16.7923 3.73333 17.577 4.3L16.4923 5.40975C15.8461 4.96475 15.1462 4.61858 14.3925 4.37125C13.6388 4.12375 12.8413 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.6487 19.9769 11.3013 19.9307 10.9578C19.8846 10.6143 19.8153 10.2802 19.723 9.95575L20.9345 8.73475C21.1178 9.24875 21.2579 9.77758 21.3547 10.3212C21.4516 10.8647 21.5 11.4243 21.5 12C21.5 13.3142 21.2507 14.5492 20.752 15.705C20.2533 16.8608 19.5766 17.8663 18.7218 18.7213C17.8669 19.5763 16.8617 20.2531 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM10.5808 16.2538L6.677 12.35L7.73075 11.2963L10.5808 14.1463L20.4462 4.2655L21.5 5.31925L10.5808 16.2538Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default TaskCheckedLight;
