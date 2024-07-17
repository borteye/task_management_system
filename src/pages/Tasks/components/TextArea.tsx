import React, { FC, FocusEventHandler } from "react";

interface TextAreaProps {
  label?: string;
  value?: string;
  name?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  touched?: boolean;
  errors?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  errors,
  handleBlur,
  handleChange,
  name,
  touched,
  value,
}) => {
  return (
    <div>
      <div>{label}</div>
      <textarea
        cols={20}
        rows={5}
        className={`rounded-sm border ${
          touched && errors ? "border-wine" : false
        } sm:w-custom-70% outline-none p-3`}
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default TextArea;
