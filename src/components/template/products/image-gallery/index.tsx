import React, { useEffect, useState } from "react";
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
  images: string[];
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

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
    </GalleryContainer>
  );
};

export default ImageGallery;
