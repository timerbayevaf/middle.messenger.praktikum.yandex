import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './avatar.css';

interface Props {
  handleClick?: () => void;
  title?: string;
  src: string;
  className?: string;
  imageClassName?: string;
}

const Avatar = ({
  handleClick,
  className,
  imageClassName,
  title,
  src,
}: Props) => (
  <div title={title} onClick={handleClick} className={cn('avatar', className)}>
    <img
      className={cn('avatar__image', imageClassName)}
      src={src}
      alt={`аватар пользователя ${title}`}
    />
  </div>
);

export default Avatar;
