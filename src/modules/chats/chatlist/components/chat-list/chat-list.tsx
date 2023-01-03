import { AIcreateElement } from 'core';
import { IChatlistItem } from 'src/types/chats/chats';
import { ChatListItem } from '../chatlist-item';

import './chat-list.css';

interface UserListProps {
  activeId: number;
  isShow: boolean;
}

const list = [
  {
    id: 123,
    title: 'my-chat',
    avatar: '/img/avatar1.png',
    unread_count: 15,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: '/path/to/avatar.jpg',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '2020-01-02T14:22:22.000Z',
      content: '5 дней назад поставил на 526 1254,14 тыс',
    },
  },
  {
    id: 12,
    title: 'own-chat',
    avatar: '/img/avatar2.png',
    unread_count: 100,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: '/path/to/avatar.jpg',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '2022-12-30T01:30:55.000Z',
      content: 'И Human Interface Guidelines и Material Des...',
    },
  },
  {
    id: 9,
    title: 'Aynur',
    avatar: '/img/avatar3.png',
    unread_count: 1000,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: '/path/to/avatar.jpg',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '2022-01-30T01:30:55.000Z',
      content: 'И Human Interface Guidelines и Material Des...',
    },
  },
  {
    id: 4,
    title: 'Artem',
    avatar: '/img/avatar4.png',
    unread_count: 10000,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: '/path/to/avatar.jpg',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '2022-01-30T01:30:55.000Z',
      content: 'И Human Interface Guidelines и Material Des...',
    },
  },
];

const ChatList = ({ activeId, isShow }: UserListProps) => {
  if (!isShow) {
    return null;
  }

  return (
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
};

export default ChatList;
