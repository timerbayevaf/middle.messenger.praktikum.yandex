import { AIcreateElement } from 'core';
import View from './view';

interface ProfileProps {
  isShow: boolean;
}

const Profile = ({ isShow }: ProfileProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <View
      login='aironrich'
      email='aironrich@ya.ru'
      first_name='Aynur'
      second_name='Timerbayev'
      avatar='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296'
      phone='+7 964 955 05 66'
    />
  );
};

export default Profile;
