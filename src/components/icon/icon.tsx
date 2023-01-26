import { AIcreateElement } from 'core';
import { IconProps } from './types';
import { getIcon } from './utils';

import './icon.css';

const Icon = ({ size, type, color = '#666CE6' }: IconProps) => (
  <icon
    className='icon'
    style={{ width: `${size}px`, height: `${size}px`, fill: color }}
    icon={getIcon(type)}
  />
);

export default Icon;
