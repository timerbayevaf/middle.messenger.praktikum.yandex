import { AIcreateElement, Router } from 'core';

import { Icon, Icons } from 'components/icon';
import { Button } from 'components/button';
import { Search } from '../search';
import { cn } from 'utils/cn';
import { CHATLIST_VIEW, MODAL_TYPE, ROUTES, ROUTE_TYPES } from 'constant';
import { HeaderProps } from './types';

import './header.css';
const router = new Router();

const Header = ({
  searchValue = '',
  viewType,
  handleChangeSearch,
  handleChangeVisibleModal,
}: HeaderProps) => {
  const isShowSearch =
    viewType === CHATLIST_VIEW.CHAT_LIST || viewType === CHATLIST_VIEW.SEARCH;

  const handleClick = (e: Event) => {
    e.stopPropagation();

    if (isShowSearch) {
      const rect = (e.target as HTMLButtonElement).getBoundingClientRect();

      handleChangeVisibleModal({
        modalType: MODAL_TYPE.PROFILE,
        rect,
      });
    } else {
      if (
        viewType === CHATLIST_VIEW.EDIT_PASSWORD ||
        viewType === CHATLIST_VIEW.EDIT_PROFILE
      ) {
        router.back();
      } else {
        router.go(ROUTES[ROUTE_TYPES.CHAT_LIST]);
      }
    }
  };

  const icon = isShowSearch ? (
    <Icon size={20} type={Icons.Menu} />
  ) : (
    <Icon size={20} type={Icons.ArrowBack} />
  );

  const title = viewType === CHATLIST_VIEW.ADD_CHAT ? 'Создать чат' : 'Профиль';

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
