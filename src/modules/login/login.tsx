import { AIcreateElement, router } from 'core';
import { Widget } from 'components/containers';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { get } from 'utils/get';
import { LoginProps } from './types';

import './login.css';
import { ROUTES, ROUTE_TYPES } from 'constants';

const Login = ({
  login = '',
  password = '',
  errorMessage = '',
  error,
  handleChange,
  handleSubmit,
}: LoginProps) => (
  <form onSubmit={handleSubmit} className='login'>
    <Widget className='login__widget'>
      <div className='login__group'>
        <h3 className='login__title'>Вход</h3>
        <div className='login__wrapper'>
          <Input
            value={login}
            id='login'
            label='Логин'
            handleChange={handleChange}
            name='login'
            error={get(error, 'login')}
          />
        </div>
        <Input
          id='password'
          value={password}
          label='Пароль'
          name='password'
          error={get(error, 'password')}
          type='password'
          handleChange={handleChange}
        />
      </div>
      <p>{errorMessage}</p>
      <div className='login__group login__group_bottom'>
        <Button id='input' type='submit' view='primary' label='Войти' />
        <Button
          id='signup'
          label='Нет аккаунта?'
          handleClick={() => router.go(ROUTES[ROUTE_TYPES.SIGNUP])}
        />
      </div>
    </Widget>
  </form>
);

export default Login;
