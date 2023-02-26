import { IChatItemDTO } from 'types';

interface ChatListProps {
  chats: Array<IChatItemDTO>;
  isShow: boolean;
  chatId: number | null;
  handleChangeActiveChat(id: number): void;
}

export { ChatListProps };
