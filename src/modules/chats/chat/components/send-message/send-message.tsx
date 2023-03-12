import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { Icon, Icons } from 'components/icon';
import { Button } from 'components/button';
import { MODAL_TYPE } from 'constant';
import { SendMessageProps } from './types';

import './send-message.css';

const SendMessage = ({
  message,
  handleChange,
  handleSubmit,
  handleChangeVisibleModal,
}: SendMessageProps) => (
  <form onSubmit={handleSubmit} className='send-message'>
    <div className='send-message__icon'>
      <Button
        view='icon'
        size='small'
        handleClick={(e: Event) => {
          e.stopPropagation();

          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();

          handleChangeVisibleModal({
            modalType: MODAL_TYPE.MESSAGE,
            rect,
          });
        }}
      >
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
