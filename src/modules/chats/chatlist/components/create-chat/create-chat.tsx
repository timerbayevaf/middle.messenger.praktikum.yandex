import InputField from 'components/input/input-field';
import { AIcreateElement } from 'core';
import { CreateChatProps } from './types';

import './create-chat.css';
import { Button } from 'components/button';

const CreateChat = ({ isShow, handleSubmit }: CreateChatProps) => {
  if (!isShow) {
    return null;
  }

  return (
    <form id='createChat' className='create-chat' onSubmit={handleSubmit}>
      <InputField name='chatName' value='' />
      <Button
        id='createChatButton'
        label='Создать'
        view='secondary'
        type='submit'
      />
    </form>
  );
};

export { CreateChat };
