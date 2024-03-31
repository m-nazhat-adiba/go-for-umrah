import EmailRedirect from "@/components/common/EmailRedirect";
import React from "react";
import style from "@/app/(auth)/register/style.module.scss";

function VerifyRegister() {
  return (
    <div className={`${style.verifyWrapper}`}>
      <EmailRedirect />
    </div>
  );
}

export default VerifyRegister;
