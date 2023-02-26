interface IChatItemDTO {
  title: string;
  unread_count: number;
  avatar: null | string;
  created_by: number;
  id: number;
  last_message: {
    content: string;
    id: number;
    time: string;
    user: {
      first_name: string;
      second_name: string;
      display_name: string | null;
      login: string;
      email: string;
      phone: string;
      avatar: string | null;
    };
  };
}
interface IChatDTO {
  id: number;
}

type CreateChatTitleRequestData = {
  title: number;
};

type IChatTokenDTO = { token: string };

type WebSocketMessage = {
  chat_id: number;
  time: string;
  type: string;
  user_id: string;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};

export {
  type IChatItemDTO,
  IChatDTO,
  IChatTokenDTO,
  CreateChatTitleRequestData,
  WebSocketMessage,
};
