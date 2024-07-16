import {
  RectangleStackIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import TaskSummaryCard from "./components/TaskSummaryCard";
import {
  COMPLETED_COLOR,
  IN_PROGRESS_COLOR,
  OVERDUE_COLOR,
  TOTAL_TASK_COLOR,
} from "../../shared/constants/colors";
import BarChart from "./components/BarChart";

const Dashboard = () => {
  return (
    <div className="pt-28 md:pt-36 p-4 flex flex-col gap-y-10 ">
      <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between flex-wrap ">
        <TaskSummaryCard
          icon={<RectangleStackIcon className="size-6 text-white" />}
          title="Total Task"
          count={2}
          color={TOTAL_TASK_COLOR}
        />
        <TaskSummaryCard
          icon={<ArrowPathIcon className="size-6 text-white" />}
          title="In progress"
          count={6}
          color={IN_PROGRESS_COLOR}
        />
        <TaskSummaryCard
          icon={<ClipboardDocumentCheckIcon className="size-6 text-white" />}
          title="Completed"
          count={3}
          color={COMPLETED_COLOR}
        />
        <TaskSummaryCard
          icon={<ExclamationTriangleIcon className="size-6 text-white" />}
          title="Overdue"
          count={2}
          color={OVERDUE_COLOR}
        />
      </div>
      <div className="bg-white h-custom-500 sm:h-auto shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 md:p-10">
        <h1 className="text-xl md:text-3xl font-poppins-medium text-soft_gray">
          Task Priorities
        </h1>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
