import React, { FC } from "react";
import { HeroIconType } from "../../../shared/types/forms";

interface ButtonProps {
  label: string;
  icon?: HeroIconType;
  onClick?: () => void;
  background: boolean;
}

const Button: FC<ButtonProps> = ({ label, icon, onClick, background }) => {
  return (
    <button
      onClick={onClick}
      className={`flex text-sm sm:text-base items-center justify-center gap-x-1  ${
        background && "bg-primary_color text-white"
      }  p-2 rounded-lg`}
    >
      {icon}
      <p className="font-poppins-medium">{label}</p>
    </button>
  );
};

export default Button;
