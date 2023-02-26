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
  profileInfo,
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
        user={user}
        profileInfo={profileInfo}
        error={error}
        handleChange={handleChange}
      />
    )}
    {viewType === CHATLIST_VIEW.EDIT_PASSWORD && (
      <EditPassword
        oldPassword={password?.oldPassword}
        newPassword={password?.newPassword}
        password={password?.password}
        error={error}
        handleChange={handleChange}
      />
    )}

    <div className='edit__button-block'>
      <Button type='submit' view='secondary' label='Сохранить' />
    </div>
  </form>
);

export default Edit;
