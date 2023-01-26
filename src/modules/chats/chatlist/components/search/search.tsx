import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { SearchProps } from './types';

const Search = ({ value = '', handleChange }: SearchProps) => (
  <Input value={value} label='Поиск' handleChange={handleChange} />
);

export default Search;
