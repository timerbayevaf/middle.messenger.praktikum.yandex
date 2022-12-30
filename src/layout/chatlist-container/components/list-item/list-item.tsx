import { AIcreateElement } from 'core';
import { formatDate } from 'utils/time';

import './list-item.css';

interface ListItemProps {
  id: 123;
  title: string;
  avatar: string;
  unread_count: 15;
  last_message: {
    user: {
      first_name: 'Petya';
      second_name: 'Pupkin';
      avatar: '/path/to/avatar.jpg';
      email: 'my@email.com';
      login: 'userLogin';
      phone: '8(911)-222-33-22';
    };
    time: '2020-01-02T14:22:22.000Z';
    content: 'this is message content';
  };
  isActive?: boolean;
}

export const ListItem = ({
  id,
  avatar,
  title,
  unread_count,
  last_message,
  isActive,
}: ListItemProps) => (
  <li key={id} className={`list__item item ${isActive ? 'item_active' : ''}`}>
    <div className='item__image-container'>
      <img className='item__image' src={avatar} />
    </div>
    <div className='item__content'>
      <div className='item__row'>
        <h2 className='item__title'>{title}</h2>
        <div className='item__time'>{formatDate(last_message.time)}</div>
      </div>

      <div className='item__row'>
        <p className='item__text'>{last_message.content}</p>
        <div className='item__count'>{unread_count}</div>
      </div>
    </div>
  </li>
);
