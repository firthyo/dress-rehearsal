import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";

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
import { Accordion } from "components/core/accordion";
import Breadcrumb from "components/core/Breadcrumb";

import { Product } from "graphql/product/types";

import { FavoritOutline, ShareIcon } from "assets/icons";

import { useCart } from "context/CartContext";
import { Detail, SelectionContainer } from "./styles";

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
  console.log("colors", colors);

  const [addToBagInfo, setAddToBagInfo] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedVariant, setSelectedVariant] = useState(colors[0].value);
  const { cartItems, addItemToCart } = useCart();
  const handleClickAddToBag = () => {
    console.log("this is product.variants", product.variants);
    // Send the variant ID
    const selectedVariantObj = product.variants.find(
      (variant) => variant.value === selectedVariant
    );
    console.log("this is cartItems", cartItems, selectedVariantObj);

    const newItem = {
      productId: product.id,
      variantId: selectedVariantObj?.id || "",
      size: selectedSize,
      name: product.name,
      price: product.price,
      color: selectedVariantObj?.value || "",
      quantity: 1,
      image: product.productThumbnail,
    };

    addItemToCart(newItem);

    // Here you would typically dispatch an action or call an API to add to the cart
    setAddToBagInfo(true);
  };
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
          <RadioColorSelector
            options={colors}
            onChange={(color) => {
              setSelectedVariant(color);
              if (onColorChange) onColorChange(color);
            }}
          />
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

        <Drawer open={addToBagInfo} onClose={handleClose} anchor={"right"}>
          <ShoppingBagDrawer cartItems={cartItems} onClose={handleClose} />
        </Drawer>
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
