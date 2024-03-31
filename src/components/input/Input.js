import React from "react";
import style from "@/components/input/style.module.scss";

const Input = ({
  id,
  label,
  placeholder,
  type,
  name,
  validationSchema,
  register,
}) => {
  return (
    <div>
      <label htmlFor={id} className={`${style.inputLabel}`}>
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        {...register(name, validationSchema)}
      />
    </div>
  );
};

export default Input;
