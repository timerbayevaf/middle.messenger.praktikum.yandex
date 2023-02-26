import { IChatItemDTO } from 'types';

interface ChatListProps {
  chats: Array<IChatItemDTO>;
  isShow: boolean;
  chat: IChatItemDTO | null;
  handleChangeActiveChat(chat: IChatItemDTO): void;
}

export { ChatListProps };
