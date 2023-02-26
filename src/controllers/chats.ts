import { ChatAPI } from 'api/chat-api';
import { ChatsRequestData } from 'api/types';
import { UserAPI } from 'api/user-api';
import { ROUTES, ROUTE_TYPES, CHATLIST_VIEW } from 'constants';
import { router } from 'core';
import { store } from 'store';
import { CreateChatTitleRequestData, IChatItemDTO } from 'types';
import { showLoader, hideLoader } from 'utils/setLoader';
import socketController from './socket';

const chatApi = new ChatAPI();
const userApi = new UserAPI();

class UserLoginController {
  public async createChat(data: CreateChatTitleRequestData) {
    try {
      // Запускаем крутилку
      showLoader();

      const id = await chatApi.create(data);
      if (id) {
        const chats = await chatApi.fetchChats({
          offset: 0,
          limit: 20,
        });

        store.setState({ chats: chats, errorMessage: '' });
        router.go(
          ROUTES[ROUTE_TYPES.CHAT_LIST] + `?viewType=${CHATLIST_VIEW.CHAT_LIST}`
        );
      }

      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
      }
    } finally {
      hideLoader();
    }
  }

  public async fetchChats(data: ChatsRequestData) {
    try {
      // Запускаем крутилку
      showLoader();

      const chats = await chatApi.fetchChats(data);

      store.setState({ chats: chats, errorMessage: '' });

      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
      }
    } finally {
      hideLoader();
    }
  }

  public async addUserToChat(userLogin: string) {
    try {
      const users = await userApi.searchUsers({ login: userLogin });
      const user = users.length > 0 ? users[0] : null;

      const chatId = store.getState().chat?.id;

      if (user && chatId) {
        await chatApi.addUserToChat({
          users: [user.id],
          chatId,
        });

        store.clearError();
      } else {
        store.setState({ errorMessage: 'Пользователя с таким логином нет' });
        throw new Error('Пользователя с таким логином нет');
      }
    } catch (error) {
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
        throw new Error(error.message);
      }
    }
  }

  public async changeChat(chat: IChatItemDTO) {
    const token = await chatApi.fetchChatToken(chat.id);
    const user = store.getState().user;

    if (user) {
      socketController.initSocket(user?.id, chat, token);
      const users = await chatApi.fetchChatUsers(chat.id);

      const newChat = { ...chat, users };

      store.setState({ chat: newChat, chatMessages: [] });
      store.clearError();
    }
  }

  public async sendMessageToChat(message: string) {
    socketController.send(message);
  }

  public async fetchChatMessages(data: ChatsRequestData) {
    try {
      // Запускаем крутилку
      showLoader();

      const chats = await chatApi.fetchChats(data);

      store.setState({ chats: chats });

      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
      }
    } finally {
      hideLoader();
    }
  }
}

export default new UserLoginController();
