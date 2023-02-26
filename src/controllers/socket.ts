import { store } from 'store';
import { SocketData } from 'types';

class SocketControllers {
  private uri = 'wss://ya-praktikum.tech/ws/';

  socketsMap: Map<number, SocketData> = new Map();

  initSocket(userId: number, chatId: number, chatToken: string) {
    const socket = new WebSocket(
      `${this.uri}/chats/${userId}/${chatId}/${chatToken}`
    );

    this.socketsMap.set(chatId, { socket, messagesArray: [] });
    this.setHandlers(socket);
  }

  private setHandlers(socket: WebSocket) {
    socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      socket.send(
        JSON.stringify({
          content: 'Моё первое сообщение миру!',
          type: 'message',
        })
      );
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
      store.setState({
        chatMessages: [
          ...store.getState().chatMessages,
          JSON.parse(event.data),
        ],
      });
    });

    socket.addEventListener('error', (event) => {
      if (event instanceof Error) {
        console.log('Ошибка', event.message);
      }
    });
  }
}

export default new SocketControllers();
