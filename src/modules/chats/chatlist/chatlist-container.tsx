import { AIcreateElement } from 'core';

import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

import './chat-container.css';
import Profile from 'modules/profile';
import Header from './components/header/header';
import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';
import { SPEC_NAME } from 'utils/regexp';

interface ChatlistContainerProps {
  searchValue: string;
  user: IUser;
  viewType: CHATLIST_VIEW;
  activeId: number | null;
  password: {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  profileError: { [key in SPEC_NAME]?: string };
  handleChangeActiveChat(id: number): void;
  handleChangeSearch(e: Event): void;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
}

const ChatlistContainer = ({
  searchValue = '',
  user,
  viewType,
  activeId,
  password,
  profileError,
  handleChangeActiveChat,
  handleChangeSearch,
  handleChangeFields,
  handleSubmitFields,
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
        handleChangeSearch={handleChangeSearch}
      />

      <SearchResult isShow={isShowSearch} />
      <ChatList
        isShow={isShowChatList}
        handleChangeActiveChat={handleChangeActiveChat}
        activeId={activeId}
      />
      <Profile
        error={profileError}
        handleChangeFields={handleChangeFields}
        handleSubmitFields={handleSubmitFields}
        user={user}
        viewType={viewType}
        isShow={isShowProfile}
        password={password}
      />
    </aside>
  );
};

export default ChatlistContainer;
