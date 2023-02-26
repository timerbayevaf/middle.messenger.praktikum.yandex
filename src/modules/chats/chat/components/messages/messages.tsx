import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { formatTime } from 'utils/date';
import { MessagesProps } from './types';

import './messages.css';

const ChatMessages = ({ chatMessages, user }: MessagesProps) => (
  <div className='messages'>
    <div className='message__time'>{chatMessages[0]?.time}</div>
    {chatMessages.map((message) => (
      <div
        className={cn('message', {
          message_right: message.user_id === user.id,
        })}
      >
        <div className='message_width'>
          <div
            className={cn('message__text', {
              message__text_own: message.user_id === user.id,
            })}
          >
            {message.content}
            <div className='message_send-time'>
              {message.time && formatTime(message.time)}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export { ChatMessages };
