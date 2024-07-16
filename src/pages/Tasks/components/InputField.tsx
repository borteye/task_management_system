import React, { FC } from "react";
import { ChevronUpDownIcon, CalendarIcon } from "@heroicons/react/24/outline";

interface InputFieldProps {
  label?: string;
  type?: string;
  width?: string;
  rounded?: string;
  border?: string;
  placeholder?: string;
  py?: string;
}

const InputField: FC<InputFieldProps> = ({
  type,
  label,
  width,
  rounded,
  border,
  placeholder,
  py,
}) => {
  return (
    <div className="flex-1">
      <div>{label}</div>
      <div
        className={`flex items-center px-2 ${py}  ${
          width ? `sm-w-${width}` : "sm:w-custom-70%"
        } ${border ? `${border}` : "border"} rounded-${rounded}`}
      >
        <input
          type={type}
          placeholder={placeholder}
          className="w-custom-90% sm:w-full outline-none bg-transparent  text-xl  px-1 py-1 "
        />
      </div>
    </div>
  );
};

export default InputField;
