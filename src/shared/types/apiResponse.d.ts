import { User } from "./user";

interface SignInSuccess {
  authentication: boolean;
  data: {
    message: string;
    token: string;
    user: User;
  };
  success: boolean;
}

interface SignInError {
  success: boolean;
  error: string;
  errorMessage: string;
  authentication: boolean;
}

interface SignUpSuccess {
  success: boolean;
  message: string;
}

interface SignUpError {
  success: boolean;
  error: string;
}

interface ForgotPasswordSuccess {
  authentication: boolean;
  data: {
    message: string;
    token: string;
  };
  success: boolean;
}

interface ForgotPasswordError {
  success: boolean;
  error: string;
  errorMessage: string;
}

interface EmailVerificationSuccess {
  data: { message: string };
  success: boolean;
}

interface EmailVerificationError {
  message?: string;
  success: boolean;
  error: string;
  errorMessage: string;
  authentication: boolean;
}

interface ResendCodeSuccess {
  success: boolean;
  data: {
    message: string;
  };
  authentication: boolean;
}

interface ResendCodeError {
  message?: string;
  success: boolean;
  error: string;
  errorMessage: string;
}

interface ResetPasswordSuccess {
  data: {
    message: string;
  };
  success: boolean;
}

interface ResetPasswordError {
  message?: string;
  success: boolean;
  error: string;
  errorMessage: string;
}

interface AddTaskSuccess {
  success: boolean;
  message: string;
}

interface AddTaskError {
  success: boolean;
  error: string;
}

interface EditTaskSuccess {
  success: boolean;
  message: string;
}

interface EditTaskError {
  success: boolean;
  error: string;
}

interface GetTasks {
  success: boolean;
  tasks: {
    task_id: number;
    title: string;
    user_id: number;
    assigned_to: string;
    description: string;
    assigned_by: string;
    created_at: string;
    due_date: string;
    priority_level: string;
    stage: string;
  }[];
}

interface ModificationSuccess {
  success: boolean;
  message: string;
}

interface ModificationError {
  success: boolean;
  error: string;
}
