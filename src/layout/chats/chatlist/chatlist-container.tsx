import { AIcreateElement } from 'core';

import { Icon, Icons } from 'components/icon';
import { Button } from 'components/button';
import { ISearchUser } from 'types';

import { Search } from './components/search';
import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

import './chat-container.css';
import Profile from 'layout/profile';
import Header from './components/header/header';

interface ChatlistContainerProps {
  searchValue: string;
}

const ChatlistContainer = ({ searchValue = '' }: ChatlistContainerProps) => {
  const isShowSearch = searchValue.length > 0;
  const isShowProfile = true;
  const isShowChatList = false;
  const title = 'Профиль';

  return (
    <div className='chatlist'>
      <Header
        isShowSearch={!isShowProfile}
        title={title}
        searchValue={searchValue}
      />

      <SearchResult isShow={isShowSearch} />
      <ChatList isShow={isShowChatList} activeId={123} />
      <Profile isShow={isShowProfile} />
    </div>
  );
};

export default ChatlistContainer;
