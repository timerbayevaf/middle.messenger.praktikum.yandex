import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { getError } from 'utils/regexp';
import { PersonalInfoProps } from './types';

import './personal-info.css';

const PersonalInfo = ({
  login,
  email,
  first_name,
  display_name = '',
  second_name,
  phone,
  error,
  handleChange,
}: PersonalInfoProps) => (
  <div className='personal-info'>
    <Input
      label='Почта'
      value={email}
      type='email'
      name='email'
      error={getError(error?.email)}
      handleChange={handleChange}
    />
    <Input
      label='Логин'
      type='text'
      value={login}
      name='login'
      error={getError(error?.login)}
      handleChange={handleChange}
    />
    <Input
      label='Имя'
      type='text'
      value={first_name}
      error={getError(error?.first_name)}
      name='first_name'
      handleChange={handleChange}
    />
    <Input
      label='Имя в чате'
      type='text'
      value={display_name}
      error={getError(error?.display_name)}
      name='display_name'
      handleChange={handleChange}
    />
    <Input
      label='Фамилия'
      type='text'
      value={second_name}
      error={getError(error?.second_name)}
      name='second_name'
      handleChange={handleChange}
    />
    <Input
      label='Телефон'
      type='text'
      value={phone}
      error={getError(error?.phone)}
      name='phone'
      handleChange={handleChange}
    />
  </div>
);

export default PersonalInfo;
