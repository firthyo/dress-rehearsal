import React, { useState } from "react";
import { SizeButton } from "./styles";

type SizeSelectProps = {
  sizes: string[];
};

export const SizeSelection: React.FC<SizeSelectProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <div>
      {sizes.map((size) => (
        <SizeButton
          key={size}
          isActive={selectedSize === size}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </SizeButton>
      ))}
    </div>
  );
};

export default SizeSelection;
