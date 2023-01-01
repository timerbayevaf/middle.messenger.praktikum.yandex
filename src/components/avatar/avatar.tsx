import { AIcreateElement } from 'core';

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
  <div
    title={title}
    onClick={handleClick}
    className={`avatar ${className ? className : ''}`}
  >
    <img
      className={`avatar__image ${imageClassName ? imageClassName : ''}`}
      src={src}
    />
  </div>
);

export default Avatar;
