import { AIcreateElement } from 'core';
import { List } from 'components/list';
import { IChatItemDTO } from 'types';
import { ChatListItem } from '../chatlist-item';
import { ChatListProps } from './types';

const ChatList = ({
  chats,
  chat,
  isShow,
  handleChangeActiveChat,
}: ChatListProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <List
      items={chats}
      renderItem={(el: IChatItemDTO) => (
        <ChatListItem
          handleChangeActiveChat={handleChangeActiveChat}
          isActive={el.id === chat?.id}
          chat={el}
        />
      )}
    />
  );
};

export default ChatList;
