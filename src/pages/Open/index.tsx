import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../Tasks/components/InputField";
import TasksCard from "../../shared/components/TasksCard";
import { selectTasks } from "../../redux/features/tasksSlice";
import { filterTasks } from "../../shared/components/constants";

const Open = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const tasks = useSelector(selectTasks);
  const openTasks = tasks.filter((task) => task.stage.toLowerCase() === "open");
  const filteredTasks = filterTasks(openTasks, search);

  return (
    <div className="pt-28 md:pt-36 p-4 flex flex-col gap-y-10 relative h-full overflow-y-auto">
      <h1 className="text-2xl sm:text-3xl font-poppins-medium">Open Tasks</h1>
      <div className="flex flex-col gap-y-8 sm:flex-row justify-between w-full">
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
      <div
        className={`${
          openTasks.length === 0
            ? "flex items-center justify-center"
            : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
        }`}
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TasksCard key={task.task_id} task={task} />
          ))
        ) : (
          <p className="font-poppins-medium text-center sm:text-2xl">
            No tasks found...
          </p>
        )}
      </div>
    </div>
  );
};

export default Open;
