import { AIcreateElement } from 'core';
import { Widget } from 'components/containers';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { getError } from 'utils/regexp';
import { SignupProps } from './types';

import './signup.css';

const Signup = ({
  login = '',
  email = '',
  first_name = '',
  second_name = '',
  phone = '',
  password = '',
  second_password = '',
  error,
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
          error={getError(error?.email)}
        />
        <Input
          value={login}
          handleChange={handleChange}
          label='Логин'
          name='login'
          error={getError(error?.login)}
        />
        <Input
          value={first_name}
          handleChange={handleChange}
          label='Имя'
          name='first_name'
          error={getError(error?.first_name)}
        />
        <Input
          value={second_name}
          handleChange={handleChange}
          label='Фамилия'
          name='second_name'
          error={getError(error?.second_name)}
        />
        <Input
          value={phone}
          handleChange={handleChange}
          label='Телефон'
          name='phone'
          error={getError(error?.phone)}
        />
        <Input
          value={password}
          handleChange={handleChange}
          type='password'
          name='password'
          label='Пароль'
          error={getError(error?.password)}
        />
        <Input
          value={second_password}
          handleChange={handleChange}
          type='password'
          label='Пароль (ещё раз)'
          error={getError(error?.second_password)}
          name='second_password'
        />
      </div>
      <div className='signup__group signup__group_bottom'>
        <Button type='submit' label='Зарегистрироваться' view='primary' />
      </div>
    </Widget>
  </form>
);

export default Signup;
