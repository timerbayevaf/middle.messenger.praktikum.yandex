import { AIcreateElement } from 'core';

import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

import './chat-container.css';
import Profile from 'modules/profile';
import Header from './components/header/header';
import { CHATLIST_VIEW } from 'constant';
import { ChatlistContainerProps } from './types';
import { CreateChat } from './components/create-chat';

const ChatlistContainer = ({
  chats,
  searchValue = '',
  user,
  viewType,
  chat,
  profilePassword,
  profileInfo,
  profileError,
  handleChangeActiveChat,
  handleChangeSearch,
  handleChangeVisibleModal,
  handleChangeViewType,
  handleChangeAvatar,
  handleChangeUserInfoFields,
  handleSubmitUserInfoFields,
  handleChangeUserPasswordFields,
  handleSubmitUserPasswordFields,
  handleSubmitCreateChat,
}: ChatlistContainerProps) => {
  const isShowChatList = viewType === CHATLIST_VIEW.CHAT_LIST;

  return (
    <aside className='chatlist'>
      <Header
        viewType={viewType}
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
        handleChangeVisibleModal={handleChangeVisibleModal}
        handleChangeViewType={handleChangeViewType}
      />

      <SearchResult isShow={viewType === CHATLIST_VIEW.SEARCH} />
      <ChatList
        chats={chats}
        isShow={isShowChatList}
        handleChangeActiveChat={handleChangeActiveChat}
        chat={chat}
      />
      <CreateChat
        isShow={viewType === CHATLIST_VIEW.ADD_CHAT}
        handleSubmit={handleSubmitCreateChat}
      />
      <Profile
        handleChangeFields={
          viewType === CHATLIST_VIEW.EDIT_PROFILE
            ? handleChangeUserInfoFields
            : handleChangeUserPasswordFields
        }
        handleSubmitFields={
          viewType === CHATLIST_VIEW.EDIT_PROFILE
            ? handleSubmitUserInfoFields
            : handleSubmitUserPasswordFields
        }
        handleChangeViewType={handleChangeViewType}
        handleChangeAvatar={handleChangeAvatar}
        viewType={viewType}
        user={user}
        error={profileError}
        profileInfo={profileInfo}
        profilePassword={profilePassword}
      />
    </aside>
  );
};

export default ChatlistContainer;
