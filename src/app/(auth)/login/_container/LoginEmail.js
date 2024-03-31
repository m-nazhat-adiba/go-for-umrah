import React from "react";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import style from "@/app/(auth)/login/style.module.scss";

const LoginEmail = ({ handleProgress, register, handleSubmit, errors }) => {
  const onSubmit = (data) => {
    handleProgress(data);
  };

  return (
    <React.Fragment>
      <header className={style.header}>
        <h1 className={style.heading}>Sign in to manage your property</h1>
        <p>Create an account to list and manage your property.</p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="loginEmail"
          name="email" // Set the name attribute for the input
          placeholder="Enter your email address"
          label="Email Address"
          register={register}
          validationSchema={{ required: "Email is required" }} // Register the input with React Hook Form
        />
        <Button type="submit">Continue</Button>
        <div className={style.divider} />
      </form>
    </React.Fragment>
  );
};

export default LoginEmail;
