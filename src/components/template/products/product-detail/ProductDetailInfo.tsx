import React from "react";

import { Container, Detail, SelectionContainer } from "./styles";
import {
  InlineWrapper,
  SizeSelection,
  Spacer,
  Typography,
} from "components/core";
import RadioColorSelector from "components/core/radioColorSelector";

import { Accordion } from "components/core/accordion";
import Breadcrumb from "components/core/Breadcrumb";

import { Product } from "graphql/product/types";
export type VariantsOptionType = {
  value: string;
  color: string;
};
type ProductDetailInfoProps = {
  product: Product;
  onColorChange?: (colorValue: string) => void;
};

const ProductDetailInfo: React.FC<ProductDetailInfoProps> = ({
  product,
  onColorChange,
}) => {
  const colors: VariantsOptionType[] = product.variants.map(
    (variant: VariantsOptionType) => ({
      value: variant.value,
      color: variant.color,
    })
  );
  return (
    <Detail>
      <Breadcrumb lastPath={product.name}></Breadcrumb>
      <Spacer y={24} />
      <Typography variant="h3" color="primary">
        {product.name}
      </Typography>

      <Spacer y={16} />
      {/* Subtitle */}
      <Typography variant="page-subtitle" color="primary">
        THB {product.price}
      </Typography>
      {/* <Spacer y={16} />
<Divider></Divider> */}
      <Spacer y={24} />
      <SelectionContainer>
        <Typography variant="p-articles" color="systemDark">
          Size
        </Typography>
        <Spacer y={4} />
        <SizeSelection sizes={product.sizes} />
      </SelectionContainer>
      <Spacer y={16} />
      <SelectionContainer>
        <Typography variant="p-articles" color="systemDark">
          Color
        </Typography>
        <Spacer y={8} />
        <InlineWrapper>
          <Spacer x={6} />
          <RadioColorSelector options={colors} onChange={onColorChange} />
        </InlineWrapper>
      </SelectionContainer>
      <Spacer y={16} />

      <p>{product.stock ? "In Stock" : "Out of Stock"}</p>
      <Accordion title={"Product Detail"}>
        <Typography variant="p" color="systemDark">
          {product.description}
        </Typography>
      </Accordion>
      <Accordion title={"Materials"}>
        <Typography variant="p" color="systemDark">
          {product.material}
        </Typography>
      </Accordion>

      <Accordion title={" Care Instructions"}>
        <Typography variant="p" color="systemDark">
          Machine Wash Cold Gentle Cycle, Do Not Bleach, Tumble Dry Low, Do Not
          Iron
        </Typography>
      </Accordion>
    </Detail>
  );
};

export default ProductDetailInfo;
