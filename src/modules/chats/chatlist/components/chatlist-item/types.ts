import { IChatItemDTO } from 'types';

interface ChatListItemProps {
  chat: IChatItemDTO;
  isActive: boolean;
  handleChangeActiveChat(chat: IChatItemDTO): void;
}

export { ChatListItemProps };
