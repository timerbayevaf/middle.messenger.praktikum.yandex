import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { formatTime } from 'utils/date';
import { MessagesProps } from './types';

import './messages.css';

const ChatMessages = ({ chatMessages }: MessagesProps) => (
  <div className='messages'>
    <div className='message__time'>18 мая</div>
    {chatMessages.map((message) => (
      <div className={cn('message', { message_right: message.user_id === 1 })}>
        <div className='message_width'>
          <div
            className={cn('message__text', {
              message__text_own: message.user_id === 1,
            })}
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
