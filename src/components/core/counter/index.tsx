import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import { AddIcon, RemoveIcon } from "assets/icons";
import { useState } from "react";

export const Counter = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const handleIncrement = () => {
    setValue((prevValue) => Math.min(prevValue + 1, props.max || 99));
  };

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, props.min || 1));
  };

  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        // incrementButton: StyledButton,
        // decrementButton: StyledButton,
        incrementButton: (slotProps) => (
          <StyledButton {...slotProps} onClick={handleIncrement}>
            <AddIcon />
          </StyledButton>
        ),
        decrementButton: (slotProps) => (
          <StyledButton {...slotProps} onClick={handleDecrement}>
            <RemoveIcon />
          </StyledButton>
        ),
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon />,
          className: "increment",
        //   onClick: handleIncrement,
        },
        decrementButton: {
          children: <RemoveIcon />,
        //   onClick: handleDecrement,
        },
        input: {
          value: value,
          onChange: handleChange,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput() {
  return <Counter aria-label="Quantity Input" min={1} max={99} />;
}

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  color: ${grey[500]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey[200]};
  border-radius: 0px;
  overflow: hidden;
`;

const StyledInput = styled("input")`
  font-size: 1rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${grey[900]};
  background: #fff;
  border: none;
  width: 3rem;
  text-align: center;
  outline: 0;

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled("button")`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
  border: none;
  background: none;
  color: ${grey[600]};
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${grey[100]};
  }

  &:focus {
    outline: none;
  }

  &.increment {
    order: 1;
  }

  &:first-of-type {
    border-right: 1px solid ${grey[200]};
  }

  &:last-of-type {
    border-left: 1px solid ${grey[200]};
  }
`;
