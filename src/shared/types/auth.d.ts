export interface SignUpValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignInValues{
    email: string,
    password: string
}

export interface ForgotPasswordValues{
    email: string
}

export interface EmailVerificationCode {
    verificationCode: string;
  }

export interface EmailVerificationValues{
    codeDigitOne: string 
    codeDigitTwo: string 
    codeDigitThree: string 
    codeDigitFour: string 
}

export interface ResetPasswordValues{
    password: string
    confirmPassword: string
}

