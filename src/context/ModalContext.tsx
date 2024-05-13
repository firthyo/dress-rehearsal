// ModalContext.tsx
import React, { createContext, useContext } from "react";
import { ReactNode } from "react";

export type ModalContextType = {
  showModal: (content: ReactNode, props?: any) => void;
  hideModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
