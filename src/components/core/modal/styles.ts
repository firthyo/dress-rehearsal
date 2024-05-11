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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  visibility: ${({ isPopup }) => (isPopup ? "hidden" : "visible")};
`;

export const ModalContainer = styled.div<{ noPadding?: boolean }>`
  background: white;
  border-radius: 8px;
  padding: ${({ noPadding }) => (noPadding ? "0" : "0px")};
  /* props width */
  /* width: 100%; */
  /* height: 900px; */
  /* max-width: 500px; */
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ModalBody = styled.div``;
