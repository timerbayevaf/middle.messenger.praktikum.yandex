import { IChatlistItem } from 'types';

interface ChatListItemProps extends IChatlistItem {
  isActive: boolean;
  handleChangeActiveChat(id: number): void;
}

export { ChatListItemProps };
