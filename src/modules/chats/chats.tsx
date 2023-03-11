import { AIcreateElement } from 'core';

import ChatContainer from './chat/chat-container';
import ChatlistContainer from './chatlist';
import NoSelectedChat from './no-selected-chat';
import { ChatsProps } from './types';

import './chats.css';

const Chats = ({
  chats,
  searchValue,
  chatMessages,
  viewType,
  chat,
  message,
  user,
  profileInfo,
  profilePassword,
  profileError,
  handleChangeActiveChat,
  handleChangeSearch,
  handleChangeMessage,
  handleSubmitMessage,
  handleChangeVisibleModal,
  handleChangeViewType,
  handleChangeAvatar,
  handleChangeUserInfoFields,
  handleSubmitUserInfoFields,
  handleChangeUserPasswordFields,
  handleSubmitUserPasswordFields,
  handleSubmitCreateChat,
}: ChatsProps) => (
  <div className='chats' data-testid='main'>
    <ChatlistContainer
      chats={chats}
      handleSubmitCreateChat={handleSubmitCreateChat}
      chat={chat}
      viewType={viewType}
      searchValue={searchValue}
      user={user}
      profileInfo={profileInfo}
      profilePassword={profilePassword}
      handleChangeActiveChat={handleChangeActiveChat}
      handleChangeSearch={handleChangeSearch}
      profileError={profileError}
      handleChangeVisibleModal={handleChangeVisibleModal}
      handleChangeViewType={handleChangeViewType}
      handleChangeAvatar={handleChangeAvatar}
      handleChangeUserInfoFields={handleChangeUserInfoFields}
      handleSubmitUserInfoFields={handleSubmitUserInfoFields}
      handleChangeUserPasswordFields={handleChangeUserPasswordFields}
      handleSubmitUserPasswordFields={handleSubmitUserPasswordFields}
    />

    {chat?.id && chat?.id !== null ? (
      <ChatContainer
        chat={chat}
        message={message}
        chatMessages={chatMessages}
        user={profileInfo}
        handleChange={handleChangeMessage}
        handleChangeVisibleModal={handleChangeVisibleModal}
        handleSubmit={handleSubmitMessage}
      />
    ) : (
      <NoSelectedChat />
    )}
  </div>
);

export default Chats;
