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
  isSelectAble?: boolean;
  onChange?: (value: string) => void;
}

export const RadioColorSelector: React.FC<ColorSelectorProps> = ({
  options,
  isSelectAble = true,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    options[0].value
  );

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
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
