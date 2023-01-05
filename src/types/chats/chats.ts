import { IUser } from '../user/user';

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
