import React, { useRef, useState } from "react";
import {
  Swiper as OriginalSwiper,
  SwiperSlide as OriginalSwiperSlide,
} from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { Swiper } from "swiper";

// Styled wrapper for Swiper
export const StyledSwiper = styled(OriginalSwiper)`
  width: 100%;
  height: 300px;
  margin: 20px auto;
`;

// Styled SwiperSlide
export const StyledSwiperSlide = styled(OriginalSwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Styled buttons container
export const AppendButtons = styled.div`
  text-align: center;
  margin-top: 20px;
  button {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #007aff;
    color: #007aff;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 10px;
    font-size: 13px;
  }
`;

// Import the Swiper class for type definition

export const Carousel: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);
  const appendNumber = useRef<number>(500);
  const prependNumber = useRef<number>(1);
  const [slides, setSlides] = useState<string[]>(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    if (swiperRef) {
      const newSlides = [
        `Slide ${prependNumber.current - 2}`,
        `Slide ${prependNumber.current - 1}`,
        ...slides,
      ];
      prependNumber.current -= 2;
      setSlides(newSlides);
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    }
  };

  const append = () => {
    setSlides([...slides, `Slide ${appendNumber.current + 1}`]);
    appendNumber.current += 1;
  };

  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 0);
    }
  };

  return (
    <>
      <StyledSwiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <StyledSwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>

      <AppendButtons>
        <button onClick={prepend} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={append} className="append-slides">
          Append Slide
        </button>
      </AppendButtons>
    </>
  );
};

export default Carousel;
