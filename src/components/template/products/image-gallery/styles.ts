import styled from "styled-components";
type NavigationButtonProps = {
  position: "left" | "right";
};

export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 4px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  overflow-y: auto;
`;

export const Thumbnail = styled.img`
  width: 105px;
  height: auto;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  &:hover {
    opacity: 1;
  }
`;
export const NavigationButtonWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  right: 20px;
`;

export const NavigationButton = styled.button<NavigationButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  cursor: pointer;
  /* padding: 10px; */
  font-size: 16px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
