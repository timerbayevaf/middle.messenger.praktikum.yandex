import { AIcreateElement } from 'core';

import { UserInfo } from './components/user-info';
import { ChatMessages } from './components/messages';

import './chat-container.css';
import { SendMessage } from './components/send-message';
import { IChatMessage } from 'src/types/chats/messages';

interface ChatContainerProps {
  chatMessages: IChatMessage[];
}

const ChatContainer = ({ chatMessages }: ChatContainerProps) => (
  <div className='chat'>
    <UserInfo />
    <ChatMessages chatMessages={chatMessages} />
    <SendMessage />
  </div>
);

export default ChatContainer;
