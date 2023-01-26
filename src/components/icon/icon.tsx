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
import UserProfile from 'bundle-text:./icons/user-profile.svg';
import Minus from 'bundle-text:./icons/minus.svg';
import File from 'bundle-text:./icons/file.svg';
import Location from 'bundle-text:./icons/location.svg';

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
  UserProfile = 'user-profile',
  Minus = 'minus',
  File = 'file',
  Location = 'location',
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
    case Icons.UserProfile:
      return UserProfile;
    case Icons.Minus:
      return Minus;
    case Icons.File:
      return File;
    case Icons.Location:
      return Location;
    default:
      return null;
  }
};

const Icon = ({ size, type, color = '#666CE6' }: Props) => (
  <icon
    className='icon'
    style={{ width: `${size}px`, height: `${size}px`, fill: color }}
    icon={getIcon(type)}
  />
);

export default Icon;

export { Icons };
