import React from "react";
// Import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css"; // Core Swiper styles
import "swiper/css/scrollbar"; // Styles for the scrollbar module

type Props = {
  images: string[];
};

export const SwiperImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Scrollbar]} // Register the Scrollbar module
      scrollbar={{ hide: true }} // Configure the scrollbar
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImageGallery;
