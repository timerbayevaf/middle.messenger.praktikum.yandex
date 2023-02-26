import { store } from 'store';
import { IChatItemDTO } from 'types';
import { sortByTime } from 'utils/sort-by-time';

class SocketControllers {
  private uri = 'wss://ya-praktikum.tech/ws/';
  private _socket: WebSocket | null = null;
  private _ping!: number;

  initSocket(userId: number, chat: IChatItemDTO, chatToken: string) {
    const socket = new WebSocket(
      `${this.uri}/chats/${userId}/${chat.id}/${chatToken}`
    );

    this._socket = socket;

    this.setHandlers(socket, chat);
  }

  public send(message: string) {
    const messageObject = {
      content: message,
      type: 'message',
    };

    this._socket?.send(JSON.stringify(messageObject));
  }

  private setHandlers(socket: WebSocket, chat: IChatItemDTO) {
    socket.addEventListener('open', () => {
      let currentMessageNumber = 0;
      while (currentMessageNumber <= chat.unread_count) {
        const messageObject = {
          content: String(currentMessageNumber),
          type: 'get old',
        };

        socket.send(JSON.stringify(messageObject));
        currentMessageNumber += 20;
      }

      this._ping = setInterval(() => {
        socket.send(JSON.stringify({ type: 'ping' }));
      }, 10000);
    });

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
      this._socket = null;

      clearInterval(this._ping);

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      if (Array.isArray(data)) {
        store.setState({
          chatMessages: [
            ...store.getState().chatMessages,
            ...data.sort((a, b) => sortByTime(a.time, b.time)),
          ],
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
