"use client";

import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React, { useEffect, useState } from "react";
import style from "@/app/(auth)/register/style.module.scss";
import { useForm } from "react-hook-form";
import AuthFormImage from "@/components/layout/AuthFormImage";

function ResetPassword() {
  const [payload, setPayload] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setPayload((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  useEffect(() => {
    console.log("payload", payload);
  }, [payload]);

  return (
    <AuthFormImage>
      <div className={`${style.register}`}>
        <div className={`${style.wrapper}`}>
          <header className={`${style.header}`}>
            <h1 className={style.heading}>Forgot your password?</h1>
            <p>
              Confirm your username and we&apos:ll send you a link to reset your
              password..
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              id="registerEmail"
              placeholder="Enter your email address"
              label="Email Address"
              name="email"
              register={register}
              validationSchema={{ required: "Email is required" }}
            />
            <Button type="submit">Continue</Button>
            <div className={`${style.divider}`} />
          </form>

          <section className={`${style.action}`}>
            <p>
              By signing in or creating an account, you agree with our{" "}
              <strong>Terms & conditions</strong> and{" "}
              <strong>Privacy statement</strong>
            </p>
          </section>
        </div>

        <footer>
          <p className={`${style.copyright}`}>
            All rights reserved. Copyright 2022 – GoForUmrah.com™
          </p>
        </footer>
      </div>
    </AuthFormImage>
  );
}

export default ResetPassword;
