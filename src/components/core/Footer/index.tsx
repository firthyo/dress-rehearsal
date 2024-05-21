import React from "react";
import { RigthWrapper, Wrapper } from "./styles";
import { Typography } from "../typography";
import FacebookIcon from "assets/icons/social/FacebookIcon";
import LineIcon from "assets/icons/social/LineIcon";
import Spacer from "../spacer";

export const Footer = () => {
  return (
    <Wrapper>
      <RigthWrapper>
        <Typography variant="h3" color="surface">
          Dress Rehersal
        </Typography>
        <Spacer y={16} />
        <Typography variant="page-subtitle" color="surface">
          Complete your style with awesome clothes from us.
        </Typography>
      </RigthWrapper>
      <div>
        <FacebookIcon></FacebookIcon>
        <LineIcon></LineIcon>
        <Typography variant="page-subtitle" color="surface">
          copyright Dress Rehearsal, all right reserved
        </Typography>
      </div>
    </Wrapper>
  );
};

export default Footer;
