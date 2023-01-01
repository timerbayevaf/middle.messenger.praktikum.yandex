import { AIcreateElement } from 'core';

import './icon.css';
import Menu from 'bundle-text:./icons/menu.svg';
import Dots from 'bundle-text:./icons/dots.svg';
import Plus from 'bundle-text:./icons/plus.svg';
import Send from 'bundle-text:./icons/send.svg';

enum Icons {
  Menu = 'menu',
  Dots = 'dots',
  Plus = 'plus',
  Send = 'send',
  None = 'none',
}

interface Props {
  type: Icons;
  size: number;
  color?: string;
}

const getIcon = (type: Icons) => {
  switch (type) {
    case Icons.Menu:
      return Menu;
    case Icons.Dots:
      return Dots;
    case Icons.Plus:
      return Plus;
    case Icons.Send:
      return Send;
    default:
      return null;
  }
};

const Icon = ({ size, type, color = '#666CE6' }: Props) => {
  return (
    <icon
      className='icon'
      style={{ width: `${size}px`, height: `${size}px`, fill: color }}
      icon={getIcon(type)}
    />
  );
};

export default Icon;

export { Icons };
