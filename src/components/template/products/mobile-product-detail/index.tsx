import { Spacer, Typography } from "components/core";
import React from "react";
import { TitleWrapper, Wrapper } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "graphql/product/types";
import SwiperImageGallery from "../swiper-image-gallery";

type MobileProductDetailProps = { product: Product };

const MobileProductDetail: React.FC<MobileProductDetailProps> = ({
  product,
}) => {
  console.log("this is product", product.variants[0].images);
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography variant="h3" color="primary">
          {product.name}
        </Typography>
        <Spacer y={16} />
        {/* Subtitle */}
        <Typography variant="page-subtitle" color="primary">
          THB {product.price}
        </Typography>
      </TitleWrapper>
      <SwiperImageGallery
        images={product.variants[0].images}
      ></SwiperImageGallery>
    </Wrapper>
  );
};

export default MobileProductDetail;
