interface LoginProps {
  login: string;
  password: string;
  errorMessage: string | null;
  error: { login: string; password: string };
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

export { LoginProps };
