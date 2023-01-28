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

interface IconProps {
  type: Icons;
  size: number;
  color?: string;
}

export { Icons, IconProps };
