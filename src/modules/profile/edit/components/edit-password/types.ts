import { SPEC_NAME } from 'utils/regexp';

interface EditPasswordProps {
  old_password: string;
  new_password: string;
  second_new_password: string;
  error: { [key in SPEC_NAME]?: string };
  handleChange: JSX.EventHandler;
}

export { EditPasswordProps };
