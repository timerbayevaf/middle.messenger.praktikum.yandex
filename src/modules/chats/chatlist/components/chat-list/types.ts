import { IChatItemDTO } from 'types';

interface ChatListProps {
  chats: Array<IChatItemDTO>;
  isShow: boolean;
  chatId: number | null;
  handleChangeActiveChat(chat: IChatItemDTO): void;
}

export { ChatListProps };
