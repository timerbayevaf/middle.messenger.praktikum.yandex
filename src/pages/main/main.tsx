import { AIcreateElement } from 'core';
import Chats from 'modules/chats/chats';
import { IChatMessage } from 'src/types/chats/messages';

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
const searchValue = '';

const MainPage = () => (
  <Chats
    searchValue={searchValue}
    isSelectedChat={isSelectedChat}
    chatMessages={chatMessages}
  />
);

export default MainPage;
