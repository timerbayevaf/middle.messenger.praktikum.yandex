import { List } from 'components/list';
import { AIcreateElement } from 'core';
import { ISearchUser } from 'types';
import { SearchItem } from '../search-item';
import { SearchResultProps } from './types';

const SearchResult = ({ isShow }: SearchResultProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <List
      items={[] as ISearchUser[]}
      renderItem={(el) => (
        <SearchItem
          avatar={el.avatar}
          first_name={el.first_name}
          second_name={el.second_name}
          login={el.second_name}
          phone={el.second_name}
          id={0}
          display_name={null}
        />
      )}
    />
  );
};

export default SearchResult;
