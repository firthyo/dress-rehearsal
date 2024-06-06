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
import { Breadcrumbs } from "@mui/material";

import Link from "@mui/material/Link";
import ImageGallery from "../image-gallery";
type VariantsOptionType = {
  value: string;
  color: string;
  image: string[];
};

export const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  console.log("this is data >>>", data);

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
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <Spacer y={32} />
      <Wrapper>
        <Visual>
          {/* <img src={product.productThumbnail} alt={product.name} /> */}
          {product.variants && (
            <ImageGallery images={product?.variants[0].images}></ImageGallery>
          )}
        </Visual>
        <Detail>
          <Typography variant="h3" color="primary">
            {product.name}
          </Typography>
          <Spacer y={16} />
          {/* Subtitle */}
          <Typography variant="page-subtitle">Oversize T-shirt</Typography>
          <Spacer y={8} />
          <Typography variant="p-semi-bold" color="systemDark">
            {product.description}
          </Typography>
          <Typography variant="p-articles" color="primary">
            THB {product.price}
          </Typography>
          <Spacer y={16} />
          <SelectionContainer>
            <TitleWrapper>
              <Typography variant="h2" color="primary">
                Size
              </Typography>
            </TitleWrapper>

            <Typography variant="h2" color="primary">
              <SizeSelection sizes={product.sizes} />
            </Typography>
          </SelectionContainer>
          <Spacer y={16} />
          <SelectionContainer>
            <TitleWrapper>
              <Typography variant="h2" color="primary">
                Color
              </Typography>
            </TitleWrapper>

            <InlineWrapper>
              <Spacer x={6} />
              <RadioColorSelector options={colors} />
            </InlineWrapper>
          </SelectionContainer>
          <Spacer y={16} />
          <Typography variant="h2" color="primary">
            Product Detail
          </Typography>
          <p>{product.material}</p>
          <p>{product.stock ? "In Stock" : "Out of Stock"}</p>
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default ProductDetail;
