import { FC } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import {
  selectUserId,
  selectUsername,
} from "../../../redux/features/userSlice";
import { useAddTask } from "../../../shared/utils/useAddTask";
import TaskForm from "./TaskForm";
import {
  AddTaskSuccess,
  AddTaskError,
} from "../../../shared/types/apiResponse";

interface AddTaskModalProps {
  close: () => void;
  isAddTaskVisible: boolean;
}

const AddTaskModal: FC<AddTaskModalProps> = ({ close, isAddTaskVisible }) => {
  const queryClient = useQueryClient();
  const userId = useSelector(selectUserId);
  const username = useSelector(selectUsername);

  const initialValues = {
    title: "",
    description: "",
    assigned_to: "",
    stage: "",
    priority_level: "",
    due_date: "",
  };

  const onSuccess = (successData: AddTaskSuccess) => {
    if (!successData.success) return;
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    close();
    toast.success(successData.message, {
      position: "top-right",
    });
  };

  const onError = (errorData: Error) => {
    const errorResponse: AddTaskError = JSON.parse(errorData.message);
    if (errorResponse.success) return;
    toast.error(`${errorResponse.error} 🙊`, {
      position: "top-right",
    });
  };

  const { mutate, isPending } = useAddTask(onSuccess, onError);

  const onSubmit = (values: TaskValues) => {
    const body = {
      ...values,
      user_id: userId,
      assigned_by: username,
    };
    mutate(body);
  };

  return (
    <TaskForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      close={close}
      isVisible={isAddTaskVisible}
      isPending={isPending}
      title="Add Task"
    />
  );
};

export default AddTaskModal;
