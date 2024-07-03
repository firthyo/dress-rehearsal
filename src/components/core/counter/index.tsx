import * as React from "react";
import { styled } from "@mui/system";
import { AddIcon, RemoveIcon } from "assets/icons";
import { useState, useEffect } from "react";

interface CounterProps {
  initialCount: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  function CustomNumberInput(
    { initialCount, min = 1, max = 99, onChange },
    ref
  ) {
    const [value, setValue] = useState<number>(initialCount);

    useEffect(() => {
      setValue(initialCount);
    }, [initialCount]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value);
      if (!isNaN(newValue) && newValue >= min && newValue <= max) {
        setValue(newValue);
        onChange(newValue);
      }
    };

    const handleIncrement = () => {
      setValue((prevValue) => {
        const newValue = Math.min(prevValue + 1, max);
        onChange(newValue);
        return newValue;
      });
    };

    const handleDecrement = () => {
      setValue((prevValue) => {
        const newValue = Math.max(prevValue - 1, min);
        onChange(newValue);
        return newValue;
      });
    };

    return (
      <StyledInputRoot ref={ref}>
        <StyledButton onClick={handleDecrement}>
          <RemoveIcon />
        </StyledButton>
        <StyledInput value={value} onChange={handleChange} />
        <StyledButton onClick={handleIncrement}>
          <AddIcon />
        </StyledButton>
      </StyledInputRoot>
    );
  }
);

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
