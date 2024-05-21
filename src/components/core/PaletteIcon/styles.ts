import styled from "styled-components";
import { PaletteBackgroundProps } from "./PaletteBankground";

type Props = {
  width?: string;
  height?: string;
  color?: string;
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Outer = styled.div<Props>`
  background-color: ${(props) => props.theme.colors.primary};

  opacity: 0.1;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Inner = styled.div<Props>`
  background-color: ${(props) => props.theme.colors.primary};

  opacity: 0.4;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledMailFill = styled.div`
  position: absolute;
  z-index: 1; // Ensures it's on top if needed
  top: 50%; // Center vertically
  left: 50%; // Center horizontally
  transform: translate(-50%, -50%); // Adjust position to center
`;

export const PaletteBackgroundWrapper = styled.div<PaletteBackgroundProps>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredContent = styled.div`
  position: absolute;
  top: 33px;
`;
