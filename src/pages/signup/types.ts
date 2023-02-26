import { ValidateType } from 'constants';

type SIGNUP_SPEC_TYPE =
  | ValidateType.Login
  | ValidateType.Email
  | ValidateType.FirstName
  | ValidateType.SecondName
  | ValidateType.Phone
  | ValidateType.Password
  | ValidateType.NewPassword;

interface SignupPageProps {
  errorMessage: string | null;
}

interface SignupPageState
  extends Pick<
    SignupProps,
    | 'first_name'
    | 'second_name'
    | 'email'
    | 'phone'
    | 'login'
    | 'password'
    | 'newPassword'
    | 'error'
  > {}

interface SignupProps {
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
  login: string;
  password: string;
  newPassword: string;
  error: Record<string, string>;
  errorMessage: string | null;
  handleChange(e: Event): void;
  handleSubmit(e: Event): void;
}

export { SIGNUP_SPEC_TYPE, SignupProps, SignupPageState, SignupPageProps };
