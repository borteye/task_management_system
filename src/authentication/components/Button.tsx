import { FC } from "react";

type ButtonProps = {
  label: string;
};

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="font-poppins-semibold bg-primary_color text-white w-full py-4 text-lg rounded-full"
    >
      {label}
    </button>
  );
};

export default Button;
