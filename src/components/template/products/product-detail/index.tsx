import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "graphql/product/getProducts";

import { useParams } from "react-router-dom";
import { Container, Visual, Wrapper } from "./styles";
import { Spacer } from "components/core";

import ImageGallery from "../image-gallery";

import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import MobileProductDetail from "../mobile-product-detail";
import ProductDetailInfo from "./ProductDetailInfo";
export type VariantsOptionType = {
  value: string;
  color: string;
  image: string[];
};

export const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const theme = useTheme();

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.getProductById;

  return (
    <Container>
      {isSmUp ? (
        <Wrapper>
          <Visual>
            {/* <img src={product.productThumbnail} alt={product.name} /> */}
            {product.variants && (
              <ImageGallery images={product?.variants[0].images} />
            )}
          </Visual>

          <ProductDetailInfo product={product}></ProductDetailInfo>
        </Wrapper>
      ) : (
        <MobileProductDetail product={product}></MobileProductDetail>
      )}

      <Spacer y={32} />
    </Container>
  );
};

export default ProductDetail;
