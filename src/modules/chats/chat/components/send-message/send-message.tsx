import { AIcreateElement } from 'core';

import { Input } from 'components/input';
import { Icon, Icons } from 'components/icon';

import './send-message.css';
import { Button } from 'components/button';

interface SendMessageProps {
  message: string;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
}

const SendMessage = ({
  message,
  handleChange,
  handleSubmit,
}: SendMessageProps) => (
  <form onSubmit={handleSubmit} className='send-message'>
    <div className='send-message__icon'>
      <Button view='icon' size='small'>
        <Icon size={28} type={Icons.Plus} />
      </Button>
    </div>
    <Input
      name='message'
      label='Сообщение'
      type='text'
      value={message}
      handleChange={handleChange}
    />
    <div className='send-message__icon'>
      <Button
        type='submit'
        view='icon'
        size='small'
        className='send-message__icon_send'
      >
        <Icon size={20} type={Icons.Send} color='white' />
      </Button>
    </div>
  </form>
);

export default SendMessage;
