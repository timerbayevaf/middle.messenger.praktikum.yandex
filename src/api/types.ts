type StatusResponse = 'OK';

type ErrorResponse = {
  reason: string;
  error: string;
};

type SignUpResponseData = { id: number };

type ChatsRequestData = {
  // Количество элементов, которые необходимо пропустить перед началом сбора результирующего набора
  offset: number;
  limit: number;
  title?: string;
};

type SearchUserRequestData = {
  // Количество элементов, которые необходимо пропустить перед началом сбора результирующего набора
  login: string;
};

type AddUserToChatRequestData = {
  users: number[];
  chatId: number;
};

export {
  StatusResponse,
  ErrorResponse,
  SignUpResponseData,
  SearchUserRequestData,
  ChatsRequestData,
  AddUserToChatRequestData,
};
