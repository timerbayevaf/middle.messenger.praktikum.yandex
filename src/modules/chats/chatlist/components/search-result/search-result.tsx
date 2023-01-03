import { AIcreateElement } from 'core';
import { SearchItem } from '../search-item';

import './search-result.css';

const chatList = [
  {
    id: 123,
    first_name: 'Petya',
    second_name: 'Pupkin',
    avatar: 'img/avatar2.png',
    email: 'my@email.com',
    login: 'userLogin',
    phone: '8(911)-222-33-22',
  },
  {
    id: 12,
    first_name: 'Artem',
    second_name: 'Pupkin',
    avatar: '/img/avatar5.png',
    email: 'my@email.com',
    login: 'userLogin',
    phone: '8(911)-222-33-22',
  },
];

interface SearchResultProps {
  isShow: boolean;
}

const SearchResult = ({ isShow }: SearchResultProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <ul className='search-result'>
      {chatList?.map((user) => (
        <SearchItem user={user} />
      ))}
    </ul>
  );
};

export default SearchResult;
