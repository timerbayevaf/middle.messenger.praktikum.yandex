import { AIcreateElement } from 'core';

import { IChatMessage } from 'src/types/chats/messages';
import ChatContainer from './chat/chat-container';
import ChatlistContainer from './chatlist';
import NoSelectedChat from './no-selected-chat';

import './chats.css';
import { userInfo } from 'mocks';
import { CHATLIST_VIEW } from 'constants';

interface ChatsProps {
  searchValue: string;
  chatMessages: IChatMessage[];
  isSelectedChat: boolean;
  viewType: CHATLIST_VIEW;
}

const Chats = ({
  isSelectedChat,
  searchValue,
  chatMessages,
  viewType,
}: ChatsProps) => (
  <div className='chats'>
    <ChatlistContainer
      viewType={viewType}
      searchValue={searchValue}
      user={userInfo}
      isSelectedChat={isSelectedChat}
    />

    {isSelectedChat ? (
      <ChatContainer chatMessages={chatMessages} user={userInfo} />
    ) : (
      <NoSelectedChat />
    )}
  </div>
);

export default Chats;
