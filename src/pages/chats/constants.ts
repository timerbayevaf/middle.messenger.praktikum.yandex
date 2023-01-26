import { USER_SPEC_TYPE } from './types';

const PASSWORD_SPEC: USER_SPEC_TYPE[] = [
  'old_password',
  'new_password',
  'second_new_password',
];
const PROFILE_SPEC: USER_SPEC_TYPE[] = [
  'login',
  'email',
  'display_name',
  'first_name',
  'second_name',
  'phone',
];

export { PASSWORD_SPEC, PROFILE_SPEC };
