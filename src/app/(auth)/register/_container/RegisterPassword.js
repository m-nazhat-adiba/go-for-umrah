import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";
import style from "@/app/(auth)/style.module.scss";
import { Icon } from "@iconify/react";

const RegisterPassword = ({
  handleBack,
  register,
  handleSubmit,
  errors,
  handleRegister,
}) => {
  const onSubmit = (data) => {
    handleRegister({ password: data.password });
  };

  return (
    <React.Fragment>
      <div onClick={handleBack}>
        <Icon icon="lucide:chevron-left" /> <span>Back</span>
      </div>

      <header className={`${style.header}`}>
        <h1 className={style.heading}>Create password</h1>
        <p>
          Use a minimum of 10 characters, including uppercase letters, lowercase
          letters and numbers.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          label="Password"
          register={register}
          name="password"
          validationSchema={{ required: "Password is required" }}
        />
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Enter your confirm password"
          label="Confirm Password"
          register={register}
          name="confirmPassword"
          validationSchema={{ required: "Password is required" }}
        />
        <Button type="submit">Create account</Button>
        <div className={`${style.divider}`} />
      </form>
    </React.Fragment>
  );
};

export default RegisterPassword;
