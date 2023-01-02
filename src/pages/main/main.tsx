import { AIcreateElement } from 'core';
import { ChatContainer, ChatlistContainer, NoSelectedChat } from 'layout/chats';
import { IChatMessage } from 'src/types/chats/messages';

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

const chatList = [
  {
    id: 123,
    first_name: 'Petya',
    second_name: 'Pupkin',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    email: 'my@email.com',
    login: 'userLogin',
    phone: '8(911)-222-33-22',
  },
  {
    id: 12,
    first_name: 'Artem',
    second_name: 'Pupkin',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
    email: 'my@email.com',
    login: 'userLogin',
    phone: '8(911)-222-33-22',
  },
];

const chatMessages: IChatMessage[] = [
  {
    id: 1,
    user_id: 1,
    time: '2023-01-01T22:58:47.178Z',
    type: 'message',
    content:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
  },
  {
    id: 2,
    user_id: 2,
    time: '2023-01-01T22:58:47.178Z',
    type: 'message',
    content:
      'Ясность нашей позиции очевидна: высококачественный прототип будущего проекта не оставляет шанса для соответствующих условий активизации. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке набирают популярность среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада позволяет оценить значение поставленных обществом задач.!',
  },
  {
    id: 3,
    user_id: 1,
    time: '2023-01-01T22:58:47.178Z',
    type: 'message',
    content: 'Лучший вариант, имхо.',
  },
  {
    id: 4,
    user_id: 1,
    time: '2023-01-01T22:58:47.178Z',
    type: 'message',
    content:
      'Наше дело не так однозначно, как может показаться: начало повседневной работы по формированию позиции позволяет выполнить важные задания по разработке поэтапного и последовательного развития общества.',
  },
  {
    id: 5,
    user_id: 2,
    time: '2023-01-01T22:58:47.178Z',
    type: 'message',
    content:
      'Идейные соображения высшего порядка, а также курс на социально-ориентированный национальный проект требует анализа экономической целесообразности принимаемых решений.',
  },
  {
    id: 6,
    user_id: 1,
    time: '2023-01-01T22:58:47.178Z',
    type: 'message',
    content:
      'Однозначно, активно развивающиеся страны третьего мира могут быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Также как курс на социально-ориентированный национальный проект не оставляет шанса для инновационных методов управления процессами.',
  },
];

const isSelectedChat = true;
const isSearch = true;

const MainPage = () => (
  <div className='main'>
    <ChatlistContainer isSearch={isSearch} list={isSearch ? chatList : list} />
    {isSelectedChat ? (
      <ChatContainer chatMessages={chatMessages} />
    ) : (
      <NoSelectedChat />
    )}
  </div>
);

export default MainPage;
