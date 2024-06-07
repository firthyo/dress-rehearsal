import styled from "styled-components";
import {
  Swiper as OriginalSwiper,
  SwiperSlide as OriginalSwiperSlide,
} from "swiper/react";
import "swiper/css";

// Styled wrapper for Swiper
export const StyledSwiper = styled(OriginalSwiper)`
  width: 100%;
  height: 300px; // Override to 300px high instead of 100% from initial styling
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
