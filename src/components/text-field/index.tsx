import TextField from "@mui/material/TextField";
import React from "react";

type TextFieldprops = {
  variant: "filled" | "outlined" | "standard";
  label: string;
  name: string;
  type?: "number" | "password" | "text";
  fullWidth?: boolean;
} & React.ComponentPropsWithoutRef<typeof TextField>;

const TextFieldForm = React.forwardRef<HTMLInputElement, TextFieldprops>(
  (props, ref) => {
    const {
      variant,
      label,
      name,
      type = "text",
      fullWidth = true,
      ...otherProps
    } = props;

    return (
      <TextField
        id={`${label}-${variant}-id`}
        label={label}
        variant={variant}
        name={name}
        type={type}
        fullWidth={fullWidth}
        inputRef={ref}
        InputProps={{ style: { borderRadius: 12 } }}
        {...otherProps} // Ensure all other props are included
      />
    );
  }
);

export default TextFieldForm;
