import React, { useState } from "react";
// Import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types"; // Import the type

// Import Swiper styles
import "swiper/css"; // Core Swiper styles
import "swiper/css/scrollbar"; // Styles for the scrollbar module
import "./swiper-custom.css"; // Custom styles for overlaying pagination

type Props = {
  images: string[];
};

export const SwiperImageGallery: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with 1

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Scrollbar, Pagination]} // Register the Scrollbar module
        scrollbar={{ hide: true }} // Configure the scrollbar
        onSlideChange={(swiper: SwiperClass) =>
          setCurrentIndex(swiper.activeIndex + 1)
        }
        pagination={{
          type: "fraction",
        }}
        onSwiper={(swiper: SwiperClass) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperImageGallery;
