import Avatar from 'components/avatar/avatar';
import { AIcreateElement } from 'core';
import { ISearchUser } from 'types';

import './seacrh-item.css';

interface SearchItemProps {
  user: ISearchUser;
}

export const SearchItem = ({ user }: SearchItemProps) => (
  <li className='search-item'>
    <Avatar className='search-item__image-container' src={user.avatar} />
    <div className='search-item__content'>
      <h2 className='search-item__title'>
        {user.first_name} {user.second_name}
      </h2>

      <p className='search-item__text'>{user.phone || user.login}</p>
    </div>
  </li>
);
