import { store } from 'store';
import { IChatDTO, IChatItemDTO, SocketData } from 'types';

class SocketControllers {
  private uri = 'wss://ya-praktikum.tech/ws/';

  socketsMap: Map<number, SocketData> = new Map();

  initSocket(userId: number, chat: IChatItemDTO, chatToken: string) {
    const socket = new WebSocket(
      `${this.uri}/chats/${userId}/${chat.id}/${chatToken}`
    );

    this.socketsMap.set(chat.id, { socket, messagesArray: [] });
    this.setHandlers(socket, chat);
  }

  private setHandlers(socket: WebSocket, chat: IChatItemDTO) {
    socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      let currentMessageNumber = 0;
      while (currentMessageNumber <= chat.unread_count) {
        const messageObject = {
          content: String(currentMessageNumber),
          type: 'get old',
        };

        socket.send(JSON.stringify(messageObject));
        currentMessageNumber += 20;
      }
    });

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener('message', (event) => {
      console.log('Получены данные', event.data);
      const data = JSON.parse(event.data);

      if (Array.isArray(data)) {
        store.setState({
          chatMessages: [...store.getState().chatMessages, ...data],
        });
      } else {
        store.setState({
          chatMessages: [...store.getState().chatMessages, data],
        });
      }
    });

    socket.addEventListener('error', (event) => {
      if (event instanceof Error) {
        console.log('Ошибка', event.message);
      }
    });
  }
}

export default new SocketControllers();
