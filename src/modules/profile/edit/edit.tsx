import { Button } from 'components/button';
import { CHATLIST_VIEW } from 'constants';
import { AIcreateElement } from 'core';
import { IUser } from 'types';
import { SPEC_NAME } from 'utils/regexp';
import { EditPassword } from './components/edit-password';
import { PersonalInfo } from './components/personal-info';
import { isEmpty } from 'utils/isEmpty';

import './edit.css';

interface EditProps {
  viewType: CHATLIST_VIEW;
  user: Pick<
    IUser,
    'login' | 'email' | 'first_name' | 'display_name' | 'second_name' | 'phone'
  >;
  password: {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  error: { [key in SPEC_NAME]?: string };
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

function isDisabled(error: { [key in SPEC_NAME]?: string }) {
  return !isEmpty(error);
}

const Edit = ({
  viewType,
  user,
  password,
  error,
  handleChange,
  handleSubmit,
}: EditProps) => (
  <form
    name={viewType}
    disabled={isDisabled(error)}
    onSubmit={handleSubmit}
    className='edit'
  >
    {viewType === CHATLIST_VIEW.EDIT_PROFILE && (
      <PersonalInfo
        login={user?.login}
        email={user?.email}
        first_name={user?.first_name}
        display_name={user?.display_name}
        second_name={user?.second_name}
        phone={user?.phone}
        error={error}
        handleChange={handleChange}
      />
    )}
    {viewType === CHATLIST_VIEW.EDIT_PASSWORD && (
      <EditPassword
        old_password={password?.old_password}
        new_password={password?.new_password}
        second_new_password={password?.second_new_password}
        error={error}
        handleChange={handleChange}
      />
    )}

    <div className='edit__button-block'>
      <Button
        disabled={isDisabled(error)}
        type='submit'
        view='secondary'
        label='Сохранить'
      />
    </div>
  </form>
);

export default Edit;
