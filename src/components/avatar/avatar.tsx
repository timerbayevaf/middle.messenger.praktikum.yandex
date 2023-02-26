import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { AvatarProps } from './types';

import './avatar.css';

const Avatar = ({
  handleClick,
  className = '',
  imageClassName,
  title = '',
  src,
}: AvatarProps) => (
  <div title={title} onClick={handleClick} className={cn('avatar', className)}>
    {src ? (
      <img
        className={cn('avatar__image', imageClassName)}
        src={src}
        alt={`аватар пользователя ${title}`}
      />
    ) : (
      <div className='avatar__like'>{title.slice(0, 2)}</div>
    )}
  </div>
);

export default Avatar;
