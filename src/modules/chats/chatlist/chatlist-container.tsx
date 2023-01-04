import { AIcreateElement } from 'core';

import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

import './chat-container.css';
import Profile from 'modules/profile';
import Header from './components/header/header';
import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';

interface ChatlistContainerProps {
  searchValue: string;
  user: IUser;
  viewType: CHATLIST_VIEW;
  isSelectedChat: boolean;
}

const ChatlistContainer = ({
  searchValue = '',
  user,
  viewType,
  isSelectedChat,
}: ChatlistContainerProps) => {
  const isShowSearch = viewType === CHATLIST_VIEW.SEARCH;
  const isShowProfile =
    viewType === CHATLIST_VIEW.VIEW_PROFILE ||
    viewType === CHATLIST_VIEW.EDIT_PROFILE ||
    viewType === CHATLIST_VIEW.EDIT_PASSWORD;

  const isShowChatList = viewType === CHATLIST_VIEW.CHAT_LIST;
  const title = 'Профиль';

  return (
    <aside className='chatlist'>
      <Header
        isShowSearch={!isShowProfile}
        title={title}
        searchValue={searchValue}
      />

      <SearchResult isShow={isShowSearch} />
      <ChatList
        isSelectedChat={isSelectedChat}
        isShow={isShowChatList}
        activeId={123}
      />
      <Profile user={user} viewType={viewType} isShow={isShowProfile} />
    </aside>
  );
};

export default ChatlistContainer;
