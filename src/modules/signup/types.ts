interface SignupProps {
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  newPassword: string;
  phone: string;
  password: string;
  error: Record<string, string>;
  errorMessage: string | null;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

export { SignupProps };
