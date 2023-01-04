import { List } from 'components/list';
import { AIcreateElement } from 'core';
import { searchResult } from 'mocks';
import { SearchItem } from '../search-item';

interface SearchResultProps {
  isShow: boolean;
}

const SearchResult = ({ isShow }: SearchResultProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <List
      items={searchResult}
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
