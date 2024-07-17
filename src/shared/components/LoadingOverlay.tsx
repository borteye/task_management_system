import { FC, ReactNode } from "react";

type LoadingOverlayProps = {
  children: ReactNode;
};

const LoadingOverlay: FC<LoadingOverlayProps> = ({ children }) => {
  return (
    <div className="fixed bg-overlay z-custom-2000 inset-0 flex justify-center items-center">
      {children}
    </div>
  );
};

export default LoadingOverlay;
