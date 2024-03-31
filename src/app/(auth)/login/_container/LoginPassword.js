import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";
import style from "@/app/(auth)/login/style.module.scss";

const LoginPassword = ({
  handleLogin,
  register,
  handleSubmit,
  errors,
  email,
}) => {
  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <React.Fragment>
      <header className={`${style.header}`}>
        <h1 className={style.heading}>Enter password</h1>
        <p>
          UEnter your password for <strong>{email}.</strong>
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          label="Password"
          name="password"
          register={register}
          validationSchema={{ required: "Password is required" }}
        />
        <a>
          <strong>Forgot password?</strong>
        </a>
        <Button type="submit">Continue</Button>
        <div className={`${style.divider}`} />
      </form>
    </React.Fragment>
  );
};

export default LoginPassword;
