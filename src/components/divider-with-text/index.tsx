import React from "react";
import { Divider, Line, DividerText } from "./styles";
type DividerWithTextProps = {
  label?: string;
};

const DividerWithText: React.FC<DividerWithTextProps> = ({ label = "or" }) => {
  return (
    <Divider>
      <Line />
      <DividerText>{label}</DividerText>
      <Line />
    </Divider>
  );
};

export default DividerWithText;
