// Login.jsx
"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import style from "@/app/(auth)/login/style.module.scss";
import LoginEmail from "./_container/LoginEmail";
import LoginPassword from "./_container/LoginPassword";
import AuthFormImage from "@/components/layout/AuthFormImage";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";

function Login() {
  const [progress, setProgress] = useState(1);
  const [payload, setPayload] = useState({});

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm();

  const handleLogin = async (data) => {
    const updatedPayload = { ...payload, ...data };
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const response = await useLogin(updatedPayload);

    if (response.status_code === 200) {
      router.push("/dashboard");
    }
  };

  const handleInputEmail = (data) => {
    setPayload((prevState) => ({
      ...prevState,
      ...data,
    }));
    setProgress(2);
  };

  const handleSswitchRegister = () => {
    router.push("/register");
  };

  const registerProgress = () => {
    switch (progress) {
      case 2:
        return (
          <LoginPassword
            handleLogin={handleLogin}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            email={payload.email}
          />
        );
      default:
        return (
          <LoginEmail
            handleProgress={handleInputEmail}
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
      <div className={`${style.login}`}>
        <div className={`${style.wrapper}`}>
          {registerProgress()}

          <section className={`${style.action}`}>
            {progress === 1 ? (
              <Button action={handleSswitchRegister} variant="outline">
                Create your partner account
              </Button>
            ) : null}

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

export default Login;
