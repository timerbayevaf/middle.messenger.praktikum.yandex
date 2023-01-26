interface ChatListProps {
  isShow: boolean;
  activeId: number | null;
  handleChangeActiveChat(id: number): void;
}

export { ChatListProps };
