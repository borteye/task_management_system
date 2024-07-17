import {
  Square3Stack3DIcon as ActiveSquare3Stack3DIcon,
  RectangleStackIcon as ActiveRectangleStackIcon,
  ArrowPathIcon as ActiveArrowPathIcon,
  ClipboardDocumentListIcon as ActiveClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon as ActiveClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import {
  Square3Stack3DIcon as InActiveSquare3Stack3DIcon,
  RectangleStackIcon as InActiveRectangleStackIcon,
  ArrowPathIcon as InActiveArrowPathIcon,
  ClipboardDocumentListIcon as InActiveClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon as InActiveClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { SideBarLinks } from "../types/constants";

const Routes: SideBarLinks[] = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    activeIcon: ActiveSquare3Stack3DIcon,
    inactiveIcon: InActiveSquare3Stack3DIcon,
  },
  {
    id: 2,
    label: "Tasks",
    path: "/my-tasks",
    activeIcon: ActiveRectangleStackIcon,
    inactiveIcon: InActiveRectangleStackIcon,
  },
  {
    id: 3,
    label: "Open",
    path: "/my-tasks/open",
    activeIcon: ActiveClipboardDocumentListIcon,
    inactiveIcon: InActiveClipboardDocumentListIcon,
  },
  {
    id: 4,
    label: "In Progress",
    path: "/my-tasks/in-progress",
    activeIcon: ActiveArrowPathIcon,
    inactiveIcon: InActiveArrowPathIcon,
  },
  {
    id: 5,
    label: "Completed",
    path: "/my-tasks/completed",
    activeIcon: ActiveClipboardDocumentCheckIcon,
    inactiveIcon: InActiveClipboardDocumentCheckIcon,
  },
];

const PriorityLevel = ["Critical", "High", "Medium", "Low"];

const TaskStage: string[] = ["Open", "In progress", "Completed"];

const TOTAL_TASK_COLOR = "#3754DB";
const IN_PROGRESS_COLOR = "#F2C94C";
const COMPLETED_COLOR = "#00C271";
const OVERDUE_COLOR = "#B80020";
const BACKDROP_WHITE_BG = "#FFFFFF";
const LOADER_COLOR = "#16171D";

const barChartData = {
  labels: [
    "Critical Priority",
    "High Priority",
    "Medium Priority",
    "Low Priority",
  ],
  datasets: [
    {
      label: "Tasks",
      data: [1, 2, 3, 4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const filterTasks = (tasks: Tasks[], search: string) => {
  if (!tasks) return [];

  const searchLower = search.toLowerCase();
  return tasks?.filter((val) => {
    if (!search) return true;
    return (
      val.title?.toLowerCase().includes(searchLower) ||
      val.priority_level?.toLowerCase().includes(searchLower) ||
      val.assigned_to?.toLowerCase().includes(searchLower) ||
      val.stage?.toLowerCase().includes(searchLower)
    );
  });
};


const filterTaskStageLength = (tasks: Tasks[], stage: string) => {
  if (!tasks) return 0;
  return tasks?.filter((task) => task.stage === stage).length;
};

export {
  Routes,
  TaskStage,
  PriorityLevel,
  BACKDROP_WHITE_BG,
  COMPLETED_COLOR,
  IN_PROGRESS_COLOR,
  LOADER_COLOR,
  OVERDUE_COLOR,
  TOTAL_TASK_COLOR,
  barChartData,
  filterTasks,
  filterTaskStageLength
};
