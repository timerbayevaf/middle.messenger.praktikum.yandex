import { AIcreateElement } from 'core';

import './icon.css';
import Menu from 'bundle-text:./icons/menu.svg';

enum Icons {
  Menu = 'menu',
  None = 'none',
}

interface Props {
  type: Icons;
  size: number;
}

const getIcon = (type: Icons) => {
  switch (type) {
    case Icons.Menu:
      return Menu;
    default:
      return null;
  }
};

const Icon = ({ size, type }: Props) => {
  return (
    <icon
      className='icon'
      style={{ width: `${size}px`, height: `${size}px` }}
      icon={getIcon(type)}
    />
  );
};

export default Icon;

export { Icons };
