import React, { useRef } from "react";
import styled from "styled-components";
// Import Swiper React components and types
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";

// Import Swiper styles globally (as recommended by Swiper documentation)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Define the types for props
interface AppProps {
  slides: JSX.Element[]; // Array of JSX Elements for slides
}

// Styled component for the Swiper
const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    /* Applying padding to the left of the wrapper might affect all slides, hence commented out */
    padding-left: 24px;
  }
  .swiper {
    width: 100%;
    height: 100%;

    /* margin-left: 24px; */
  }
  .swiper-slide:first-child {
    margin-left: 24px; // Apply margin only to the first slide
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: #fff; */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

// The App component
export const Carousel: React.FC<AppProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      // Conditional logic to alter transform only for the first slide
      if (swiper.activeIndex === 0) {
        swiper.wrapperEl.style.transform = `translate3d(0px, 0, 0)`; // Adjust as necessary
      } else {
        // Reset the transform for all other slides
        swiper.wrapperEl.style.transform = "";
      }
    }
  };
  return (
    <>
      <StyledSwiper
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        onSlideChange={() => handleSlideChange()}
        cssMode={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        centeredSlides={false}
        modules={[Mousewheel, Keyboard]}
        slidesPerView={1.4} // Ensure only one slide is visible at a time
        spaceBetween={0} // No space between slides
        slidesOffsetBefore={24}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default Carousel;
