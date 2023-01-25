import avata1 from './assets/img/avatar1.png';
import avata2 from './assets/img/avatar2.png';
import avata3 from './assets/img/avatar3.png';
import avata4 from './assets/img/avatar4.png';

const chatList = [
  {
    id: 123,
    title: 'my-chat',
    avatar: avata1,
    unread_count: 15,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
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
    avatar: avata2,
    unread_count: 100,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
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
    avatar: avata3,
    unread_count: 1000,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
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
    avatar: avata4,
    unread_count: 100000,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '8(911)-222-33-22',
      },
      time: '2022-01-30T01:30:55.000Z',
      content: 'И Human Interface Guidelines и Material Des...',
    },
  },
];

export { chatList };
