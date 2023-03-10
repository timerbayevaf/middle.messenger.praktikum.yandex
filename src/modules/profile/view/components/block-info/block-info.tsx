import { Icon, Icons } from 'components/icon';
import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

interface BlockInfoProps {
  type: Icons;
  text: string;
  label?: string;
  className?: string;
  handleClick?(): void;
}

import './block-info.css';

const BlockInfo = ({
  type,
  text,
  label,
  className,
  handleClick,
}: BlockInfoProps) => (
  <div className={cn('block-info__row', className)} onClick={handleClick}>
    <Icon size={30} type={type} />
    <div className='block-info__detail'>
      <div className='block-info__text'>{text}</div>
      <div className='block-info__label'>{label}</div>
    </div>
  </div>
);

export { BlockInfo };
