import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { IUser } from 'types';

import './personal-info.css';

interface PersonalInfoProps
  extends Pick<
    IUser,
    'login' | 'email' | 'first_name' | 'display_name' | 'second_name' | 'phone'
  > {}

const PersonalInfo = ({
  login,
  email,
  first_name,
  display_name,
  second_name,
  phone,
}: PersonalInfoProps) => (
  <div className='personal-info'>
    <Input label='Почта' value={email} name='email' />
    <Input label='Логин' value={login} name='login' />
    <Input label='Имя' value={first_name} name='first_name' />
    <Input label='Имя в чате' value={display_name} name='display_name' />
    <Input label='Фамилия' value={second_name} name='second_name' />
    <Input label='Телефон' value={phone} name='phone' />
  </div>
);

export default PersonalInfo;
