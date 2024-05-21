import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from "graphql/user/authMutation";
import {
  Typography,
  Button,
  Spacer,
  TextFieldForm,
  AlertMessage,
} from "components/core";
import { FormContainer, RowWrapper, TextWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";

import { VisibilityOffIcon, VisibilityIcon } from "assets/icons";

type ResetFormData = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetFormData>();
  const newPassword = watch("newPassword");
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false,
  });

  const handleClickShowPassword = (field: "new" | "confirm") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { token } = useParams();
  console.log("this is token", token);
  const [resetPassword, { loading, error }] = useMutation(
    RESET_PASSWORD_MUTATION,
    {
      onCompleted: (data) => {
        if (data.resetPassword.success) {
          console.log("Password reset successful:", data.resetPassword.message);
          // Optionally redirect user or show success message
        }
      },
    }
  );
  const onSubmit: SubmitHandler<ResetFormData> = async (data) => {
    console.log("Submitting form with data:", data);
    if (data.newPassword !== data.confirmPassword) {
      console.error("Passwords do not match.");
      alert("Passwords do not match!");
      return;
    }
    if (!token) {
      console.error("Reset token is missing or invalid.");
      alert("Reset token is missing or invalid.");
      return;
    }
    console.log("Attempting to reset password with token:", token);
    try {
      const response = await resetPassword({
        variables: { newPassword: data.newPassword, token },
      });
      console.log("Reset password response:", response);
    } catch (error) {
      console.error("Failed to reset password:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextWrapper>
        <Typography variant="h2" color="primary">
          Reset Your Password
        </Typography>
      </TextWrapper>
      <Spacer y={24} />
      <FormContainer>
        <RowWrapper>
          <TextFieldForm
            variant="outlined"
            label="New Password"
            type={showPassword.new ? "text" : "password"}
            {...register("newPassword", {
              required: "New password is required",
            })}
            inputAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("new")}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword.new ? (
                  <VisibilityOffIcon size={20} />
                ) : (
                  <VisibilityIcon size={20} />
                )}
              </IconButton>
            }
          />
        </RowWrapper>
        <RowWrapper>
          <TextFieldForm
            variant="outlined"
            label="Confirm New Password"
            type={showPassword.confirm ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
            inputAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("confirm")}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword.confirm ? (
                  <VisibilityOffIcon size={20} />
                ) : (
                  <VisibilityIcon size={20} />
                )}
              </IconButton>
            }
          />
        </RowWrapper>
        <Spacer y={24} />
        <RowWrapper>
          <Button type="submit" disabled={loading}>
            Reset Password!
          </Button>
        </RowWrapper>
      </FormContainer>
      {error && (
        <AlertMessage
          severity="error"
          color="error"
          title={"error"}
          text={<div>`Error`</div>}
        />
      )}
    </form>
  );
};

export default ResetPasswordForm;
