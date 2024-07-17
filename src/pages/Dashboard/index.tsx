import {
  RectangleStackIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import TaskSummaryCard from "./components/TaskSummaryCard";
import BarChart from "./components/BarChart";
import {
  COMPLETED_COLOR,
  filterTaskStageLength,
  IN_PROGRESS_COLOR,
  OVERDUE_COLOR,
  TOTAL_TASK_COLOR,
} from "../../shared/components/constants";
import { selectTasks, SET_TASKS } from "../../redux/features/tasksSlice";
import { useTasks } from "../../shared/utils/useTasks";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: tasksData, isLoading: tasksLoading } = useTasks();

  const tasks = tasksData?.tasks || [];
  dispatch(SET_TASKS(tasks));

  const taskSummary = [
    {
      title: "Total Task",
      count: tasks.length,
      backgroundColor: "#3754DB",
      icon: <RectangleStackIcon className="size-6 text-light_blue" />,
    },
    {
      title: "In Progress",
      count: filterTaskStageLength(tasks, "in progress"),
      backgroundColor: "#DF9A00",
      icon: <ArrowPathIcon className="size-6 text-light_amber" />,
    },
    {
      title: "Completed",
      count: filterTaskStageLength(tasks, "completed"),
      backgroundColor: "#00C271",
      icon: <ClipboardDocumentCheckIcon className="size-6 text-light_green" />,
    },
    {
      title: "Open",
      count: filterTaskStageLength(tasks, "open"),
      backgroundColor: "#B80020",
      icon: <FolderOpenIcon className="size-6 text-light_wine" />,
    },
  ];

  return (
    <div className="pt-28 md:pt-36 p-4 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between flex-wrap">
        {taskSummary.map((task) => (
          <TaskSummaryCard key={task.title} tasks={task} />
        ))}
      </div>
      <div className="bg-white h-custom-500 sm:h-auto shadow-[rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px] p-4 md:p-10">
        <h1 className="text-xl md:text-3xl font-poppins-medium text-soft_gray">
          Task Priorities
        </h1>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
