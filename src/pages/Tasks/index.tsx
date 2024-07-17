import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/outline";
import TasksCard from "../../shared/components/TasksCard";
import AddTaskModal from "./components/AddTaskModal";
import Button from "./components/Button";
import InputField from "./components/InputField";
import EditTaskModal from "./components/EditTaskModal";
import { useTasks } from "../../shared/utils/useTasks";
import { useGetUsers } from "../../shared/utils/useGetUsers";
import { SET_ALL_USERS } from "../../redux/features/allUsersSlice";
import { selectTasks, SET_TASKS } from "../../redux/features/tasksSlice";
import { filterTasks } from "../../shared/components/constants";
import {
  selectEditTaskToggle,
  SET_EDIT_TASK_TOGGLE,
} from "../../redux/features/toggleSlice";
import { selectEditTask } from "../../redux/features/editTaskSlice";

const Tasks = () => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const isEditTaskVisible = useSelector(selectEditTaskToggle);
  const editTask = useSelector(selectEditTask);
  const tasks = useSelector(selectTasks);

  const { data: getUsersData } = useGetUsers();

  useEffect(() => {
    if (getUsersData?.users) {
      dispatch(SET_ALL_USERS(getUsersData.users));
    }
  }, [getUsersData, dispatch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toggleAddTask = () => {
    setIsAddTaskVisible(!isAddTaskVisible);
  };

  const toggleEditTask = () => {
    dispatch(SET_EDIT_TASK_TOGGLE(!isEditTaskVisible));
  };

  const filteredTasks = filterTasks(tasks as Tasks[], search);

  return (
    <div className="pt-28 md:pt-36 p-4 flex flex-col gap-y-10 relative h-full overflow-y-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl sm:text-3xl font-poppins-medium">Tasks</h1>
        <Button
          label="Add Task"
          icon={<PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
          onClick={toggleAddTask}
          background={true}
        />
      </div>
      <div className="flex flex-col gap-y-8 sm:flex-row justify-between w-full">
        <div className="flex-grow">
          <InputField
            rounded="xl"
            border="border border-soft_gray"
            py="py-1"
            placeholder="Search tasks by title, stage, priority, or assigned to"
            type="text"
            handleChange={handleSearchChange}
            value={search}
          />
        </div>
      </div>
      <div
        className={`${
          tasks?.length === 0
            ? "flex items-center justify-center"
            : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
        }`}
      >
        {filteredTasks?.length ? (
          filteredTasks.map((task) => (
            <TasksCard key={task.task_id} task={task} />
          ))
        ) : (
          <p className="font-poppins-medium text-center sm:text-2xl">
            No tasks found...
          </p>
        )}
      </div>
      <AddTaskModal isAddTaskVisible={isAddTaskVisible} close={toggleAddTask} />
      <EditTaskModal
        close={toggleEditTask}
        isEditTaskVisible={isEditTaskVisible}
        task={editTask}
      />
    </div>
  );
};

export default Tasks;
