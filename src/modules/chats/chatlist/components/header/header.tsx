import { AIcreateElement } from 'core';

import { Icon, Icons } from 'components/icon';
import { Button } from 'components/button';

import './header.css';
import { Search } from '../search';
import { cn } from 'utils/cn';

interface ChatlistContainerProps {
  searchValue: string;
  title: string;
  isShowSearch: boolean;
  handleChangeSearch(e: Event): void;
}

const Header = ({
  searchValue = '',
  title,
  isShowSearch,
  handleChangeSearch,
}: ChatlistContainerProps) => {
  return (
    <div className={cn('header', { 'header_bg-white': !isShowSearch })}>
      {isShowSearch ? (
        <Search value={searchValue} handleChange={handleChangeSearch} />
      ) : (
        <div className='header__title'>{title}</div>
      )}
      <Button view='icon' size='small'>
        <Icon size={20} type={isShowSearch ? Icons.Menu : Icons.ArrowBack} />
      </Button>
    </div>
  );
};

export default Header;
