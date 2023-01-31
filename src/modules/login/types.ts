interface LoginProps {
  login: string;
  password: string;
  error: { login: string; password: string };
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

export { LoginProps };
