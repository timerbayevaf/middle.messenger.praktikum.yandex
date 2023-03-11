import { AIcreateElement, Router } from 'core';
import { Widget } from 'components/containers';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { get } from 'utils/get';
import { SignupProps } from './types';

import './signup.css';
import { ROUTES, ROUTE_TYPES } from 'constant';
const router = new Router();

const Signup = ({
  login = '',
  email = '',
  first_name = '',
  second_name = '',
  phone = '',
  password = '',
  newPassword = '',
  error,
  errorMessage,
  handleSubmit,
  handleChange,
}: SignupProps) => (
  <form onSubmit={handleSubmit} className='signup'>
    <Widget className='signup__widget'>
      <div className='signup__group'>
        <h3 className='signup__title'>Регистрация</h3>
        <Input
          value={email}
          handleChange={handleChange}
          label='Почта'
          name='email'
          error={get(error, 'email')}
        />
        <Input
          value={login}
          handleChange={handleChange}
          label='Логин'
          name='login'
          error={get(error, 'login')}
        />
        <Input
          value={first_name}
          handleChange={handleChange}
          label='Имя'
          name='first_name'
          error={get(error, 'first_name')}
        />
        <Input
          value={second_name}
          handleChange={handleChange}
          label='Фамилия'
          name='second_name'
          error={get(error, 'second_name')}
        />
        <Input
          value={phone}
          handleChange={handleChange}
          label='Телефон'
          name='phone'
          error={get(error, 'phone')}
        />
        <Input
          value={password}
          handleChange={handleChange}
          type='password'
          name='password'
          label='Пароль'
          error={get(error, 'password')}
        />
        <Input
          value={newPassword}
          handleChange={handleChange}
          type='password'
          label='Пароль (ещё раз)'
          error={get(error, 'newPassword')}
          name='newPassword'
        />
      </div>
      <p>{errorMessage}</p>
      <div className='signup__group signup__group_bottom'>
        <Button type='submit' label='Зарегистрироваться' view='primary' />
        <Button
          id='signup'
          label='Войти'
          handleClick={() => router.go(ROUTES[ROUTE_TYPES.LOGIN])}
        />
      </div>
    </Widget>
  </form>
);

export default Signup;
