import { ValidateType } from 'constant';

type LOGIN_SPEC_TYPE = ValidateType.Login | ValidateType.Password;

type LoginPageProps = {
  errorMessage: string | null;
};

type LoginPageState = {
  error: { login: string; password: string };
  password: string;
  login: string;
};

type LoginProps = LoginPageProps &
  LoginPageState & {
    handleChange(e: Event): void;
    handleSubmit(e: Event): void;
  };

export { LoginProps, LOGIN_SPEC_TYPE, LoginPageProps, LoginPageState };
