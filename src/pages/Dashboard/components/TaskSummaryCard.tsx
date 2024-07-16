import { FC } from "react";
import { TaskSummaryCardProps } from "../../../shared/types/constants";

const TkSummaryCard: FC<TaskSummaryCardProps> = ({
  icon,
  title,
  count,
  color,
}) => {
  console.log("color", color);
  return (
    <div className="sm:min-w-[300px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex items-center justify-between px-6 py-8 font-poppins-regular rounded-lg">
      <div className="flex flex-col gap-y-3">
        <p className="text-soft_gray font-poppins-medium">
          {title.toUpperCase()}
        </p>
        <h1 className="text-4xl md:text-5xl font-poppins-medium">{count}</h1>
      </div>
      <div
        className="w-fit p-3 rounded-full"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
    </div>
  );
};

export default TkSummaryCard;
