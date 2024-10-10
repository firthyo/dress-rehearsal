// CustomizedDialogs.tsx
import * as React from "react";
import { useContext } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { CloseIcon } from "assets/icons/common/close";
import { BootstrapDialog } from "./styles";
import { Button } from "../button";
import { ModalContext } from "context/ModalContext";

interface DialogAction {
  text: string;
  onClick?: () => void;
  autoFocus?: boolean;
}

interface CustomizedDialogsProps {
  title?: JSX.Element;
  body: JSX.Element;
  dialogActions?: DialogAction[];
  isPadding?: boolean;
  customClose?(): void;
}

export const CustomizedDialogs: React.FC<CustomizedDialogsProps> = ({
  title,
  body,
  dialogActions,
  isPadding = false,
  customClose,
}) => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("CustomizedDialogs must be used within a ModalProvider");
  }
  const { hideModal } = modalContext;

  const handleCustomClose = () => {
    customClose && customClose();
    hideModal();
  };

  return (
    <BootstrapDialog
      onClose={handleCustomClose}
      aria-labelledby="customized-dialog-title"
      open={true}
      isPadding={isPadding}
    >
      {title && (
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
      )}
      <IconButton
        aria-label="close"
        onClick={handleCustomClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ overflow: "hidden" }}>{body}</DialogContent>
      {dialogActions && (
        <DialogActions>
          {dialogActions.map((action, index) => (
            <Button
              key={index}
              autoFocus={action.autoFocus || false}
              onClick={() => {
                action.onClick?.();
                hideModal();
              }}
            >
              {action.text}
            </Button>
          ))}
        </DialogActions>
      )}
    </BootstrapDialog>
  );
};
