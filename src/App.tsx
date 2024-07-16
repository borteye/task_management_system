import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import EmailVerification from "./authentication/EmailVerification";
import ForgotPassword from "./authentication/ForgotPassword";
import ResetPassword from "./authentication/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/forgot-password" Component={ForgotPassword} />
          <Route Component={ProtectedRoutes}>
            <Route path="/email-verification" Component={EmailVerification} />
            <Route path="/reset-password" Component={ResetPassword} />
            <Route Component={Layout}>
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/my-tasks" Component={Tasks} />
            </Route>
          </Route>
          <Route path="*" Component={SignIn} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
