import React from "react";

import { Wrapper } from "./styles";

import Spacer from "components/spacer";
import { Typography } from "components/typography";

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
        ? "#fff"
        : "#684F3B"
      : isActive
      ? "#fff"
      : "#684F3B";

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
      <Typography variant="h4" customColor={color}>
        {name}
      </Typography>
      <Spacer y={12} />
    </Wrapper>
  );
};

export default TabNavItem;
