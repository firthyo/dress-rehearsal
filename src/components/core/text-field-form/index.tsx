import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

type TextFieldprops = {
  variant: "filled" | "outlined" | "standard";
  label: string;
  name: string;
  type?: "number" | "password" | "text";
  inputAdornment?: JSX.Element;
  fullWidth?: boolean;
} & React.ComponentPropsWithoutRef<typeof TextField>;

export const TextFieldForm = React.forwardRef<HTMLInputElement, TextFieldprops>(
  (props, ref) => {
    const {
      variant,
      label,
      name,
      type = "text",
      fullWidth = true,
      inputAdornment,
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
        InputProps={{
          style: { borderRadius: 12 },
          endAdornment: (
            <InputAdornment position="end">{inputAdornment}</InputAdornment>
          ),
        }}
        {...otherProps} // Ensure all other props are included
      />
    );
  }
);

export default TextFieldForm;
