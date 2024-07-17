import React, { FC, FocusEventHandler } from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  width?: string;
  rounded?: string;
  border?: string;
  placeholder?: string;
  py?: string;
  value?: string;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: FocusEventHandler<HTMLInputElement>;
  touched?: boolean;
  errors?: string;
  name?: string;
}

const InputField: FC<InputFieldProps> = ({
  type = "text",
  label,
  width,
  rounded = "xl",
  border = "border",
  placeholder,
  py,
  disabled = false,
  value,
  handleChange,
  handleBlur,
  touched,
  errors,
  name,
}) => {
  return (
    <div className="flex-1">
      {label && <div>{label}</div>}
      <div
        className={`flex items-center px-2 border ${py || ""} ${
          width ? `sm:w-${width}` : "sm:w-custom-70%"
        } ${touched && errors ? "border-wine" : border} rounded-${rounded}`}
      >
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          className="w-custom-90% sm:w-full outline-none bg-transparent text-xl px-1 py-1"
        />
      </div>
    </div>
  );
};

export default InputField;
