import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { AIcreateElement } from 'core';
import { MessageDialogProps } from './types';

export const MessageDialog = ({ handleClick }: MessageDialogProps) => (
  <span>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.ImageEdit} />
      Фото или Видео
    </Button>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.File} />
      Файл
    </Button>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.Location} />
      Локация
    </Button>
  </span>
);
