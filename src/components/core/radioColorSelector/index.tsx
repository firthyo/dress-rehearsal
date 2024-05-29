import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ColorButtons } from "./styles";

interface ColorOption {
  value: string;
  color: string;
}

interface ColorSelectorProps {
  options: ColorOption[];
}

export const RadioColorSelector: React.FC<ColorSelectorProps> = ({
  options,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      {options.map((option) => (
        <ColorButtons
          key={option.value}
          onClick={() => handleSelect(option.value)}
          style={{ backgroundColor: option.color }}
          className={selectedValue === option.value ? "selected" : ""}
        />
      ))}
    </div>
  );
};

export default RadioColorSelector;
