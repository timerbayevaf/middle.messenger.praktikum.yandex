import { AIcreateElement } from 'core';

import { Input } from 'components/input';
import { Icon, Icons } from 'components/icon';

import './send-message.css';
import { Button } from 'components/button';

const SendMessage = () => (
  <div className='send-message'>
    <div className='send-message__icon'>
      <Button type='icon' size='small'>
        <Icon size={28} type={Icons.Plus} />
      </Button>
    </div>
    <Input name='message' label='Сообщение' value='' />
    <div className='send-message__icon'>
      <Button type='icon' size='small' className='send-message__icon_send'>
        <Icon size={20} type={Icons.Send} color='white' />
      </Button>
    </div>
  </div>
);

export default SendMessage;
