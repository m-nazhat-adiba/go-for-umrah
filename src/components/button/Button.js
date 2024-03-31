import React from "react";

const VARIANTS = {
  primary: "btn btn-primary text-white w-100",
  outline: "btn btn-outline-primary w-100",
  link: "btn btn-link",
};

const SIZES = {
  normal: "",
  large: "btn-lg",
  small: "btn-sm",
};

const Button = ({
  children,
  variant = "primary",
  size = "normal",
  type = "button",
  action,
}) => {
  return (
    <button
      onClick={action}
      type={type}
      className={`${VARIANTS[variant]} ${SIZES[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
