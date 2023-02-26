import Avatar from 'components/avatar/avatar';
import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { formatDate } from 'utils/date';
import { ChatListItemProps } from './types';

import './chatlist-item.css';

export const ChatListItem = ({
  isActive,
  chat,
  handleChangeActiveChat,
}: ChatListItemProps) => (
  <li
    className={cn('list-item chatlist-item', {
      'chatlist-item_active': !!isActive,
    })}
    onClick={() => handleChangeActiveChat(chat)}
  >
    <Avatar
      title={chat.title}
      className='list-item__avatar-block'
      src={chat.avatar || ''}
    />
    <div className='list-item__info-block'>
      <div className='chatlist-item__row'>
        <h2 className='chatlist-item__title'>{chat.title}</h2>
        <div className='chatlist-item__time'>
          {chat.last_message?.time && formatDate(chat.last_message?.time)}
        </div>
      </div>

      <div className='chatlist-item__row'>
        <p className='chatlist-item__text'>{chat.last_message?.content}</p>
        <div className='chatlist-item__count'>{chat.unread_count || 0}</div>
      </div>
    </div>
  </li>
);
