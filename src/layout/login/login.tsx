import { AIcreateElement } from 'core';
import { Widget } from 'components/containers';

import './login.css';
import { Input } from 'components/input';
import { Button } from 'components/button';

const Login = () => (
  <Widget className='login__widget'>
    <div className='login__group'>
      <h3 className='login__title'>Вход</h3>
      <div className='login__wrapper'>
        <Input
          value=''
          label='Логин'
          error='Пользователя с таким логином нет'
        />
      </div>
      <Input value='' label='Пароль' type='password' />
    </div>
    <div className='login__group login__group_bottom'>
      <Button type='primary' label='Авторизоваться' />
      <Button label='Нет аккаунта?' />
    </div>
  </Widget>
);

export default Login;
