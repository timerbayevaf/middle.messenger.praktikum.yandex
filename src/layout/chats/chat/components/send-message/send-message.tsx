import { AIcreateElement } from 'core';

import { Input } from 'components/input';
import { Icon, Icons } from 'components/icon';

import './send-message.css';

const SendMessage = () => (
  <div className='send-message'>
    <div className='send-message__icon'>
      <Icon size={28} type={Icons.Plus} />
    </div>
    <Input label='Сообщение' value='' />
    <div className='send-message__icon send-message__icon_enter'>
      <Icon size={18} type={Icons.Send} color='white' />
    </div>
  </div>
);

export default SendMessage;
