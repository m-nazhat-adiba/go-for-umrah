"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import style from "@/app/(auth)/register/style.module.scss";
import RegisterEmail from "./_container/RegisterEmail";
import RegisterDetails from "./_container/RegisterDetails";
import RegisterPassword from "./_container/RegisterPassword";
import AuthFormImage from "@/components/layout/AuthFormImage";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Register() {
  const [progress, setProgress] = useState(1);
  const [payload, setPayload] = useState({});
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm();

  const handleSubmitEmail = (data) => {
    setPayload((prevState) => ({
      ...prevState,
      ...data,
    }));

    setProgress(2);
  };

  const handleSubmitDetails = (data) => {
    setPayload((prevState) => ({
      ...prevState,
      ...data,
    }));
    setProgress(3);
  };

  const handleBack = () => {
    setProgress(progress - 1);
  };

  const handleRegister = (data) => {
    setPayload((prevState) => ({
      ...prevState,
      ...data,
    }));
    // auth
  };

  const handleSwitchLogin = () => {
    router.push("/login");
  };

  const registerProgress = () => {
    switch (progress) {
      case 2:
        return (
          <RegisterDetails
            handleBack={handleBack}
            handleProgress={handleSubmitDetails}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          />
        );
      case 3:
        return (
          <RegisterPassword
            handleBack={handleBack}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            handleRegister={handleRegister}
          />
        );
      default:
        return (
          <RegisterEmail
            handleProgress={handleSubmitEmail}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        );
    }
  };

  useEffect(() => {
    console.log("payload", payload);
  }, [payload]);

  return (
    <AuthFormImage>
      <div className={`${style.register}`}>
        <div className={`${style.wrapper}`}>
          {registerProgress()}

          <section className={`${style.action}`}>
            {progress === 1 ? (
              <Button action={handleSwitchLogin} variant="outline">
                Login
              </Button>
            ) : null}

            <p>
              By signing in or creating an account, you agree with our{" "}
              <strong>Terms & conditions</strong> and{" "}
              <strong>Privacy statement</strong>
            </p>
          </section>
        </div>

        <footer className={`${style.copyright}`}>
          <p>All rights reserved. Copyright 2022 – GoForUmrah.com™</p>
        </footer>
      </div>
    </AuthFormImage>
  );
}

export default Register;
