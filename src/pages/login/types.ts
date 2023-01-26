type LOGIN_SPEC_TYPE = 'login' | 'password';

interface LoginPageProps {}

interface LoginPageState
  extends Pick<LoginProps, 'login' | 'password' | 'error'> {}

interface LoginProps {
  login: string;
  password: string;
  error: { login: string; password: string };
  handleChange(e: Event): void;
  handleSubmit(e: Event): void;
}

export { LoginProps, LOGIN_SPEC_TYPE, LoginPageProps, LoginPageState };
