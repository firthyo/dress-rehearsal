import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import TextFieldForm from "components/text-field";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("this is data", data); // You can replace this with a call to your backend API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldForm variant="outlined" label="Email" {...register("email")} />
      <Button type="submit">Test Submit</Button>
    </form>
  );
};

export default LoginForm;
