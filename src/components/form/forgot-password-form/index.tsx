import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "context/AuthContext";

import { Typography, Spacer, Button, AlertMessage } from "components/core";
import TextFieldForm from "components/core/text-field-form";

import { FormContainer, RowWrapper, TextWrapper } from "../styles";

type ForgotPasswordFormProps = {
  forgotPassword: (options: { variables: { email: string } }) => Promise<any>;
  loading: boolean;
  error: any; // Consider using a more specific error type, e.g., ApolloError
};

type ForgotPasswordVariables = {
  email: string;
};
export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  forgotPassword,
  loading,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordVariables>();
  const methods = useForm();
  const { loginAuth, authStage, setAuthStage } = useAuth();
  const onSubmit = async (data: ForgotPasswordVariables) => {
    try {
      // Calling the forgotPassword mutation function passed via props
      const result = await forgotPassword({ variables: { email: data.email } });

      if (result.data.forgotPassword.success) {
        setAuthStage("RESET_PASSWORD");
      }
    } catch (error) {
      console.error("Error sending forgot password email:", error);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!error && <Spacer y={24} />}

        <TextWrapper>
          {error ? (
            <AlertMessage
              severity="error"
              color="error"
              text={
                <>
                  The email address and password you entered doesn't match our
                  records. Please try again or reset your password.
                </>
              }
            />
          ) : (
            <div>
              <Typography variant="h4" color={"primary"}>
                Forgot password ?
              </Typography>
              <Spacer y={8} />
              <Typography color={"primary"}>
                No worries! Just give us your email address, and we'll send you
                a link to reset your password.
              </Typography>
            </div>
          )}
        </TextWrapper>
        <Spacer y={24} />
        <FormContainer>
          <RowWrapper>
            <TextFieldForm
              variant="outlined"
              label="Email"
              {...register("email", { required: true })}
            />
            {/* <TextFieldForm
          variant="outlined"
          label="Email"
          {...register("email", { required: true })}
        /> */}
          </RowWrapper>

          <RowWrapper>
            <Button type="submit">{"Reset password"}</Button>
          </RowWrapper>
        </FormContainer>
      </form>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
