import { AIcreateElement } from 'core';
import Chats from 'modules/chats/chats';
import { chatMessages } from 'mocks';
import { CHATLIST_VIEW } from 'constants';

interface ChatPageProps {
  searchValue?: string;
  viewType: CHATLIST_VIEW;
  isSelectedChat: boolean;
}

const ChatPage = ({
  searchValue = '',
  viewType,
  isSelectedChat = true,
}: ChatPageProps) => {
  return (
    <Chats
      viewType={viewType}
      searchValue={searchValue}
      isSelectedChat={isSelectedChat}
      chatMessages={chatMessages}
    />
  );
};

export default ChatPage;
