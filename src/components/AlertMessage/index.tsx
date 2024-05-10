import React from "react";
import { Alert, AlertTitle } from "@mui/material";

type AlertMessageProps = {
  severity?: "success" | "info" | "warning" | "error";
  color?: "success" | "info" | "warning" | "error";
  title?: string;
  text: JSX.Element;
};

const AlertMessage: React.FC<AlertMessageProps> = ({
  severity = "success",
  color = "success",
  title,
  text,
}) => {
  return (
    <Alert severity={severity} color={color}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {text}
    </Alert>
  );
};

export default AlertMessage;
