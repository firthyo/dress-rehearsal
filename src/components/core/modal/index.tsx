import React from "react";

import {
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalHeader,
} from "./styles";

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
};

const Modal: React.FC<MainButtonProps> = ({
  title,
  cancelCloseOnClick = false,
  content,
  confirmBeforeClose = false,
  header,
  noPadding = false,
  onAfterClose,
  icon,
  isPopup = false,
}) => {
  const handleClose = () => {
    if (
      confirmBeforeClose &&
      !window.confirm("Are you sure you want to close?")
    ) {
      return;
    }
    onAfterClose?.();
  };

  const handleClickBackground = () => {
    if (cancelCloseOnClick) {
      handleClose();
    }
  };

  return (
    <ModalBackground onClick={handleClickBackground} isPopup={isPopup}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        noPadding={noPadding}
      >
        {header && <ModalHeader>{header}</ModalHeader>}
        <ModalBody>{content}</ModalBody>
        {title && <ModalHeader>{title}</ModalHeader>}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
