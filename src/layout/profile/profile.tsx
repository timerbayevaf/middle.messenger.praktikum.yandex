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
        avatar='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296'
        phone='+7 964 955 05 66'
      />
      <Edit
        isShow={viewType === PROFILE_VIEW.EDIT}
        login='aironrich'
        email='aironrich@ya.ru'
        first_name='Aynur'
        second_name='Timerbayev'
        avatar='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296'
        phone='+7 964 955 05 66'
      />
    </>
  );
};

export default Profile;
