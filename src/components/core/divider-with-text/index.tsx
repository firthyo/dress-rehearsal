import React from "react";
import { Divider, Line, DividerText } from "./styles";
type DividerWithTextProps = {
  label?: string;
};

export const DividerWithText: React.FC<DividerWithTextProps> = ({
  label = "or",
}) => {
  return (
    <Divider>
      <Line />
      <DividerText>{label}</DividerText>
      <Line />
    </Divider>
  );
};

export default DividerWithText;
