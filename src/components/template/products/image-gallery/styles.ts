import styled from "styled-components";

type NavigationButtonProps = {
  position: "left" | "right";
};

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    gap: 24px;
  }
`;

export const MainImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / -1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-bottom: 16px;
  grid-row: 2;
  grid-column: 1 / -1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: column;
    overflow-y: auto;
    margin-bottom: 0;
    height: auto;
    grid-row: 1;
    grid-column: 1;
    align-items: end;
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  margin-right: 8px;

  &:hover {
    opacity: 1;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 105px;
    height: 105px;
    margin-bottom: 8px;
    margin-right: 0;
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
  font-size: 16px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
