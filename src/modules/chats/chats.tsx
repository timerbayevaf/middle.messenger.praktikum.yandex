import { AIcreateElement } from 'core';

import { IChatMessage } from 'src/types/chats/messages';
import ChatContainer from './chat/chat-container';
import ChatlistContainer from './chatlist';
import NoSelectedChat from './no-selected-chat';

import './chats.css';

interface ChatsProps {
  searchValue: string;
  chatMessages: IChatMessage[];
  isSelectedChat?: boolean;
}

const Chats = ({ isSelectedChat, searchValue, chatMessages }: ChatsProps) => (
  <div className='chats'>
    <ChatlistContainer searchValue={searchValue} />

    {isSelectedChat ? (
      <ChatContainer chatMessages={chatMessages} />
    ) : (
      <NoSelectedChat />
    )}
  </div>
);

export default Chats;
