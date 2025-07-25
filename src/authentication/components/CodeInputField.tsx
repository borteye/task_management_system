import React, { forwardRef } from "react";
import { CodeInputFieldProps } from "../../shared/types/forms";

const CodeInputField = forwardRef<HTMLInputElement, CodeInputFieldProps>(
  (
    {
      handleChange,

      handleNext = () => {},
      name,
      value,
    },
    ref
  ) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (handleChange) {
        handleChange(e);
      }
      if (e.target.value.length === 1) {
        handleNext(name);
      }
    };

    return (
      <input
        type="number"
        maxLength={1}
        value={value}
        name={name}
        onChange={handleInputChange}
        ref={ref}
        className="w-16 h-16 bg-primary_color text-white rounded-xl text-center outline-none font-poppins-semibold text-xl p-3"
      />
    );
  }
);

export default CodeInputField;
