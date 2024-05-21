import React from "react";

import {
  IconWrapper,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalHeader,
} from "./styles";
import CloseIcon from "assets/icons/common/close";

type MainButtonProps = {
  title?: string;
  cancelCloseOnClick?: boolean;
  content: React.ReactNode;
  confirmBeforeClose?: boolean;
  header?: React.ReactNode;
  noPadding?: boolean;
  onAfterClose?: () => void;
  icon?: JSX.Element;
  isPopup?: boolean;
  borderRadius?: string;
};

export const Modal: React.FC<MainButtonProps> = ({
  title,
  cancelCloseOnClick = false,
  content,
  confirmBeforeClose = false,
  header,
  noPadding = false,
  borderRadius = "0px",
  onAfterClose,
  icon,
  isPopup = false,
}) => {
  const handleClose = () => {
    // if (
    //   confirmBeforeClose &&
    //   !window.confirm("Are you sure you want to close?")
    // ) {
    //   return;
    // }
    onAfterClose?.();
  };

  const handleClickBackground = () => {
    if (cancelCloseOnClick) {
      handleClose();
    }
  };

  return (
    <ModalBackground onClick={handleClickBackground} isPopup={isPopup}>
      {/* <IconWrapper>
          <CloseIcon size={36} />
        </IconWrapper> */}
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        noPadding={noPadding}
        borderRadius={borderRadius}
      >
        {header && <ModalHeader>{header}</ModalHeader>}
        <ModalBody>{content}</ModalBody>
        {title && <ModalHeader>{title}</ModalHeader>}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
