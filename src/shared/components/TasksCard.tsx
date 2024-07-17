import React, { FC, useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TaskOptionModal from "../../pages/Tasks/components/TaskOptionModal";
import { selectUserId } from "../../redux/features/userSlice";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/dateFormatter";
import { colorCheck } from "../utils/colorCheck";

interface TaskCardProps {
  task: Tasks;
}

const TasksCard: FC<TaskCardProps> = ({ task }) => {
  const [isTaskOptionVisible, setIsTaskOptionVisible] =
    useState<boolean>(false);

  const pathname = window.location.pathname;

  const color = colorCheck(task.priority_level);

  const userId = useSelector(selectUserId);

  const toggleTaskOption = () => {
    setIsTaskOptionVisible(!isTaskOptionVisible);
  };
  return (
    <div className="font-poppins-regular relative flex flex-col gap-y-4 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 md:p-10 w-full rounded ">
      <div className="flex items-center justify-between">
        <p
          className={`text-sm  ${color?.color} ${color?.background} px-3 py-1 w-fit rounded-md`}
        >
          {task.priority_level}
        </p>
        {pathname === "/my-tasks" && (
          <EllipsisHorizontalIcon
            className="size-5 sm:size-7 cursor-pointer"
            onClick={toggleTaskOption}
          />
        )}
      </div>

      <h1 className="font-poppins-semibold text-lg">{task.title}</h1>
      <p className="text-soft_gray">
        Due Date:{" "}
        <span className="text-black">{formatDate(task.due_date)}</span>
      </p>
      <p>{task.description}</p>
      <div className="flex gap-x-2 justify-between text-sm">
        <p className="text-soft_gray">
          Assigned Date:{" "}
          <span className="text-black text-base">
            {formatDate(task.created_at)}
          </span>
        </p>
        <p className="text-soft_gray">
          {task.user_id === userId ? (
            <>
              Assigned To:{" "}
              <span className="text-black text-base">{task.assigned_to}</span>
            </>
          ) : (
            <>
              Assigned By:{" "}
              <span className="text-black text-base">{task.assigned_by}</span>
            </>
          )}
        </p>
      </div>
      {pathname === "/my-tasks" && (
        <TaskOptionModal
          isTaskOptionVisible={isTaskOptionVisible}
          close={toggleTaskOption}
          isCompleted={task.stage === "Completed"}
          taskId={task.task_id}
          task={task}
        />
      )}
    </div>
  );
};

export default TasksCard;
