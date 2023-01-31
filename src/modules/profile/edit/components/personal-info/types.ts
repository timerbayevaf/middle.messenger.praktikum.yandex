import { IUser } from 'types';
import { SPEC_NAME } from 'utils/regexp';

interface PersonalInfoProps
  extends Pick<
    IUser,
    'login' | 'email' | 'first_name' | 'display_name' | 'second_name' | 'phone'
  > {
  handleChange: JSX.EventHandler;
  error: { [key in SPEC_NAME]?: string };
}

export { PersonalInfoProps };
