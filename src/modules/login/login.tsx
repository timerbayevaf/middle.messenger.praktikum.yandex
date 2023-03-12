import { AIcreateElement, Router } from 'core';
import { Widget } from 'components/containers';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { get } from 'utils/get';
import { LoginProps } from './types';

import './login.css';
import { ROUTES, ROUTE_TYPES } from 'constant';
const router = new Router();

const Login = ({
  login = '',
  password = '',
  errorMessage = '',
  error,
  handleChange,
  handleSubmit,
}: LoginProps) => (
  <form onSubmit={handleSubmit} className='login' data-testid='login-form'>
    <Widget className='login__widget'>
      <div className='login__group'>
        <h3 className='login__title'>Вход</h3>
        <div className='login__wrapper'>
          <Input
            id='login-field'
            name='login'
            value={login}
            label='Логин'
            type='text'
            handleChange={handleChange}
            error={get(error, 'login')}
          />
        </div>
        <Input
          id='password-field'
          name='password'
          value={password}
          label='Пароль'
          error={get(error, 'password')}
          type='password'
          handleChange={handleChange}
        />
      </div>
      <p data-testid='error-message'>{errorMessage}</p>
      <div className='login__group login__group_bottom'>
        <Button id='login-btn' type='submit' view='primary' label='Войти' />
        <Button
          id='signup-btn'
          label='Нет аккаунта?'
          handleClick={() => router.go(ROUTES[ROUTE_TYPES.SIGNUP])}
        />
      </div>
    </Widget>
  </form>
);

export default Login;
