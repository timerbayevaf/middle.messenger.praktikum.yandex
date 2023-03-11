import Menu from './icons/menu.svg';
import Dots from './icons/dots.svg';
import Plus from './icons/plus.svg';
import Send from './icons/send.svg';
import ArrowBack from './icons/arrow-back.svg';
import ImageEdit from './icons/image-edit.svg';
import Email from './icons/email.svg';
import Edit from './icons/edit.svg';
import Name from './icons/name.svg';
import Phone from './icons/phone.svg';
import Signout from './icons/signout.svg';
import Password from './icons/password.svg';
import UserProfile from './icons/user-profile.svg';
import Minus from './icons/minus.svg';
import File from './icons/file.svg';
import Location from './icons/location.svg';
import AddChat from './icons/add-chat.svg';
import { Icons } from './types';

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
    case Icons.AddChat:
      return AddChat;
    default:
      return null;
  }
};

export { getIcon };
