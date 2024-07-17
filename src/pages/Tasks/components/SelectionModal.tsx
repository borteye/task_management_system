import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import React, { FC, FocusEventHandler } from "react";
import { TaskStage } from "../../../shared/types/constants";

interface SelectionModalProps {
  label?: string;
  rounded?: string;
  width?: string;
  options?: string[];
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur?: FocusEventHandler<HTMLSelectElement> | undefined;
  touched?: boolean;
  errors?: string;
  name?: string;
  value?: string;
}

const SelectionModal: FC<SelectionModalProps> = ({
  label,
  rounded,
  width,
  options,
  handleChange,
  handleBlur,
  touched,
  errors,
  name,
  value,
}) => {
  return (
    <div className="flex-1">
      <div>{label}</div>
      <div
        className={`flex items-center border
    ${width ? `sm-w-${width}` : "sm:w-custom-70%"} 
    rounded-${rounded} px-2 
    ${touched && errors ? "border-wine" : "border"}`}
      >
        <select
          value={value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-custom-90% sm:w-full outline-none py-2"
        >
          {options &&
            options.map((option) => <option value={option}>{option}</option>)}
        </select>
        <ChevronUpDownIcon className="size-7 md:size-7 text-soft_gray  " />
      </div>
    </div>
  );
};

export default SelectionModal;
