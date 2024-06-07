import React, { useState } from "react";
import {
  GalleryContainer,
  MainImage,
  Thumbnail,
  ThumbnailContainer,
  NavigationButton,
  MainImageWrapper,
  NavigationButtonWrapper,
} from "./styles";

import { ArrowRight, ArrowLeft } from "assets/icons";
import { InlineWrapper, Spacer } from "components/core";

type ImageGalleryProps = {
  images: string[]; // Updated to accept an array of strings
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <GalleryContainer>
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            onClick={() => setCurrentImageIndex(index)}
            style={{ opacity: currentImage === image ? 1 : 0.6 }}
          />
        ))}
      </ThumbnailContainer>
      <Spacer x={24} />
      <MainImageWrapper>
        <MainImage src={currentImage} />

        <NavigationButtonWrapper>
          <InlineWrapper>
            <NavigationButton position="left" onClick={goToPrevImage}>
              <ArrowLeft size={32} />
            </NavigationButton>
            <Spacer x={12} />
            <NavigationButton position="right" onClick={goToNextImage}>
              <ArrowRight size={32} />
            </NavigationButton>
          </InlineWrapper>
        </NavigationButtonWrapper>
      </MainImageWrapper>
    </GalleryContainer>
  );
};

export default ImageGallery;
