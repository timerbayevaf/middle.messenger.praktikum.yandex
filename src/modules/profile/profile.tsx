import { AIcreateElement } from 'core';
import { CHATLIST_VIEW } from 'constants';
import View from './view';
import Edit from './edit';
import { ProfileProps } from './types';

const Profile = ({
  isShow,
  user,
  password,
  error,
  viewType = CHATLIST_VIEW.VIEW_PROFILE,
  handleChangeFields,
  handleSubmitFields,
  handleChangeUrl,
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
        handleChangeUrl={handleChangeUrl}
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
