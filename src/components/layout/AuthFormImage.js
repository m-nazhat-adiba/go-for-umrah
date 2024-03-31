import React from "react";
import style from "@/components/layout/style.module.scss";

const AuthFormImage = ({ children }) => {
  return (
    <div className={`${style.container}`}>
      {children}
      <div className={`${style.image}`}></div>
    </div>
  );
};

export default AuthFormImage;
