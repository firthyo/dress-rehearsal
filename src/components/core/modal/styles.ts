import styled from "styled-components";

export const ModalBackground = styled.div<{ isPopup?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(7.5px);
  z-index: 2;
  visibility: ${({ isPopup }) => (isPopup ? "hidden" : "visible")};
`;

export const ModalContainer = styled.div<{
  noPadding?: boolean;
  borderRadius?: string;
}>`
  background: white;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
  padding: ${({ noPadding }) => (noPadding ? "0" : "0px")};
  /* props width */
  /* width: 100%; */
  /* height: 900px; */
  /* max-width: 500px; */
  z-index: 10;
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ModalBody = styled.div``;

export const IconWrapper = styled.div`
  /* border-radius: 50%;
  width: 56px;
  height: 56px; */
  /* background-color: aliceblue; */

  /* backdrop-filter: blur(30px); */

  position: absolute;
  top: 50px;
  right: 50px;
`;
