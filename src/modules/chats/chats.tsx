import { AIcreateElement } from 'core';

import ChatContainer from './chat/chat-container';
import ChatlistContainer from './chatlist';
import NoSelectedChat from './no-selected-chat';
import { ChatsProps } from './types';

import './chats.css';

const Chats = ({
  searchValue,
  chatMessages,
  viewType,
  activeId,
  message,
  profileInfo,
  profileError,
  handleChangeActiveChat,
  handleChangeSearch,
  handleChangeMessage,
  handleSubmitMessage,
  handleChangeFields,
  handleSubmitFields,
  handleChangeVisibleModal,
  handleChangeUrl,
}: ChatsProps) => (
  <div className='chats'>
    <ChatlistContainer
      activeId={activeId}
      viewType={viewType}
      searchValue={searchValue}
      user={profileInfo}
      handleChangeActiveChat={handleChangeActiveChat}
      handleChangeSearch={handleChangeSearch}
      password={profileInfo}
      profileError={profileError}
      handleChangeVisibleModal={handleChangeVisibleModal}
      handleChangeFields={handleChangeFields}
      handleSubmitFields={handleSubmitFields}
      handleChangeUrl={handleChangeUrl}
    />

    {activeId !== null ? (
      <ChatContainer
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
