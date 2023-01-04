import Avatar from 'components/avatar/avatar';
import { AIcreateElement } from 'core';
import { IChatlistItem } from 'types';
import { cn } from 'utils/cn';
import { formatDate } from 'utils/date';

import './chatlist-item.css';

interface ChatListItemProps extends IChatlistItem {
  isActive: boolean;
}

export const ChatListItem = ({
  id,
  avatar,
  title,
  unread_count,
  last_message,
  isActive,
}: ChatListItemProps) => (
  <li
    key={id}
    className={cn('list-item chatlist-item', {
      'chatlist-item_active': !!isActive,
    })}
  >
    <Avatar className='list-item__avatar-block' src={avatar} />
    <div className='list-item__info-block'>
      <div className='chatlist-item__row'>
        <h2 className='chatlist-item__title'>{title}</h2>
        <div className='chatlist-item__time'>
          {formatDate(last_message.time)}
        </div>
      </div>

      <div className='chatlist-item__row'>
        <p className='chatlist-item__text'>{last_message.content}</p>
        <div className='chatlist-item__count'>{unread_count}</div>
      </div>
    </div>
  </li>
);
