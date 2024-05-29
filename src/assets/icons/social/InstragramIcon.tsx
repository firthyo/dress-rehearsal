import React from "react";
import { IconProps } from "../types";

export const InstragramIcon: React.FC<IconProps> = ({
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
      <rect width="52" height="52" rx="15" fill={"#FFFAF1"} />
      <path
        d="M25.946 20.3308C22.8406 20.3308 20.3357 22.8357 20.3357 25.9412C20.3357 29.0466 22.8406 31.5515 25.946 31.5515C29.0515 31.5515 31.5564 29.0466 31.5564 25.9412C31.5564 22.8357 29.0515 20.3308 25.946 20.3308ZM25.946 29.5886C23.9392 29.5886 22.2986 27.9529 22.2986 25.9412C22.2986 23.9294 23.9343 22.2937 25.946 22.2937C27.9578 22.2937 29.5935 23.9294 29.5935 25.9412C29.5935 27.9529 27.9529 29.5886 25.946 29.5886ZM33.0945 20.1013C33.0945 20.8289 32.5085 21.4099 31.7859 21.4099C31.0584 21.4099 30.4773 20.824 30.4773 20.1013C30.4773 19.3787 31.0632 18.7927 31.7859 18.7927C32.5085 18.7927 33.0945 19.3787 33.0945 20.1013ZM36.8103 21.4294C36.7273 19.6765 36.3269 18.1238 35.0427 16.8445C33.7634 15.5652 32.2107 15.1648 30.4578 15.0769C28.6511 14.9744 23.2361 14.9744 21.4294 15.0769C19.6814 15.1599 18.1287 15.5603 16.8445 16.8396C15.5603 18.1189 15.1648 19.6716 15.0769 21.4246C14.9744 23.2312 14.9744 28.6462 15.0769 30.4529C15.1599 32.2058 15.5603 33.7585 16.8445 35.0378C18.1287 36.3171 19.6765 36.7175 21.4294 36.8054C23.2361 36.908 28.6511 36.908 30.4578 36.8054C32.2107 36.7224 33.7634 36.322 35.0427 35.0378C36.322 33.7585 36.7224 32.2058 36.8103 30.4529C36.9128 28.6462 36.9128 23.2361 36.8103 21.4294ZM34.4763 32.3914C34.0955 33.3484 33.3582 34.0857 32.3962 34.4714C30.9558 35.0427 27.5378 34.9109 25.946 34.9109C24.3542 34.9109 20.9314 35.0378 19.4958 34.4714C18.5388 34.0906 17.8015 33.3533 17.4158 32.3914C16.8445 30.9509 16.9763 27.533 16.9763 25.9412C16.9763 24.3494 16.8494 20.9265 17.4158 19.491C17.7966 18.5339 18.5339 17.7966 19.4958 17.4109C20.9363 16.8396 24.3542 16.9714 25.946 16.9714C27.5378 16.9714 30.9607 16.8445 32.3962 17.4109C33.3533 17.7917 34.0906 18.5291 34.4763 19.491C35.0476 20.9314 34.9158 24.3494 34.9158 25.9412C34.9158 27.533 35.0476 30.9558 34.4763 32.3914Z"
        fill={color}
      />
    </svg>
  );
};

export default InstragramIcon;