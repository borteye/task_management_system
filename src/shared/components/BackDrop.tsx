import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BackDrop = ({ children }: Props) => {
  return (
    <div className="fixed bg-overlay inset-0 flex justify-center items-center">
      {children}
    </div>
  );
};

export default BackDrop;
