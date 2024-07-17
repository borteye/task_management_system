import { FC } from "react";
import { PencilSquareIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import BackDrop from "../../../shared/components/BackDrop";
import LoadingOverlay from "../../../shared/components/LoadingOverlay";
import Loader from "../../../shared/components/Loader";
import { useMarkAsCompleted } from "../../../shared/utils/useMarkAsCompleted";
import { useDeleteTask } from "../../../shared/utils/useDeleteTask";
import { BACKDROP_WHITE_BG } from "../../../shared/components/constants";
import { SET_EDIT_TASK } from "../../../redux/features/editTaskSlice";
import { ModificationError, ModificationSuccess } from "../../../shared/types/apiResponse";
import { SET_EDIT_TASK_TOGGLE } from "../../../redux/features/toggleSlice";

interface TaskOptionModalProps {
  close: () => void;
  isTaskOptionVisible: boolean;
  isCompleted: boolean;
  taskId: number;
  task: Tasks;
}

const TaskOptionModal: FC<TaskOptionModalProps> = ({
  close,
  isTaskOptionVisible,
  isCompleted,
  taskId,
  task,
}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const handleSuccess = (data: ModificationSuccess) => {
    if (data.success) {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      close();
      toast.success(data.message, { position: "top-right" });
    }
  };

  const handleError = (error: Error) => {
    const errorData: ModificationError = JSON.parse(error.message);
    if (!errorData.success) {
      toast.error(`${errorData.error} 🙊`, { position: "top-right" });
    }
  };

  const { mutate: markAsCompleted, isPending: markAsCompletedPending } = useMarkAsCompleted(handleSuccess, handleError);
  const { mutate: deleteTask, isPending: deleteTaskPending } = useDeleteTask(handleSuccess, handleError);

  const handleMarkAsCompleted = () => markAsCompleted({ task_id: taskId, stage: "Completed" });
  const handleDeleteTask = () => deleteTask(taskId);

  const handleEditTask = () => {
    dispatch(SET_EDIT_TASK_TOGGLE(true));
    dispatch(SET_EDIT_TASK(task));
    close();
  };

  return (
    <>
      {isTaskOptionVisible && <BackDrop close={close} backgroundColor={BACKDROP_WHITE_BG} />}
      {(markAsCompletedPending || deleteTaskPending) && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
      <div className={`${isTaskOptionVisible ? "block" : "hidden"} absolute flex flex-col gap-y-8 top-16 right-2 p-6 bg-white rounded border shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] z-custom-1000`}>
        {!isCompleted && (
          <div onClick={handleMarkAsCompleted} className="flex gap-x-2 cursor-pointer text-green">
            <CheckIcon className="size-5 sm:size-6" />
            <p>Mark as Complete</p>
          </div>
        )}
        <div onClick={handleEditTask} className="flex gap-x-2 cursor-pointer hover:text-blue">
          <PencilSquareIcon className="size-5 sm:size-6" />
          <p>Edit</p>
        </div>
        <div onClick={handleDeleteTask} className="flex gap-x-2 cursor-pointer hover:text-wine">
          <TrashIcon className="size-5 sm:size-6" />
          <p>Delete</p>
        </div>
      </div>
    </>
  );
};

export default TaskOptionModal;
