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

export { Routes };
