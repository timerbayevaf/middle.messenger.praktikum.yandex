interface InputFieldProps {
  value: string;
  label?: string;
  type?: string;
  error?: string;
  name?: string;
  handleChange?: JSX.EventHandler;
  handleBlur?: JSX.EventHandler;
  handleFocus?: JSX.EventHandler;
}

export { InputFieldProps };
