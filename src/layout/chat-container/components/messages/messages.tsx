import { AIcreateElement, AIcreateFragment } from 'core';
import { IChatMessage } from 'src/types/chats/messages';
import { formatTime } from 'utils/date';

import './messages.css';

interface MessagesProps {
  chatMessages: IChatMessage[];
}

const ChatMessages = ({ chatMessages }: MessagesProps) => (
  <div className='messages'>
    <div className='message__time'>18 мая</div>
    {chatMessages.map((message) => (
      <div
        className={`message ${message.user_id === 1 ? 'message_right' : ''}`}
      >
        <div className='message_width'>
          <div
            className={`message__text ${
              message.user_id === 1 ? 'message__text_own' : ''
            }`}
          >
            {message.content}
            <div className='message_send-time'>{formatTime(message.time)}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export { ChatMessages };
