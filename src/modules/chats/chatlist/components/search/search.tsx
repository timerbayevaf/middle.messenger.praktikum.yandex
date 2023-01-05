import { AIcreateElement } from 'core';
import { Input } from 'components/input';

interface SearchProps {
  value: string;
  handleChange?(e: Event): void;
}

const Search = ({ value = '', handleChange }: SearchProps) => (
  <Input value={value} label='Поиск' handleChange={handleChange} />
);

export default Search;
