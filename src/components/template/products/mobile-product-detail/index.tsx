import { InlineWrapper, Spacer, Typography } from "components/core";
import React from "react";
import { SelectionContainer, TitleWrapper, Wrapper } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "graphql/product/types";
import SwiperImageGallery from "../swiper-image-gallery";
import RadioColorSelector from "components/core/radioColorSelector";
import ProductDetailInfo from "../product-detail/ProductDetailInfo";

type MobileProductDetailProps = {
  product: Product;
  onColorChange?: (colorValue: string) => void;
};

const MobileProductDetail: React.FC<MobileProductDetailProps> = ({
  product,
  onColorChange,
}) => {
  console.log("this is product", product);
  const colors: any = product.variants.map((variant: any) => ({
    value: variant.value, // Assuming this is the text you want to display
    color: variant.color, // Assuming this maps directly to a color value
  }));
  return (
    <Wrapper>
      <SwiperImageGallery
        images={product.variants[0].images}
      ></SwiperImageGallery>
      <Spacer y={16} />
      <ProductDetailInfo
        product={product}
        onColorChange={onColorChange}
      ></ProductDetailInfo>
    </Wrapper>
  );
};

export default MobileProductDetail;
