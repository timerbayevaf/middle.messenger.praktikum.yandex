interface SignupProps {
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
  second_password: string;
  error: Pick<
    SignupProps,
    | 'login'
    | 'password'
    | 'second_password'
    | 'email'
    | 'first_name'
    | 'phone'
    | 'second_name'
  >;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

export { SignupProps };
