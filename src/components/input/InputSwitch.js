"use client";

import React, { useState } from "react";
import style from "@/components/input/style.module.scss";

const InputSwitch = ({
  label = "Label",
  id,
  register,
  errors,
  validationSchema,
  name,
  placeholder,
  listData, // List data passed as prop
  onChange, // Function to handle input change
}) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update selected option
    onChange(option); // Pass selected option to parent component
  };

  return (
    <div>
      <label htmlFor={id} className={`${style.inputLabel}`}>
        {label}
      </label>

      <div className="input-group">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedOption || "+62"}{" "}
          {/* Display selected option or default value */}
        </button>
        <ul className="dropdown-menu">
          {/* Render list data dynamically */}
          {listData.map((item, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleOptionClick(item)} // Handle option click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <input
          type="text"
          id={id}
          className="form-control"
          placeholder={placeholder}
          name={name}
          {...register(name, validationSchema)}
          aria-label="Text input with dropdown button"
        />
      </div>
    </div>
  );
};

export default InputSwitch;
