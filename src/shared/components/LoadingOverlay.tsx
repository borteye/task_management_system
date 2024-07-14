import { FC, ReactNode } from "react";

type LoadingOverlayProps = {
  children: ReactNode;
};

const LoadingOverlay: FC<LoadingOverlayProps> = ({ children }) => {
  return (
    <div className="fixed bg-overlay inset-0 flex justify-center items-center">
      {children}
    </div>
  );
};

export default LoadingOverlay;
