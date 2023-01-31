import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';
import { SPEC_NAME } from 'utils/regexp';

interface ProfileProps {
  isShow: boolean;
  viewType: CHATLIST_VIEW;
  user: IUser;
  password: {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  error: { [key in SPEC_NAME]?: string };
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
}

export { ProfileProps };
