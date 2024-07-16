import React from "react";

interface BackDropProps {
  close: () => void;
  screen?: string;
  backgroundColor?: string;
}

const BackDrop: React.FC<BackDropProps> = ({
  close,
  screen,
  backgroundColor,
}) => {
  return (
    <div
      className={`fixed inset-0 ${
        backgroundColor ? `${backgroundColor}` : "bg-black"
      }  bg-opacity-50 z-50  ${screen}:hidden`}
      onClick={close}
    ></div>
  );
};

export default BackDrop;
