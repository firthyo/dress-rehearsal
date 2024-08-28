import { InputAdornment, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TextFieldprops = {
  variant: "filled" | "outlined" | "standard";
  label: string;
  name: string;
  type?: "number" | "password" | "text";
  inputAdornment?: JSX.Element;
  fullWidth?: boolean;
  required?: boolean;
  validationType?:
    | "email"
    | "creditcard"
    | "cvv"
    | "exp_mm"
    | "exp_yy"
    | "text";
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
      required = true,
      inputAdornment,
      validationType,
      ...otherProps
    } = props;

    const getValidationRules = (validationType: string | undefined) => {
      switch (validationType) {
        case "email":
          return {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          };
        case "creditcard":
          return {
            pattern: {
              value: /^[0-9]{13,19}$/,
              message: "Invalid credit card number",
            },
          };
        case "cvv":
          return {
            pattern: {
              value: /^[0-9]{3,4}$/,
              message: "Invalid CVV",
            },
          };
        case "exp_mm":
          return {
            pattern: {
              value: /^(0[1-9]|1[0-2])$/,
              message: "Invalid expiration month",
            },
          };
        case "exp_yy":
          return {
            pattern: {
              value: /^[0-9]{2}$/,
              message: "Invalid expiration year",
            },
          };
        default:
          return {};
      }
    };

    const {
      control,
      formState: { errors },
    } = useFormContext();

    const validationRules = {
      required: required ? "This field is required" : false,
      ...getValidationRules(validationType),
    };

    const getHelperText = (error: any) => {
      return typeof error?.message === "string" ? error.message : "";
    };

    return (
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <StyledTextField
            {...field}
            id={`${label}-${variant}-id`}
            label={label}
            variant={variant}
            type={
              validationType === "creditcard" ||
              validationType === "cvv" ||
              validationType === "exp_mm" ||
              validationType === "exp_yy"
                ? "text"
                : type
            }
            fullWidth={fullWidth}
            inputRef={ref}
            error={!!errors[name]}
            helperText={getHelperText(errors[name])}
            InputProps={{
              style: { borderRadius: 0 },
              endAdornment: inputAdornment && (
                <InputAdornment position="end">{inputAdornment}</InputAdornment>
              ),
            }}
            {...otherProps} // Ensure all other props are included
          />
        )}
      />
    );
  }
);

export default TextFieldForm;
