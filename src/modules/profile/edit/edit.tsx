import { Button } from 'components/button';
import { CHATLIST_VIEW } from 'constants';
import { AIcreateElement } from 'core';
import { EditPassword } from './components/edit-password';
import { PersonalInfo } from './components/personal-info';
import { isEmpty } from 'utils/isEmpty';
import { EditProps } from './types';

import './edit.css';

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
    disabled={!isEmpty(error)}
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
        disabled={!isEmpty(error)}
        type='submit'
        view='secondary'
        label='Сохранить'
      />
    </div>
  </form>
);

export default Edit;
