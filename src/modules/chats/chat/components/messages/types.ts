import { IChatMessage, IUserDTO } from 'types';

interface MessagesProps {
  chatMessages: IChatMessage[];
  user: IUserDTO;
}

export { MessagesProps };
