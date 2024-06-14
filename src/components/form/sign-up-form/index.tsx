import React, { useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

import GoogleIcon from "assets/icons/social/GoogleIcon";

import TextFieldForm from "components/core/text-field-form";
import Spacer from "components/core/spacer";
import Button from "components/core/button";
import { Typography } from "components/core/typography";
import DiviverWithText from "components/core/divider-with-text";

import {
  FormContainer,
  Link,
  RowWrapper,
  RowWrapperMultipleCol,
  TextWrapper,
} from "../styles";

import { SignUpFormType } from "../type";

import { ApolloError } from "apollo-server";

interface SignUpProps {
  registerUser: (variables: SignUpVariables) => Promise<any>;
  loading: boolean;
  data?: SignUpResponse | any;
  error?: ApolloError | any;
}

// Define these types based on your actual data structure
interface SignUpVariables {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

interface SignUpResponse {
  register: {
    success: boolean;
    message: string;
  };
}

export const SignUpForm: React.FC<SignUpProps> = ({
  registerUser,
  loading,
  data,
  error,
}) => {
  const { register, handleSubmit } = useForm<SignUpVariables>();

  const onSubmit: SubmitHandler<SignUpFormType> = async (formData) => {
    try {
      const response = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        terms: formData.terms,
      });
      console.log("this is response", response);

      if (response.register.success) {
        console.log("Registration successful", response.register.success);
      } else {
        throw new Error("Registration failed: Invalid server response");
      }
    } catch (err) {
      console.error("Registration error", err);
      if (error && error.graphQLErrors && error.graphQLErrors.length > 0) {
        console.error("GraphQL Error:", error.graphQLErrors[0].message);
      }
    }
  };

  const TermsLabel = () => {
    return (
      <div>
        I agree to the <Link href="/terms-of-service">Terms of Service</Link>
        and <Link href="/privacy-notice">Privacy Notice</Link>
      </div>
    );
  };

  const [displayLoading, setDisplayLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setDisplayLoading(true);
      setTimeout(() => setDisplayLoading(false), 9000);
    }
  }, [loading]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <Spacer y={8} />
          <TextWrapper>
            <Typography variant="h4" customColor={"#684F3B"}>
              Create new account
            </Typography>
          </TextWrapper>
          <Spacer y={16} />
          <FormContainer>
            <RowWrapperMultipleCol>
              <TextFieldForm
                variant="outlined"
                label="First name"
                {...register("firstName", { required: true })}
              />
              <Spacer x={12} />
              <TextFieldForm
                variant="outlined"
                label="Last name"
                {...register("lastName", { required: true })}
              />
            </RowWrapperMultipleCol>
            <RowWrapper>
              <TextFieldForm
                variant="outlined"
                label="Email"
                {...register("email", { required: true })}
              />
            </RowWrapper>
            <RowWrapper>
              <TextFieldForm
                variant="outlined"
                label="Password"
                type={"password"}
                {...register("password", { required: true })}
              />
            </RowWrapper>

            <Spacer y={16} />
            <DiviverWithText label={"or"} />
            <Spacer y={16} />

            <RowWrapper>
              <Button type="button" variant="outlined">
                <GoogleIcon width="24" height="24" />
                <Spacer x={8} />
                {"Sign up with Google"}
              </Button>
            </RowWrapper>

            <RowWrapper>
              <FormControlLabel
                control={<Checkbox defaultChecked {...register("terms")} />}
                label={<TermsLabel />}
              />
            </RowWrapper>

            <RowWrapper>
              <Button type="submit">{"Create account!"}</Button>
            </RowWrapper>
          </FormContainer>
        </>
      </form>
    </>
  );
};

export default SignUpForm;
