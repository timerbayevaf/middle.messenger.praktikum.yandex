import { AIcreateElement } from 'core';

import { UserInfo } from './components/user-info';
import { ChatMessages } from './components/messages';

import './chat-container.css';
import { SendMessage } from './components/send-message';
import { IChatMessage } from 'src/types/chats/messages';
import { IUser } from 'types';
import { MODAL_TYPE } from 'constants';

interface ChatContainerProps {
  chatMessages: IChatMessage[];
  user: IUser;

  message: string;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

const ChatContainer = ({
  user,
  chatMessages,
  message,
  handleChange,
  handleSubmit,
  handleChangeVisibleModal,
}: ChatContainerProps) => (
  <div className='chat'>
    <UserInfo
      avatar={user?.avatar}
      name={user?.first_name}
      handleChangeVisibleModal={handleChangeVisibleModal}
    />
    <ChatMessages chatMessages={chatMessages} />
    <SendMessage
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleChangeVisibleModal={handleChangeVisibleModal}
    />
  </div>
);

export default ChatContainer;
