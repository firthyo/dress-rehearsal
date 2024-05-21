import React from "react";
import { Typography } from "../typography";

import Spacer from "../spacer";
import { InlineWrapper } from "../inline-wrapper";
import {
  InstragramIcon,
  FacebookIcon,
  LineIcon,
  TiktokIcon,
} from "assets/icons/social";
import { LeftWrapper, RigthWrapper, Wrapper } from "./styles";

export const Footer = () => {
  return (
    <Wrapper>
      <RigthWrapper>
        <Typography variant="h3" color="surface">
          Dress Rehersal
        </Typography>
        <Spacer y={16} />
        <Typography variant="p-articles" color="surface">
          Copyright Dress Rehearsal, all right reserved
        </Typography>
      </RigthWrapper>
      <LeftWrapper>
        <InlineWrapper>
          <FacebookIcon />
          <Spacer x={16} />
          <LineIcon />
          <Spacer x={16} />
          <InstragramIcon />
          <Spacer x={16} />
          <TiktokIcon />
        </InlineWrapper>
      </LeftWrapper>
    </Wrapper>
  );
};

export default Footer;
