interface EditPasswordProps {
  oldPassword: string;
  newPassword: string;
  password: string;
  error: Record<string, string>;
  handleChange: JSX.EventHandler;
}

export { EditPasswordProps };
