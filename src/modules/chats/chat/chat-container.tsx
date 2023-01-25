import { AIcreateElement } from 'core';

import { UserInfo } from './components/user-info';
import { ChatMessages } from './components/messages';

import './chat-container.css';
import { SendMessage } from './components/send-message';
import { IChatMessage } from 'src/types/chats/messages';
import { IUser } from 'types';

interface ChatContainerProps {
  chatMessages: IChatMessage[];
  user: IUser;

  message: string;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

const ChatContainer = ({
  user,
  chatMessages,
  message,
  handleChange,
  handleSubmit,
}: ChatContainerProps) => (
  <div className='chat'>
    <UserInfo avatar={user?.avatar} name={user?.first_name} />
    <ChatMessages chatMessages={chatMessages} />
    <SendMessage
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  </div>
);

export default ChatContainer;
