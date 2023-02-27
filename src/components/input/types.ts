interface InputFieldProps {
  defaultValue?: string;
  id?: string;
  value: string;
  label?: string;
  type?: string;
  error?: string;
  name?: string;
  className?: string;
  accept?: string;
  handleChange?: JSX.EventHandler;
  handleBlur?: JSX.EventHandler;
  handleFocus?: JSX.EventHandler;
}

export { InputFieldProps };
