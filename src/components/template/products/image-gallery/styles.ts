import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 1050px;
  max-width: 500px;
  height: auto;
  margin-bottom: 20px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
