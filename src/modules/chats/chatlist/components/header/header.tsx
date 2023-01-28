import { AIcreateElement } from 'core';

import { Icon, Icons } from 'components/icon';
import { Button } from 'components/button';
import { Search } from '../search';
import { cn } from 'utils/cn';
import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';
import { HeaderProps } from './types';

import './header.css';

const Header = ({
  searchValue = '',
  title,
  isShowSearch,
  handleChangeSearch,
  handleChangeVisibleModal,
  handleChangeUrl,
}: HeaderProps) => {
  const handleClick = (e: Event) => {
    e.stopPropagation();

    if (isShowSearch) {
      const rect = (e.target as HTMLButtonElement).getBoundingClientRect();

      handleChangeVisibleModal({
        modalType: MODAL_TYPE.PROFILE,
        rect,
      });
    } else {
      handleChangeUrl(CHATLIST_VIEW.CHAT_LIST);
    }
  };

  const icon = isShowSearch ? (
    <Icon size={20} type={Icons.Menu} />
  ) : (
    <Icon size={20} type={Icons.ArrowBack} />
  );

  return (
    <div className={cn('header', { 'header_bg-white': !isShowSearch })}>
      {isShowSearch ? (
        <Search value={searchValue} handleChange={handleChangeSearch} />
      ) : (
        <div className='header__title'>{title}</div>
      )}
      <Button view='icon' size='small' handleClick={handleClick}>
        {icon}
      </Button>
    </div>
  );
};

export default Header;
