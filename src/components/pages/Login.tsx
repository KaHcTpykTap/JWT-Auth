import React, { FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginContainer } from "./styles/LoginStyles";

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)} className="lc-form">
        <input {...register("firstName")} />
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </LoginContainer>
  );
};

export default Login;
