import Avatar from 'components/avatar/avatar';
import { AIcreateElement } from 'core';
import { ISearchUser } from 'types';

import './seacrh-item.css';

interface SearchItemProps extends ISearchUser {}

export const SearchItem = ({
  avatar,
  first_name,
  second_name,
  phone,
  login,
}: SearchItemProps) => (
  <li className='list-item'>
    <Avatar
      title={first_name}
      className='list-item__avatar-block'
      src={avatar}
    />
    <div className='list-item__info-block'>
      <h2 className='search-item__title'>
        {first_name} {second_name}
      </h2>

      <p className='search-item__text'>{phone || login}</p>
    </div>
  </li>
);
