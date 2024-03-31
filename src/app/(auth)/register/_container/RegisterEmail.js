import React from "react";
import style from "@/app/(auth)/register/style.module.scss";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

const RegisterEmail = ({ handleProgress, register, handleSubmit, errors }) => {
  const onSubmit = (data) => {
    handleProgress(data);
  };

  return (
    <React.Fragment>
      <header className={`${style.header}`}>
        <h1 className={style.heading}>Create your partner account</h1>
        <p>Create an account to list and manage your property.</p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="registerEmail"
          name="email" // Set the name attribute for the input
          placeholder="Enter your email address"
          label="Email Address"
          register={register}
          validationSchema={{ required: "Email is required" }} // Register the input with React Hook Form
        />
        <Button type="submit">Continue</Button>
        <div className={`${style.divider}`} />
      </form>
    </React.Fragment>
  );
};

export default RegisterEmail;
