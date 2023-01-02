import { AIcreateElement } from 'core';
import { Widget } from 'components/containers';

import './signup.css';
import { Input } from 'components/input';
import { Button } from 'components/button';

const Signup = () => (
  <Widget className='signup__widget'>
    <div className='signup__group'>
      <h3 className='signup__title'>Регистрация</h3>
      <Input value='' label='Почта' />
      <Input value='' label='Логин' />
      <Input value='' label='Имя' />
      <Input value='' label='Фамилия' />
      <Input value='' label='Телефон' />
      <Input value='' type='password' label='Пароль' />
      <Input
        value=''
        type='password'
        label='Пароль (ещё раз)'
        error='Пароли не совпадают'
      />
    </div>
    <div className='signup__group signup__group_bottom'>
      <Button label='Авторизоваться' type='primary' />
    </div>
  </Widget>
);

export default Signup;
