import { CHATLIST_VIEW } from 'constant';
import { IUserDTO } from 'types';

interface ProfileProps {
  viewType: CHATLIST_VIEW;
  profilePassword: {
    oldPassword: string;
    newPassword: string;
    password: string;
  };
  user: IUserDTO | null;
  profileInfo: IUserDTO;
  error: Record<string, string>;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
  handleChangeAvatar: JSX.EventHandler;
  handleChangeViewType(profileViewType: CHATLIST_VIEW): void;
}

export { ProfileProps };
