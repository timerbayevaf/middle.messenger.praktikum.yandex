interface IUser {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

interface ILastMessage {
  user: IUser;
  time: string;
  content: string;
}

interface IChatlistItem {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: ILastMessage;
  isActive?: boolean;
}

export { type IChatlistItem, ILastMessage };
