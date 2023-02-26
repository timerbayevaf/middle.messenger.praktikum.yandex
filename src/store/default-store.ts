import { AppState } from 'types';

const defaultStore: AppState = {
  isLoading: false,
  errorMessage: null,
  user: null,
  chats: [],
  chat: null,
  chatMessages: [],
};

export { defaultStore };
