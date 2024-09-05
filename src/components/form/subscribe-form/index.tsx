import { Button, Spacer, TextFieldForm } from "components/core";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

export const SubscribeForm = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextFieldForm
          name="email"
          label="Email"
          variant="outlined"
          validationType="email"
          fullWidth
          required
        />
        <Spacer y={24}></Spacer>
        <Button
          type="submit" // Make sure the button type is "submit"
          color="primary"
          style={{ borderRadius: "none", width: "100%", height: 56 }}
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default SubscribeForm;
