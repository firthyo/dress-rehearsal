import React from "react";

import { Wrapper } from "./styles";

type Props = {
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  children?: React.ReactNode;
};

export const InlineWrapper: React.FC<Props> = ({
  children,
  justifyContent = "flex-start",
  alignItems = "center",
}) => (
  <Wrapper justifyContent={justifyContent} alignItems={alignItems}>
    {children}
  </Wrapper>
);
