import React, { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TaskOptionModal from "./TaskOptionModal";

type Props = {};

const TasksCard = (props: Props) => {
  const [isTaskOptionVisible, setIsTaskOptionVisible] =
    useState<boolean>(false);

  const toggleTaskOption = () => {
    setIsTaskOptionVisible(!isTaskOptionVisible);
  };
  return (
    <div className="font-poppins-regular relative flex flex-col gap-y-4 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 md:p-10 w-full rounded ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-wine bg-light_wine bg- px-3 py-1 w-fit rounded-md">
          High
        </p>
        <EllipsisHorizontalIcon
          className="size-5 sm:size-7 cursor-pointer"
          onClick={toggleTaskOption}
        />
      </div>

      <h1 className="font-poppins-semibold text-lg">Bug Fixing</h1>
      <p className="text-soft_gray">
        Due Date: <span className="text-black">01/01/2022</span>
      </p>
      <p>
        Creating a recognizable brand identity is pivotal in ensuring
        visibility.
      </p>
      <div className="flex gap-x-2 justify-between text-sm">
        <p className="text-soft_gray">
          Assigned Date:{" "}
          <span className="text-black text-base">01/01/2022</span>
        </p>
        <p className="text-soft_gray">
          Assigned To: <span className="text-black text-base">John Doe</span>
        </p>
      </div>

      <TaskOptionModal
        isTaskOptionVisible={isTaskOptionVisible}
        close={toggleTaskOption}
      />
    </div>
  );
};

export default TasksCard;
