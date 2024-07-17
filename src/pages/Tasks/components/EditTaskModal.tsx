import { FC } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import TaskForm from "./TaskForm";
import {
  EditTaskSuccess,
  EditTaskError,
} from "../../../shared/types/apiResponse";
import {
  selectUserId,
  selectUsername,
} from "../../../redux/features/userSlice";
import { useEditTask } from "../../../shared/utils/useEditTask";

interface EditTaskModalProps {
  close: () => void;
  isEditTaskVisible: boolean;
  task: Tasks;
}

const EditTaskModal: FC<EditTaskModalProps> = ({
  close,
  isEditTaskVisible,
  task,
}) => {
  const queryClient = useQueryClient();
  const userId = useSelector(selectUserId);
  const username = useSelector(selectUsername);

  const initialValues = {
    title: task.title,
    description: task.description,
    assigned_to: task.assigned_to,
    stage: task.stage,
    priority_level: task.priority_level,
    due_date: task.due_date,
  };

  const onSuccess = (successData: EditTaskSuccess) => {
    if (!successData.success) return;
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    close();
    toast.success(successData.message, { position: "top-right" });
  };

  const onError = (errorData: Error) => {
    const errorResponse: EditTaskError = JSON.parse(errorData.message);
    if (errorResponse.success) return;
    toast.error(`${errorResponse.error} 🙊`, { position: "top-right" });
  };

  const { mutate, isPending } = useEditTask(onSuccess, onError);

  const onSubmit = (values: CompleteTaskValues) => {
    const body = { ...values, task_id: task.task_id };
    mutate(body);
  };

  return (
    <TaskForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      close={close}
      isVisible={isEditTaskVisible}
      isPending={isPending}
      title="Edit Task"
    />
  );
};

export default EditTaskModal;
