import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { Input } from 'components/input';
import { AIcreateElement } from 'core';
import { IUser } from 'types';

import './edit.css';

interface EditProps extends IUser {
  isShow: boolean;
}

const Edit = ({
  isShow,
  login,
  email,
  first_name,
  second_name,
  avatar,
  phone,
}: EditProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <div className='edit'>
      <div className='edit__info'>
        <Input label='Почта' value='' />
        <Input label='Логин' value='' />
        <Input label='Имя' value='' />
        <Input label='Фамилия' value='' />
        <Input label='Телефон' value='' />
      </div>
      <div className='edit__button-block'>
        <Button type='secondary' label='Сохранить' />
      </div>
    </div>
  );
};

export default Edit;
