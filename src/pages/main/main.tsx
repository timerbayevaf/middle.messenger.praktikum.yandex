import { AIcreateElement } from 'core';
import ChatContainer from 'layout/chat-container';
import ChatlistContainer from 'layout/chatlist-container';

import './main.css';
const list = [
  {
    id: 123,
    title: 'my-chat',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
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
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
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
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
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
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
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

const MainPage = () => (
  <div className='main'>
    <ChatlistContainer list={list} />
    <ChatContainer />
  </div>
);

export default MainPage;
