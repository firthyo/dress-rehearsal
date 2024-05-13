import React, { useCallback, useState } from "react";
import { ReactNode } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "components/core/modal";

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<any>({});

  const showModal = useCallback((content: ReactNode, props: any = {}) => {
    setModalProps({ ...props, content });
    setIsModalOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isModalOpen && (
        <Modal {...modalProps} onAfterClose={() => setIsModalOpen(false)} />
      )}
    </ModalContext.Provider>
  );
};
