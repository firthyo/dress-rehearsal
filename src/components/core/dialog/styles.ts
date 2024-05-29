import styled from "styled-components";
import Dialog, { DialogProps } from "@mui/material/Dialog";

interface BootstrapDialogProps extends DialogProps {
  isPadding?: boolean;
}

export const BootstrapDialog = styled(Dialog)<BootstrapDialogProps>(
  ({ theme, isPadding }) => ({
    "& .MuiDialogContent-root": {
      margin: "0px",
      padding: isPadding ? 20 : "0px", // Conditionally apply padding
    },
    "& .MuiDialogActions-root": {
      padding: isPadding ? 20 : "0px",
    },

    "& .MuiDialog-paper": {
      maxWidth: "100%",
    },
  })
);
