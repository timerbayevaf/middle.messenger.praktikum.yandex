import { AIcreateElement } from 'core';

import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

import './chat-container.css';
import Profile from 'modules/profile';
import Header from './components/header/header';
import { PROFILE_VIEW } from 'constants';

interface ChatlistContainerProps {
  searchValue: string;
}

const ChatlistContainer = ({ searchValue = '' }: ChatlistContainerProps) => {
  const isShowSearch = searchValue.length > 0;
  const isShowProfile = true;
  const isShowChatList = false;
  const title = 'Профиль';
  const viewType = PROFILE_VIEW.VIEW;

  return (
    <aside className='chatlist'>
      <Header
        isShowSearch={!isShowProfile}
        title={title}
        searchValue={searchValue}
      />

      <SearchResult isShow={isShowSearch} />
      <ChatList isShow={isShowChatList} activeId={123} />
      <Profile viewType={viewType} isShow={isShowProfile} />
    </aside>
  );
};

export default ChatlistContainer;
