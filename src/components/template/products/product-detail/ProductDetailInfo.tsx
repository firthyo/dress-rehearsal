import React, { useState } from "react";

import { Container, Detail, SelectionContainer } from "./styles";
import {
  // AddToBag,
  Button,
  Counter,
  InlineWrapper,
  ShoppingBagDrawer,
  SizeSelection,
  Spacer,
  Typography,
} from "components/core";
import RadioColorSelector from "components/core/radioColorSelector";
import MockProduct from "assets/mock-pic/mock_product1.png";
import { Accordion } from "components/core/accordion";
import Breadcrumb from "components/core/Breadcrumb";

import { Product } from "graphql/product/types";

import { CloseIcon, FavoritOutline, ShareIcon } from "assets/icons";
import {
  Box,
  Drawer,
  IconButton,
  Snackbar,
  Divider,
  SwipeableDrawer,
} from "@mui/material";

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
  const handleClickAddToBag = () => {
    setAddToBagInfo(true);
  };
  const [addToBagInfo, setAddToBagInfo] = useState(false);

  // const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  // const [selectedVariant, setSelectedVariant] = useState(colors[0].value);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAddToBagInfo(false);
  };

  return (
    <Detail>
      <Breadcrumb lastPath={product.name}></Breadcrumb>
      <Spacer y={24} />
      <InlineWrapper justifyContent="space-between">
        <Typography variant="h4" color="primary">
          {product.name}
        </Typography>
        <div>
          <IconButton>
            <FavoritOutline size={32} />
          </IconButton>

          <Spacer x={8} />
          <IconButton>
            <ShareIcon size={32} />
          </IconButton>
        </div>
      </InlineWrapper>

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
      <InlineWrapper>
        <Button
          type="button"
          variant="filled"
          borderRadius="none"
          customColor="#000"
          width={155}
        >
          BUY NOW
        </Button>
        <Spacer x={16} />
        <Button
          type="button"
          variant="outlined"
          borderRadius="none"
          customColor="#000"
          onClick={handleClickAddToBag}
        >
          ADD TO BAG
        </Button>
        {/* <AddToBag
          productId={product.id}
          quantity={1}
          variant={{
            value: selectedVariant || "",
            color: selectedVariant,
            size: selectedSize,
          }}
        /> */}
        <Drawer open={addToBagInfo} onClose={handleClose} anchor={"right"}>
          <ShoppingBagDrawer></ShoppingBagDrawer>
        </Drawer>
        {/* <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={addToBagInfo}
          autoHideDuration={100000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        /> */}
      </InlineWrapper>
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
