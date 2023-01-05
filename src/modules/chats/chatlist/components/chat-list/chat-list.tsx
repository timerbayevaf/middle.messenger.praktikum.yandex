import { List } from 'components/list';
import { AIcreateElement } from 'core';
import { IChatlistItem } from 'types';
import { chatList } from 'mocks';
import { ChatListItem } from '../chatlist-item';

interface UserListProps {
  activeId: number;
  isShow: boolean;
  isSelectedChat: boolean;
}

const ChatList = ({ activeId, isShow, isSelectedChat }: UserListProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <List
      items={chatList}
      renderItem={(el: IChatlistItem) => (
        <ChatListItem
          isActive={isSelectedChat && el.id === activeId}
          last_message={el.last_message}
          unread_count={el.unread_count}
          id={el.id}
          avatar={el.avatar}
          title={el.title}
        />
      )}
    />
  );
};

export default ChatList;
