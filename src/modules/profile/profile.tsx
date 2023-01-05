import { AIcreateElement, AIcreateFragment } from 'core';
import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';
import View from './view';
import Edit from './edit';

interface ProfileProps {
  isShow: boolean;
  viewType: CHATLIST_VIEW;
  user: IUser;
}

const Profile = ({
  isShow,
  user,
  viewType = CHATLIST_VIEW.VIEW_PROFILE,
}: ProfileProps) => {
  if (!isShow) {
    return null;
  }

  if (viewType === CHATLIST_VIEW.VIEW_PROFILE) {
    return (
      <View
        login={user.login}
        email={user.email}
        first_name={user.first_name}
        second_name={user.second_name}
        avatar={user.avatar}
        phone={user.second_name}
        display_name={user.display_name}
      />
    );
  }

  return (
    <Edit
      viewType={viewType}
      login={user.login}
      email={user.email}
      first_name={user.first_name}
      second_name={user.second_name}
      phone={user.second_name}
      display_name={user.display_name}
    />
  );
};

export default Profile;
