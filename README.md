# Task Management System (Frontend)

A robust, responsive, and modern Task Management System frontend built with **React** and **TypeScript**. This documentation is tailored to industry standards and covers architecture, project structure, features, environment settings, component organization, routing, state management, and customization.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Routing](#routing)
- [State Management](#state-management)
- [UI/UX and Styling](#uiux-and-styling)
- [Component Structure](#component-structure)
- [API Integration](#api-integration)
- [Customization & Extensibility](#customization--extensibility)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This frontend is the user interface for a fullstack Task Management System. It enables users to manage tasks, authenticate, organize workflow stages, and visualize task data with an intuitive dashboard.

**Tech Stack:**
- React (with TypeScript)
- Redux Toolkit (with persist)
- React Query
- Tailwind CSS
- Sonner (for notifications)
- Heroicons

---

## Features

- **User Authentication:** Sign up, sign in, password reset, email verification, JWT-protected routes.
- **Task Management:** Create, read, update, delete tasks; mark as completed; assign, categorize, and prioritize tasks.
- **Task Stages:** Tasks can be Open, In Progress, or Completed.
- **Dashboard:** Visual summaries and analytics (e.g., bar charts for priorities, summary cards).
- **Responsive Design:** Fully functional on mobile, tablet, and desktop.
- **User Roles:** Assign tasks to users, see who is responsible.
- **Notifications:** Real-time feedback for actions (success, errors, etc.).
- **Reusable UI Components:** Sidebar, Navbar, Cards, Modals, Input fields, etc.

---

## Architecture

- **Component-driven:** Follows React best practices with atomic and reusable components.
- **State Management:** Global state via Redux Toolkit and persistent storage; data-fetching via React Query.
- **Routing:** `react-router-dom` for public/protected routes, nested layouts.
- **API Layer:** All communication with the backend uses environment-based endpoints, easily configurable.
- **Styling:** Utility-first with Tailwind CSS and custom fonts.

---

## Project Structure

```
task_management_system/
├── public/
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   ├── assets/
│   │   └── images/ (profile, icons, etc.)
│   ├── authentication/
│   │   ├── SignIn.tsx
│   │   ├── SignUp.tsx
│   │   ├── ForgotPassword.tsx
│   │   ├── EmailVerification.tsx
│   │   └── ResetPassword.tsx
│   ├── layout/
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── Tasks/
│   │   ├── Open/
│   │   ├── InProgress/
│   │   └── Completed/
│   ├── redux/
│   │   ├── store.ts
│   │   └── features/
│   ├── shared/
│   │   ├── components/
│   │   └── utils/
│   ├── middleware/
│   │   └── ProtectedRoutes.tsx
│   └── types/
│       └── (TypeScript types)
├── .env.local.example
├── package.json
├── tsconfig.json
└── README.md
```

**Key Folders:**
- `src/pages`: Main views (Dashboard, Tasks, etc.)
- `src/authentication`: Auth-related screens
- `src/layout`: App shell (Sidebar, Navbar, etc.)
- `src/redux`: State logic for user, tasks, UI toggles
- `src/shared`: Reusable components and utilities

---

## Installation & Setup

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/borteye/task_management_system.git
   cd task_management_system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Copy `.env.local.example` to `.env.local` and edit as needed.

4. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Configure these in `.env.local`:

```env
REACT_APP_BASE_URL=http://localhost:5000
REACT_APP_SIGN_IN=auth/signIn
REACT_APP_SIGN_UP=auth/signUp
REACT_APP_FORGOT_PASSWORD=auth/forgot-password
REACT_APP_EMAIL_VERIFICATION=auth/email-verification
REACT_APP_RESET_PASSWORD=auth/reset-password
REACT_APP_RESEND_VERIFICATION_CODE=auth/resend-verification-code
REACT_APP_GET_USER=auth/get-users
REACT_APP_TASKS_URL=tasks/my-task
REACT_APP_ADD_TASK=tasks/add-task
REACT_APP_EDIT_TASK=tasks/edit-task
REACT_APP_MARK_AS_COMPLETED=tasks/mark-as-completed
REACT_APP_DELETE_TASK=tasks/delete-task
```

---

## Routing

- **Public Routes:**
  - `/` – Sign In
  - `/sign-up` – Sign Up
  - `/forgot-password` – Forgot Password
  - `/reset-password` – Reset Password

- **Protected Routes (JWT required):**
  - `/email-verification`
  - `/dashboard`
  - `/my-tasks`
  - `/my-tasks/open`
  - `/my-tasks/in-progress`
  - `/my-tasks/completed`

**Routing is managed in `src/App.tsx` using `react-router-dom` v6+ with nested layouts and code splitting for performance.**

---

## State Management

- **Redux Toolkit:** All global state (auth, user, UI toggles, tasks).
- **Redux Persist:** LocalStorage persistence for user sessions and state.
- **React Query:** For server state, data fetching, caching, and synchronization.
- **Slices:** Each state domain (user, tasks, toggles) has its own slice under `redux/features`.

---

## UI/UX and Styling

- **Tailwind CSS:** Utility classes for styling and responsiveness.
- **Custom Fonts:** Poppins (Regular, Medium, SemiBold, Bold) loaded in `src/index.css`.
- **Heroicons:** For consistent SVG icons.
- **Sonner:** For toast notifications and alerts.
- **Responsive Layout:** Layout adapts for mobile, tablet, and desktop.

---

## Component Structure

- **Layout:** `src/layout/Layout.tsx` combines Sidebar, Navbar, and Outlet for nested views.
- **Sidebar & Navbar:** Found under `src/shared/components/`, context-aware and responsive.
- **Dashboard:** `src/pages/Dashboard/` provides cards and charts for task analytics.
- **Tasks:** CRUD operations, search/filter, and categorization.
- **Reusable Components:** Inputs, Cards, Modals, Tooltips, BackDrop, etc.
- **Custom Hooks:** (e.g., `useTasks` for data fetching)

---

## API Integration

- **Endpoints:** All API URLs are environment-based and imported from `.env.local`.
- **Auth:** JWT-based authentication; tokens stored in Redux and persisted.
- **Error Handling:** Global toast notifications for all API interactions.

---

## Customization & Extensibility

- **Adding New Pages:** Create a folder in `src/pages/` and add to routing in `App.tsx`.
- **Adding State:** Create a new slice under `redux/features` and wire up in `store.ts`.
- **Styling:** Extend Tailwind config or add custom CSS in `src/index.css`.
- **API Changes:** Update endpoints in `.env.local` and adjust services/hooks as needed.

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License.

---
