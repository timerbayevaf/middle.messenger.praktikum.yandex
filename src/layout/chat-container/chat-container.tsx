import { AIcreateElement } from 'core';

import { UserInfo } from './components/user-info';
import { NoSelectedChat } from './components/no-selected-chat/no-selected-chat';
import { ChatMessages } from './components/messages';

import './chat-container.css';
import { SendMessage } from './components/send-message';
import { IChatMessage } from 'src/types/chats/messages';

interface ChatContainerProps {
  isSelectedChat?: boolean;
  chatMessages: IChatMessage[];
}

const ChatContainer = ({
  isSelectedChat,
  chatMessages,
}: ChatContainerProps) => (
  <div className='chat'>
    {!isSelectedChat ? <NoSelectedChat /> : ''}
    <UserInfo />
    <ChatMessages chatMessages={chatMessages} />
    <SendMessage />
  </div>
);

export default ChatContainer;
