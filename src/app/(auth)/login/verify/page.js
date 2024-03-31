import EmailRedirect from "@/components/common/EmailRedirect";
import React from "react";
import style from "@/app/(auth)/login/style.module.scss";

function VerifyRegister() {
  return (
    <div className={`${style.verifyWrapper}`}>
      <EmailRedirect />
    </div>
  );
}

export default VerifyRegister;
