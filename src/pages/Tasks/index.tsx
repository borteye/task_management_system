import React, { useState } from "react";
import TasksCard from "./components/TasksCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import AddTaskModal from "./components/AddTaskModal";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Filter from "./components/Filter";

type Props = {};

const Tasks = (props: Props) => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState<boolean>(false);

  const toggleAddTask = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsAddTaskVisible(!isAddTaskVisible);
  };

  return (
    <div className="pt-28 md:pt-36 p-4 flex flex-col gap-y-10 relative">
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
            placeholder="Search tasks by name or priority"
          />
        </div>

        <Filter />
      </div>
      <div className="text-base text-center sm:text-lg flex justify-between font-poppins-medium text-soft_gray">
        <p>Open (2)</p>
        <p>In Progress (2)</p>
        <p>Completed (2)</p>
        <p>Overdue (2)</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      <TasksCard />
      <TasksCard />
      <TasksCard />
      <TasksCard />
      </div>
    
      <AddTaskModal isAddTaskVisible={isAddTaskVisible} close={toggleAddTask} />
    </div>
  );
};

export default Tasks;
