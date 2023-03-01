export class ForgetPasswordRequest {
  email: string;
  lang: string;
}

export class ConfirmOtpRequest {
  email: string;
  token: string;
  otpCode: number;
  lang: string;
}

export class ResetPasswordRequest {
  token: string;
  lang: string;
  password: string;
  confirmPassword: string;
}

export class SignUpWithEmailRequest {
  email: string;
  password: string;
  lang: string;
}

export class SignInWithEmailRequest {
  email: string;
  password: string;
  lang: string;
}

export class SignUpWithPhoneNumberRequest {
  accessToken: string;
  lang: string;
}

export class SignInWithPhoneNumberRequest {
  phoneNumber: string;
}
