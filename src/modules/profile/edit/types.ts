import { CHATLIST_VIEW } from 'constants';
import { IUserDTO } from 'types';

interface EditProps {
  viewType: CHATLIST_VIEW;
  profileInfo: IUserDTO;
  user: IUserDTO | null;
  password: {
    oldPassword: string;
    newPassword: string;
    password: string;
  };
  error: Record<string, string>;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

export { EditProps };
