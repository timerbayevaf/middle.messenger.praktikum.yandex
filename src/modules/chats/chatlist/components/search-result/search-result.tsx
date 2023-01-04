import { List } from 'components/list';
import { AIcreateElement } from 'core';
import { SearchItem } from '../search-item';

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
    <List
      items={chatList}
      renderItem={(el) => (
        <SearchItem
          avatar={el.avatar}
          first_name={el.first_name}
          second_name={el.second_name}
          login={el.second_name}
          phone={el.second_name}
        />
      )}
    />
  );
};

export default SearchResult;
