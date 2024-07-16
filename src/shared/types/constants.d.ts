import { HeroIconType } from "./forms";

interface SideBarLinks {
  id: number;
  label: string;
  path: string;
  activeIcon: HeroIconType;
  inactiveIcon: HeroIconType;
}

interface TaskSummaryCardProps {
  title: string;
  count: number;
  icon: HeroIconType;
  color?: string;
}