import { AIcreateElement } from 'core';

import { UserInfo } from './components/user-info';
import { ChatMessages } from './components/messages';
import { SendMessage } from './components/send-message';
import { ChatContainerProps } from './types';

import './chat-container.css';

const ChatContainer = ({
  user,
  chatMessages,
  message,
  chat,
  handleChange,
  handleSubmit,
  handleChangeVisibleModal,
}: ChatContainerProps) => (
  <div className='chat'>
    <UserInfo
      avatar={user?.avatar || ''}
      name={user?.first_name}
      handleChangeVisibleModal={handleChangeVisibleModal}
      users={chat?.users}
    />
    <ChatMessages user={user} chatMessages={chatMessages} />
    <SendMessage
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleChangeVisibleModal={handleChangeVisibleModal}
    />
  </div>
);

export default ChatContainer;
