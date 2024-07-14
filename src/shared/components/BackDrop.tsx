import React from "react";

interface BackDropProps {
  onClick: () => void;
  screen?: string;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick, screen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50  ${screen}:hidden`}
      onClick={onClick}
    ></div>
  );
};

export default BackDrop;
