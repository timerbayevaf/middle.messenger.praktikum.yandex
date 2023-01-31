import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';
import { SPEC_NAME } from 'utils/regexp';

interface EditProps {
  viewType: CHATLIST_VIEW;
  user: Pick<
    IUser,
    'login' | 'email' | 'first_name' | 'display_name' | 'second_name' | 'phone'
  >;
  password: {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  error: { [key in SPEC_NAME]?: string };
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

export { EditProps };
