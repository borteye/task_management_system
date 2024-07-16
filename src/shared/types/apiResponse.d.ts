import { User } from "./user";

export interface SignInSuccess {
  authentication: boolean;
  data: {
    message: string;
    token: string;
    user: User;
  };
  success: boolean;
}

export interface SignInError {
  success: boolean;
  error: string;
  errorMessage: string;
  authentication: boolean;
}

export interface SignUpSuccess {
  success: boolean;
 message: string 
}

export interface SignUpError {
  success: boolean;
  error: string;
}

export interface ForgotPasswordSuccess {
  authentication: boolean;
  data: {
    message: string;
    token: string;
  };
  success: boolean;
}

export interface ForgotPasswordError {
  success: boolean;
  error: string;
  errorMessage: string;
}

export interface EmailVerificationSuccess {
  data: { message: string };
  success: boolean;
}

export interface EmailVerificationError {
  message?: string;
  success: boolean;
  error: string;
  errorMessage: string;
  authentication: boolean;
}

export interface ResendCodeSuccess {
  success: boolean;
  data: {
    message: string;
  };
  authentication: boolean;
}

export interface ResendCodeError {
  message?: string;
  success: boolean;
  error: string;
  errorMessage: string;
}

export interface ResetPasswordSuccess {
  data: {
    message: string;
  };
  success: boolean;
}

export interface ResetPasswordError {
  message?: string;
  success: boolean;
  error: string;
  errorMessage: string;
}
