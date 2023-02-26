import { AIcreateElement } from 'core';
import { CHATLIST_VIEW } from 'constants';
import View from './view';
import Edit from './edit';
import { ProfileProps } from './types';

const Profile = ({
  user,
  profileInfo,
  profilePassword,
  error,
  viewType = CHATLIST_VIEW.VIEW_PROFILE,
  handleChangeFields,
  handleSubmitFields,
  handleChangeViewType,
  handleChangeAvatar,
}: ProfileProps) => {
  if (viewType === CHATLIST_VIEW.VIEW_PROFILE) {
    return (
      <View
        user={user}
        handleChangeViewType={handleChangeViewType}
        handleChangeAvatar={handleChangeAvatar}
      />
    );
  }

  if (
    viewType === CHATLIST_VIEW.EDIT_PROFILE ||
    viewType === CHATLIST_VIEW.EDIT_PASSWORD
  ) {
    return (
      <Edit
        handleChange={handleChangeFields}
        handleSubmit={handleSubmitFields}
        viewType={viewType}
        user={{ ...profileInfo, ...user }}
        profileInfo={profileInfo}
        password={profilePassword}
        error={error}
      />
    );
  }

  return null;
};

export default Profile;
