import React from "react";
import { Link, NoContent } from "./styles";
import { Typography } from "../typography";
import Spacer from "../spacer";
import { UnderConstruction } from "assets/icons";
import { InlineWrapper } from "../inline-wrapper";

export const NoContentFallBack = () => {
  return (
    <NoContent>
      <Typography variant="h4" color="systemDark">
        Page under construction
      </Typography>
      <Spacer y={40} />
      <UnderConstruction />
      <Spacer y={24} />
      <Typography color="systemDark">
        Hi, We ‘re currently working on this page. <br />
      </Typography>
      <InlineWrapper justifyContent="center">
        <Typography variant="p-medium" color="systemDark">
          <Link linkColor="#6D4E39">Contact us</Link>
        </Typography>
        <Spacer x={4} />
        <Typography color="systemDark">with any question</Typography>
      </InlineWrapper>
    </NoContent>
  );
};

export default NoContentFallBack;
