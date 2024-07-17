import { HeroIconType } from "./forms";

interface SideBarLinks {
  id: number;
  label: string;
  path: string;
  activeIcon: HeroIconType;
  inactiveIcon: HeroIconType;
}

interface TaskSummaryCardProps {
  tasks?:any
  // title: string;
  // count?: number;
  // icon: HeroIconType;
  // color?: string;
}

interface TaskStage{
OPEN: string,
IN_PROGRESS: string,
COMPLETED: string
}

