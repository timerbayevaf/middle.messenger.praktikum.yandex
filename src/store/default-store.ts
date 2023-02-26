import { AppState } from 'types';

const defaultStore: AppState = {
  isLoading: false,
  errorMessage: null,
  user: null,
  chats: [],
  chatId: null,
  chatMessages: [],
};

export { defaultStore };
