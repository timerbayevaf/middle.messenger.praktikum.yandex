import { Button } from 'components/button';
import { CHATLIST_VIEW } from 'constants';
import { AIcreateElement } from 'core';
import { IUser } from 'types';
import { EditPassword } from './components/edit-password';
import { PersonalInfo } from './components/personal-info';

import './edit.css';

interface EditProps
  extends Pick<
    IUser,
    'login' | 'email' | 'first_name' | 'display_name' | 'second_name' | 'phone'
  > {
  viewType: CHATLIST_VIEW;
}

const Edit = ({
  viewType,
  login,
  email,
  first_name,
  display_name,
  second_name,
  phone,
}: EditProps) => (
  <div className='edit'>
    {viewType === CHATLIST_VIEW.EDIT_PROFILE && (
      <PersonalInfo
        login={login}
        email={email}
        first_name={first_name}
        display_name={display_name}
        second_name={second_name}
        phone={phone}
      />
    )}
    {viewType === CHATLIST_VIEW.EDIT_PASSWORD && (
      <EditPassword oldPassword={''} newPassword={''} newPassword2={''} />
    )}

    <div className='edit__button-block'>
      <Button view='secondary' label='Сохранить' />
    </div>
  </div>
);

export default Edit;
