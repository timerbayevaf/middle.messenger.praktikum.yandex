import { AIcreateElement } from 'core';

import { IChatMessage } from 'src/types/chats/messages';
import ChatContainer from './chat/chat-container';
import ChatlistContainer from './chatlist';
import NoSelectedChat from './no-selected-chat';
import { CHATLIST_VIEW } from 'constants';
import { SPEC_NAME } from 'utils/regexp';
import { IUser } from 'types';

import './chats.css';

interface ChatsProps {
  message: string;
  searchValue: string;
  chatMessages: IChatMessage[];
  viewType: CHATLIST_VIEW;
  activeId: number | null;
  profileInfo: IUser & {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  profileError: { [key in SPEC_NAME]?: string };
  handleChangeActiveChat(id: number): void;
  handleChangeSearch(e: Event): void;
  handleChangeMessage: JSX.EventHandler;
  handleSubmitMessage: JSX.EventHandler;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
}

const Chats = ({
  searchValue,
  chatMessages,
  viewType,
  activeId,
  message,
  profileInfo,
  profileError,
  handleChangeActiveChat,
  handleChangeSearch,
  handleChangeMessage,
  handleSubmitMessage,
  handleChangeFields,
  handleSubmitFields,
}: ChatsProps) => (
  <div className='chats'>
    <ChatlistContainer
      activeId={activeId}
      viewType={viewType}
      searchValue={searchValue}
      user={profileInfo}
      handleChangeActiveChat={handleChangeActiveChat}
      handleChangeSearch={handleChangeSearch}
      password={profileInfo}
      profileError={profileError}
      handleChangeFields={handleChangeFields}
      handleSubmitFields={handleSubmitFields}
    />

    {activeId !== null ? (
      <ChatContainer
        message={message}
        chatMessages={chatMessages}
        user={profileInfo}
        handleChange={handleChangeMessage}
        handleSubmit={handleSubmitMessage}
      />
    ) : (
      <NoSelectedChat />
    )}
  </div>
);

export default Chats;
