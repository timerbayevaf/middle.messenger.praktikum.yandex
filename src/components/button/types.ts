type ButtonView = 'secondary' | 'primary' | 'none' | 'icon';
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonSize = 'large' | 'small' | 'medium';

interface ButtonProps {
  id?: string;
  handleClick?: JSX.EventHandler;
  label?: string;
  children?: string;
  className?: string;
  view?: ButtonView;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  name?: string;
}

export { ButtonProps };
