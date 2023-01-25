import { AIcreateElement } from 'core';
import { Widget } from 'components/containers';

import './login.css';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { getError } from 'utils/regexp';

interface LoginProps {
  login: string;
  password: string;
  error: { login: string; password: string };
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

const Login = ({
  login = '',
  password = '',
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
            label='Логин'
            handleChange={handleChange}
            name='login'
            error={getError(error?.login)}
          />
        </div>
        <Input
          value={password}
          label='Пароль'
          name='password'
          error={getError(error?.password)}
          type='password'
          handleChange={handleChange}
        />
      </div>
      <div className='login__group login__group_bottom'>
        <Button type='submit' view='primary' label='Войти' />
        <Button label='Нет аккаунта?' />
      </div>
    </Widget>
  </form>
);

export default Login;
