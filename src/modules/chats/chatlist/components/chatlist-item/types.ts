import { IChatItemDTO } from 'types';

interface ChatListItemProps extends IChatItemDTO {
  isActive: boolean;
  handleChangeActiveChat(id: number): void;
}

export { ChatListItemProps };
