import { InputAdornment, styled } from "@mui/material";
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

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "#ffffff",
  },
  "& .MuiInputBase-input:-webkit-autofill": {
    backgroundColor: "#ffffff !important",
    boxShadow: "0 0 0 100px #ffffff inset",
  },
});

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
      <StyledTextField
        id={`${label}-${variant}-id`}
        label={label}
        variant={variant}
        name={name}
        type={type}
        fullWidth={fullWidth}
        inputRef={ref}
        InputProps={{
          style: { borderRadius: 0 },
          endAdornment: inputAdornment && (
            <InputAdornment position="end">{inputAdornment}</InputAdornment>
          ),
        }}
        {...otherProps} // Ensure all other props are included
      />
    );
  }
);

export default TextFieldForm;
