import { AIcreateElement } from 'core';
import { List } from 'components/list';
import { IChatlistItem } from 'types';
import { chatList } from 'mocks';
import { ChatListItem } from '../chatlist-item';
import { ChatListProps } from './types';

const ChatList = ({
  activeId,
  isShow,
  handleChangeActiveChat,
}: ChatListProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <List
      items={chatList}
      renderItem={(el: IChatlistItem) => (
        <ChatListItem
          handleChangeActiveChat={handleChangeActiveChat}
          isActive={el.id === activeId}
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
