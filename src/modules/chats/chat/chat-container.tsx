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
}

const ChatContainer = ({ user, chatMessages }: ChatContainerProps) => (
  <div className='chat'>
    <UserInfo avatar={user.avatar} name={user.first_name} />
    <ChatMessages chatMessages={chatMessages} />
    <SendMessage />
  </div>
);

export default ChatContainer;
