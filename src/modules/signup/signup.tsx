import { AIcreateElement } from 'core';
import { Widget } from 'components/containers';

import './signup.css';
import { Input } from 'components/input';
import { Button } from 'components/button';

const Signup = () => (
  <Widget className='signup__widget'>
    <div className='signup__group'>
      <h3 className='signup__title'>Регистрация</h3>
      <Input value='' label='Почта' name='email' />
      <Input value='' label='Логин' name='login' />
      <Input value='' label='Имя' name='first_name' />
      <Input value='' label='Фамилия' name='second_name' />
      <Input value='' label='Телефон' name='phone' />
      <Input value='' type='password' name='password' label='Пароль' />
      <Input
        value=''
        type='password'
        label='Пароль (ещё раз)'
        error='Пароли не совпадают'
        name='password2'
      />
    </div>
    <div className='signup__group signup__group_bottom'>
      <Button label='Зарегистрироваться' type='primary' />
    </div>
  </Widget>
);

export default Signup;
