import React from "react";
import { Typography } from "../typography";
import { useMediaQuery, useTheme } from "@mui/material";

import Spacer from "../spacer";
import { InlineWrapper } from "../inline-wrapper";
import {
  InstragramIcon,
  FacebookIcon,
  LineIcon,
  TiktokIcon,
} from "assets/icons/social";
import { LeftWrapper, RightWrapper, Wrapper } from "./styles";

export const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const iconSize = isSmallScreen ? 36 : 52; // Icon size changes based on the screen sizeƒ
  return (
    <Wrapper>
      <RightWrapper>
        <Typography variant="h3" color="surface">
          Dress Rehersal
        </Typography>
        <Spacer y={16} />
        <Typography variant="p-articles" color="surface">
          © Copyright Dress Rehearsal, all right reserved
        </Typography>
      </RightWrapper>
      <LeftWrapper>
        <InlineWrapper>
          <FacebookIcon size={iconSize} />
          <Spacer x={16} />
          <LineIcon size={iconSize} />
          <Spacer x={16} />
          <InstragramIcon size={iconSize} />
          <Spacer x={16} />
          <TiktokIcon size={iconSize} />
        </InlineWrapper>
      </LeftWrapper>
    </Wrapper>
  );
};

export default Footer;
