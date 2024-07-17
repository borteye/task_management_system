import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
import Layout from "./layout/Layout";

const SignIn = lazy(() => import("./authentication/SignIn"));
const SignUp = lazy(() => import("./authentication/SignUp"));
const EmailVerification = lazy(
  () => import("./authentication/EmailVerification")
);
const ForgotPassword = lazy(() => import("./authentication/ForgotPassword"));
const ResetPassword = lazy(() => import("./authentication/ResetPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Open = lazy(() => import("./pages/Open"));
const InProgress = lazy(() => import("./pages/InProgress"));
const Completed = lazy(() => import("./pages/Completed"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" Component={SignIn} />
            <Route path="/sign-up" Component={SignUp} />
            <Route path="/forgot-password" Component={ForgotPassword} />
            <Route path="/reset-password" Component={ResetPassword} />
            <Route Component={ProtectedRoutes}>
              <Route path="/email-verification" Component={EmailVerification} />
              <Route path="/reset-password" Component={ResetPassword} />
              <Route Component={Layout}>
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/my-tasks" Component={Tasks} />
                <Route path="/my-tasks/open" Component={Open} />
                <Route path="/my-tasks/in-progress" Component={InProgress} />
                <Route path="/my-tasks/completed" Component={Completed} />
              </Route>
            </Route>
            <Route path="*" Component={SignIn} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
