import { IChatItemDTO } from './chats/chats';
import { IChatMessage } from './chats/messages';
import { IUserDTO } from './user/user';

interface AppState {
  isLoading: boolean;
  errorMessage: string | null;
  user: IUserDTO | null;
  chats: Array<IChatItemDTO>;
  chatMessages: Array<IChatMessage>;
  chatId: number | null;
}

export { AppState };
