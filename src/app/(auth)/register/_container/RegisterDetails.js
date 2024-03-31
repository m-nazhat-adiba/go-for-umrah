"use client";

import React, { useEffect, useState } from "react";
import style from "@/app/(auth)/style.module.scss";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import { Icon } from "@iconify/react";
import InputSwitch from "@/components/input/InputSwitch";

const RegisterDetails = ({
  handleProgress,
  handleBack,
  register,
  handleSubmit,
  errors,
}) => {
  const [region, setRegion] = useState("");

  const onSubmit = (data) => {
    const payload = {
      firstname: data.firstName,
      lastname: data.lastName,
      username: data.userName,
      phone: `${region}${data.phoneNumber}`,
    };
    handleProgress(payload);
  };

  useEffect(() => {
    console.log("data", region);
  }, [region]);

  return (
    <React.Fragment>
      <div onClick={handleBack}>
        <Icon icon="lucide:chevron-left" /> <span>Back</span>
      </div>

      <header className={`${style.header}`}>
        <h1 className={style.heading}>Contact details</h1>
        <p>
          Create your partner account create an account to list and manage your
          property.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          label="First Name"
          name="firstName"
          register={register}
          validationSchema={{ required: "Name is required" }}
        />
        <Input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          label="Last Name"
          name="lastName"
          register={register}
          validationSchema={{ required: "Name is required" }}
        />
        <Input
          type="text"
          id="username"
          placeholder="Enter your username"
          label="Username"
          name="userName"
          register={register}
          validationSchema={{ required: "User name is required" }}
        />
        <InputSwitch
          listData={["+62", "+88"]}
          onChange={setRegion}
          id="phoneNumber"
          placeholder="(888)-8888-8888"
          register={register}
          name="phoneNumber"
          validationSchema={{ required: "User name is required" }}
          label="Phone Number"
        />

        <Button type="submit">Continue</Button>
        <div className={`${style.divider}`} />
      </form>
    </React.Fragment>
  );
};

export default RegisterDetails;
