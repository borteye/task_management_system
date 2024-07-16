import React, { FC } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import BackDrop from "../../../shared/components/BackDrop";
import { BACKDROP_WHITE_BG } from "../../../shared/constants/colors";

interface TaskOptionModalProps {
  close: () => void;
  isTaskOptionVisible: boolean;
}

const TaskOptionModal: FC<TaskOptionModalProps> = ({
  isTaskOptionVisible,
  close,
}) => {
  return (
    <>
      {isTaskOptionVisible && (
        <BackDrop close={close} backgroundColor={BACKDROP_WHITE_BG} />
      )}
      <div
        className={`${
          isTaskOptionVisible ? "block" : "hidden"
        } absolute flex flex-col gap-y-8 top-16 right-2 p-6 bg-white  rounded border shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] z-custom-1000`}
      >
        <div className="flex gap-x-2 cursor-pointer text-green">
          <CheckIcon className="size-5 sm:size-6" />
          <p>Mark as Complete</p>
        </div>
        <div className="flex gap-x-2 cursor-pointer hover:text-blue">
          <PencilSquareIcon className="size-5 sm:size-6" />
          <p>Edit</p>
        </div>
        <div className="flex gap-x-2 cursor-pointer hover:text-wine">
          <TrashIcon className="size-5 sm:size-6" />
          <p>Delete</p>
        </div>
      </div>
    </>
  );
};

export default TaskOptionModal;
