import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { get } from 'utils/get';
import { PersonalInfoProps } from './types';

import './personal-info.css';

const PersonalInfo = ({
  user,
  profileInfo,
  error,
  handleChange,
}: PersonalInfoProps) => (
  <div className='personal-info'>
    <Input
      label='Почта'
      defaultValue={get(user, 'email')}
      value={get(profileInfo, 'email') as string}
      type='email'
      name='email'
      error={get(error, 'email')}
      handleChange={handleChange}
    />
    <Input
      label='Логин'
      type='text'
      defaultValue={get(user, 'login')}
      value={get(profileInfo, 'login') as string}
      name='login'
      error={get(error, 'login')}
      handleChange={handleChange}
    />
    <Input
      label='Имя'
      type='text'
      defaultValue={get(user, 'first_name')}
      value={get(profileInfo, 'first_name') as string}
      error={get(error, 'first_name')}
      name='first_name'
      handleChange={handleChange}
    />
    <Input
      label='Имя в чате'
      type='text'
      defaultValue={get(user, 'display_name')}
      value={get(profileInfo, 'display_name') as string}
      error={get(error, 'display_name')}
      name='display_name'
      handleChange={handleChange}
    />
    <Input
      label='Фамилия'
      type='text'
      defaultValue={get(user, 'second_name')}
      value={get(profileInfo, 'second_name') as string}
      error={get(error, 'second_name')}
      name='second_name'
      handleChange={handleChange}
    />
    <Input
      label='Телефон'
      type='text'
      defaultValue={get(user, 'phone')}
      value={get(profileInfo, 'phone') as string}
      error={get(error, 'phone')}
      name='phone'
      handleChange={handleChange}
    />
  </div>
);

export default PersonalInfo;
