import React, { useEffect, useState } from "react";
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
  images: string[];
};

export const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const theme = useTheme();

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  const [currentVariant, setCurrentVariant] =
    useState<VariantsOptionType | null>(null);

  // useEffect to update the currentVariant based on data loaded
  useEffect(() => {
    if (data && data.getProductById && data.getProductById.variants) {
      setCurrentVariant(data.getProductById.variants[0]);
    }
  }, [data]);

  const handleColorSelection = (colorValue: string) => {
    const selectedVariant = data?.getProductById?.variants.find(
      (variant: VariantsOptionType) => variant.value === colorValue
    );
    setCurrentVariant(selectedVariant);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.getProductById) return <p>Product not found.</p>;

  const product = data.getProductById;
  return (
    <Container>
      {isSmUp ? (
        <Wrapper>
          <Visual>
            {/* <img src={product.productThumbnail} alt={product.name} /> */}
            {product.variants && (
              <ImageGallery
                images={
                  currentVariant
                    ? currentVariant.images
                    : product?.variants[0].images
                }
              />
            )}
          </Visual>

          <ProductDetailInfo
            product={product}
            onColorChange={handleColorSelection}
          />
        </Wrapper>
      ) : (
        <MobileProductDetail product={product}></MobileProductDetail>
      )}

      <Spacer y={32} />
    </Container>
  );
};

export default ProductDetail;
