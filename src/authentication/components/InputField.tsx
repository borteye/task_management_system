import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { FC, useState } from "react";
import { InputFieldProps } from "../../shared/types/forms";

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  icon,
  name,
  value,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div
      className={`flex items-center justify-between py-2 px-4 rounded-2xl bg-light_gray ${
        touched && errors ? "border border-wine" : false
      }`}
    >
      {icon}
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        className="outline-none bg-transparent font-poppins-regular text-xl w-full px-4 py-1"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {type === "password" &&
        (isPasswordVisible ? (
          <EyeSlashIcon
            onClick={togglePasswordVisibility}
            className="h-7 w-7 cursor-pointer"
          />
        ) : (
          <EyeIcon
            onClick={togglePasswordVisibility}
            className="h-7 w-7 cursor-pointer"
          />
        ))}
    </div>
  );
};

export default InputField;
