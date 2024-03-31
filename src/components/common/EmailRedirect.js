"use client";

import React from "react";
import style from "@/components/common/style.module.scss";
import Button from "../button/Button";
import { Icon } from "@iconify/react";

const EmailRedirect = () => {
  return (
    <div className={`${style.redirectWrapper}`}>
      <Icon
        icon="icon-park-solid:check-one"
        style={{ color: "black", width: "48px", height: "48px" }}
      />
      <div>
        <h1>Verify your email address</h1>
        <p>
          We sent you an email with a verification link to
          <strong>fahmiauliyarohman@gmail.com.</strong> To confirm your account
          please follow the link in the email we just sent.
        </p>
      </div>

      <div className={`${style.buttonWrapper}`}>
        <Button>Open your email</Button>
      </div>
    </div>
  );
};

export default EmailRedirect;
