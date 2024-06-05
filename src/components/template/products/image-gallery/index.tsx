import React, { useState } from "react";
import {
  GalleryContainer,
  MainImage,
  Thumbnail,
  ThumbnailContainer,
} from "./styles";

type ImageGalleryProps = {
  images: string[]; // Updated to accept an array of strings
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  console.log("this is images", images);
  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  return (
    <GalleryContainer>
      <MainImage src={currentImage} />
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            onClick={() => setCurrentImage(image)}
            style={{ opacity: currentImage === image ? 1 : 0.6 }}
          />
        ))}
      </ThumbnailContainer>
    </GalleryContainer>
  );
};

export default ImageGallery;
