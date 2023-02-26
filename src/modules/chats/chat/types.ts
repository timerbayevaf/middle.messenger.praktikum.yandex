import { IChatMessage } from 'src/types/chats/messages';
import { IChatItemDTO, IUserDTO } from 'types';
import { MODAL_TYPE } from 'constants';

interface ChatContainerProps {
  chatMessages: IChatMessage[];
  user: IUserDTO;
  chat: IChatItemDTO | null;
  message: string;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

export { ChatContainerProps };
