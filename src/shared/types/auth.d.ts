interface SignUpValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInValues {
  email: string;
  password: string;
}

interface ForgotPasswordValues {
  email: string;
}

interface EmailVerificationCode {
  verificationCode: string;
}

interface EmailVerificationValues {
  codeDigitOne: string;
  codeDigitTwo: string;
  codeDigitThree: string;
  codeDigitFour: string;
}

interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}

type allUser = {
  username: string;
};

interface IallUsers {
  allUsers: {
    allUsers: allUser[];
  };
}
