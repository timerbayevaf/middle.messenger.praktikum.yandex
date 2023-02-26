import { AIcreateElement } from 'core';
import { List } from 'components/list';
import { IChatItemDTO } from 'types';
import { ChatListItem } from '../chatlist-item';
import { ChatListProps } from './types';

const ChatList = ({
  chats,
  chatId,
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
          isActive={el.id === chatId}
          last_message={el.last_message}
          unread_count={el.unread_count}
          id={el.id}
          avatar={el.avatar}
          title={el.title}
          created_by={el.created_by}
        />
      )}
    />
  );
};

export default ChatList;
