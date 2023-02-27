import { IUserDTO } from 'types';

interface PersonalInfoProps {
  profileInfo: IUserDTO;
  user: IUserDTO | null;
  handleChange: JSX.EventHandler;
  error: Record<string, string>;
}

export { PersonalInfoProps };
