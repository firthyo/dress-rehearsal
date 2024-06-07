import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "graphql/product/getProducts";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Detail,
  SelectionContainer,
  TitleWrapper,
  Visual,
  Wrapper,
} from "./styles";
import {
  InlineWrapper,
  SizeSelection,
  Spacer,
  Typography,
} from "components/core";
import RadioColorSelector from "components/core/radioColorSelector";

import ImageGallery from "../image-gallery";
import { Accordion } from "components/core/accordion";
import Breadcrumb from "components/core/Breadcrumb";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import MobileProductDetail from "../mobile-product-detail";
type VariantsOptionType = {
  value: string;
  color: string;
  image: string[];
};

export const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.getProductById;
  const colors: VariantsOptionType[] = product.variants.map(
    (variant: VariantsOptionType) => ({
      value: variant.value, // Assuming this is the text you want to display
      color: variant.color, // Assuming this maps directly to a color value
    })
  );

  return (
    <Container>
      {isMdUp ? (
        <div>test test</div>
      ) : (
        <MobileProductDetail product={product}></MobileProductDetail>
      )}

      <Spacer y={32} />
      <Wrapper>
        <Visual>
          {/* <img src={product.productThumbnail} alt={product.name} /> */}
          {product.variants && (
            <ImageGallery images={product?.variants[0].images} />
          )}
        </Visual>

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
              <RadioColorSelector options={colors} />
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
              Machine Wash Cold Gentle Cycle, Do Not Bleach, Tumble Dry Low, Do
              Not Iron
            </Typography>
          </Accordion>
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default ProductDetail;
