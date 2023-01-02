import { AIcreateElement } from 'core';
import { ISearchUser } from 'types';
import { SearchItem } from '../search-item';

import './search-result.css';

interface SearchResultProps {
  userList: ISearchUser[];
}

const SearchResult = ({ userList }: SearchResultProps) => (
  <ul className='search-result'>
    {userList?.map((user) => (
      <SearchItem user={user} />
    ))}
  </ul>
);

export default SearchResult;
