import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

interface SelectionModalProps {
  label?: string;
  rounded?: string;
  width?: string;
}

const SelectionModal: FC<SelectionModalProps> = ({ label, rounded, width }) => {
  return (
    <div className="flex-1">
      <div>{label}</div>
      <div
        className={`flex items-center ${
          width ? `sm-w-${width}` : "sm:w-custom-70%"
        } rounded-${rounded} px-2  border`}
      >
        <select
          name=""
          id=""
          className="w-custom-90% sm:w-full outline-none py-2"
        >
          <option value="">h</option>
          <option value="">1</option>
          <option value="">h</option>
          <option value="">h</option>
          <option value="">h</option>
        </select>
        <ChevronUpDownIcon className="size-7 md:size-7 text-soft_gray  " />
      </div>
    </div>
  );
};

export default SelectionModal;
