import { AIcreateElement, AIcreateFragment } from 'core';
import View from './view';
import { PROFILE_VIEW } from 'constants';
import Edit from './edit';

interface ProfileProps {
  isShow: boolean;
  viewType: PROFILE_VIEW;
}

const Profile = ({ isShow, viewType = PROFILE_VIEW.VIEW }: ProfileProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <>
      <View
        isShow={viewType === PROFILE_VIEW.VIEW}
        login='aironrich'
        email='aironrich@ya.ru'
        first_name='Aynur'
        second_name='Timerbayev'
        avatar='/img/profile1.png'
        phone='+7 964 955 05 66'
        display_name={'Айнур'}
      />
      <Edit
        viewType={viewType}
        login='aironrich'
        email='aironrich@ya.ru'
        first_name='Aynur'
        second_name='Timerbayev'
        phone='+7 964 955 05 66'
        display_name={'Айнур'}
      />
    </>
  );
};

export default Profile;
