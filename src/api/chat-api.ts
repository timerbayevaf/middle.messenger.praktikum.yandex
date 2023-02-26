import {
  CreateChatTitleRequestData,
  IChatItemDTO,
  IChatDTO,
  IChatTokenDTO,
} from 'src/types/chats/chats';
import { IUserDTO } from 'types';
import { HTTP } from 'utils/http';
import {
  ChatsRequestData,
  AddUserToChatRequestData,
  StatusResponse,
} from './types';

// /api/v2/chats/
const chatAPIInstance = new HTTP('api/v2/chats');

class ChatAPI {
  create(data: CreateChatTitleRequestData) {
    // Создать чат
    return chatAPIInstance
      .post<IChatDTO>('/', {
        data,
      })
      .then(({ id }) => id);
  }

  fetchChatToken(chatId: number) {
    // Токен чата для отправки real-time сообщений
    return chatAPIInstance
      .post<IChatTokenDTO>(`/token/${chatId}`, { data: {} })
      .then(({ token }) => token);
  }

  fetchChatUsers(chatId: number) {
    return chatAPIInstance.get<Array<IUserDTO>>(`/${chatId}/users`);
  }

  fetchChats(data: ChatsRequestData) {
    // получить чаты текущего пользователя
    return chatAPIInstance.get<IChatItemDTO[]>('/', { data });
  }

  addUserToChat(data: AddUserToChatRequestData) {
    return chatAPIInstance.put<StatusResponse>('/users', {
      data,
      responseType: 'text',
    });
  }
}

export { ChatAPI };
