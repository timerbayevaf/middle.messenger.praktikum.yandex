import { AIcreateElement } from 'core';

import './icon.css';
import Menu from 'bundle-text:./icons/menu.svg';
import Dots from 'bundle-text:./icons/dots.svg';
import Plus from 'bundle-text:./icons/plus.svg';
import Send from 'bundle-text:./icons/send.svg';
import ArrowBack from 'bundle-text:./icons/arrow-back.svg';
import ImageEdit from 'bundle-text:./icons/image-edit.svg';
import Email from 'bundle-text:./icons/email.svg';
import Edit from 'bundle-text:./icons/edit.svg';
import Name from 'bundle-text:./icons/name.svg';
import Phone from 'bundle-text:./icons/phone.svg';
import Signout from 'bundle-text:./icons/signout.svg';
import Password from 'bundle-text:./icons/password.svg';

enum Icons {
  Menu = 'menu',
  Dots = 'dots',
  Plus = 'plus',
  Send = 'send',
  ArrowBack = 'arrow-back',
  ImageEdit = 'image-edit',
  Email = 'email',
  Edit = 'edit',
  Name = 'name',
  Phone = 'phone',
  Signout = 'signout',
  Password = 'password',
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
    case Icons.ArrowBack:
      return ArrowBack;
    case Icons.ImageEdit:
      return ImageEdit;
    case Icons.Email:
      return Email;
    case Icons.Edit:
      return Edit;
    case Icons.Name:
      return Name;
    case Icons.Phone:
      return Phone;
    case Icons.Signout:
      return Signout;
    case Icons.Password:
      return Password;
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
