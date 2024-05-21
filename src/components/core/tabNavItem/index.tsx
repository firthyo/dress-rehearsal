import React from "react";

import { Wrapper } from "./styles";

import Spacer from "components/core/spacer";
import { Typography } from "components/core/typography";

type Props = {
  name: string;
  isActive: boolean;
  onClick(): void;
  datacy?: string;
  disabled?: boolean;
  background?: "FILLED" | "EMPTY";
};

export const TabNavItem: React.FC<Props> = ({
  name,
  isActive,
  onClick,
  datacy = null,
  disabled,
  background = "EMPTY",
}) => {
  const color =
    background === "FILLED"
      ? isActive
        ? "primary"
        : "systemLight"
      : isActive
      ? "primary"
      : "systemLight";

  return (
    <Wrapper
      type="button"
      isActive={isActive}
      onClick={onClick}
      className={isActive ? "is-active" : ""}
      disabled={disabled}
      data-cy={datacy}
    >
      <Spacer y={12} />
      <Typography variant="h4" color={color}>
        {name}
      </Typography>
      <Spacer y={12} />
    </Wrapper>
  );
};

export default TabNavItem;
