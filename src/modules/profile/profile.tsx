import { AIcreateElement } from 'core';
import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';
import View from './view';
import Edit from './edit';
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
}

const Profile = ({
  isShow,
  user,
  password,
  error,
  viewType = CHATLIST_VIEW.VIEW_PROFILE,
  handleChangeFields,
  handleSubmitFields,
}: ProfileProps) => {
  if (!isShow) {
    return null;
  }

  if (viewType === CHATLIST_VIEW.VIEW_PROFILE) {
    return (
      <View
        login={user?.login}
        email={user?.email}
        first_name={user?.first_name}
        second_name={user?.second_name}
        avatar={user?.avatar}
        phone={user?.second_name}
        display_name={user?.display_name}
      />
    );
  }

  return (
    <Edit
      handleChange={handleChangeFields}
      handleSubmit={handleSubmitFields}
      viewType={viewType}
      user={user}
      password={password}
      error={error}
    />
  );
};

export default Profile;
