type SIGNUP_SPEC_TYPE =
  | 'login'
  | 'email'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'password'
  | 'second_password';

interface SignupPageProps {}

interface SignupPageState
  extends Pick<
    SignupProps,
    | 'first_name'
    | 'second_name'
    | 'email'
    | 'phone'
    | 'login'
    | 'password'
    | 'second_password'
    | 'error'
  > {}

interface SignupProps {
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
  login: string;
  password: string;
  second_password: string;
  error: Pick<
    SignupProps,
    | 'first_name'
    | 'second_name'
    | 'email'
    | 'phone'
    | 'login'
    | 'password'
    | 'second_password'
  >;
  handleChange(e: Event): void;
  handleSubmit(e: Event): void;
}

export { SignupProps, SignupPageState, SignupPageProps, SIGNUP_SPEC_TYPE };
