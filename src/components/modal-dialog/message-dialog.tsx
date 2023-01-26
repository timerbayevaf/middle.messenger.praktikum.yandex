import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AIcreateElement, AIcreateFragment } from 'core';

interface ModalDialogProps {
  handleClick: JSX.EventHandler;
}

export const MessageDialog = ({ handleClick }: ModalDialogProps) => (
  <>
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
  </>
);
