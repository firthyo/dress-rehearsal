import React, { useState } from "react";
import { SizeButton } from "./styles";
import { Typography } from "../typography";

type SizeSelectProps = {
  sizes: string[];
};

export const SizeSelection: React.FC<SizeSelectProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);

  return (
    <div>
      {sizes.map((size) => (
        <SizeButton
          key={size}
          isActive={selectedSize === size}
          onClick={() => setSelectedSize(size)}
        >
          <Typography
            variant="p-articles"
            color={selectedSize === size ? "systemLight" : "systemDark"}
          >
            {size}
          </Typography>
        </SizeButton>
      ))}
    </div>
  );
};

export default SizeSelection;
