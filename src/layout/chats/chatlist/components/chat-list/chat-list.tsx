import { AIcreateElement } from 'core';
import { IChatlistItem } from 'src/types/chats/chats';
import { ChatListItem } from '../chatlist-item';

import './chat-list.css';

interface UserListProps {
  list: IChatlistItem[];
  activeId: number;
}

const ChatList = ({ list, activeId }: UserListProps) => (
  <ul className='chat-list'>
    {list.map((el) => (
      <ChatListItem
        isActive={el.id === activeId}
        last_message={el.last_message}
        unread_count={el.unread_count}
        id={el.id}
        avatar={el.avatar}
        title={el.title}
      />
    ))}
  </ul>
);

export default ChatList;
