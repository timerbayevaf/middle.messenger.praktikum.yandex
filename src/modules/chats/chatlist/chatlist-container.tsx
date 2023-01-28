import { AIcreateElement } from 'core';

import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

import './chat-container.css';
import Profile from 'modules/profile';
import Header from './components/header/header';
import { CHATLIST_VIEW } from 'constants';
import { ChatlistContainerProps } from './types';

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
  handleChangeVisibleModal,
  handleChangeUrl,
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
        handleChangeUrl={handleChangeUrl}
        title={title}
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
        handleChangeVisibleModal={handleChangeVisibleModal}
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
        handleChangeUrl={handleChangeUrl}
        user={user}
        viewType={viewType}
        isShow={isShowProfile}
        password={password}
      />
    </aside>
  );
};

export default ChatlistContainer;
