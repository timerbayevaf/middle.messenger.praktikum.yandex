const LATIN_SPEC = /[a-zA-z]+/;
const CYRILLIC_SPEC = /[А-Яа-я]+/;
const NUMBER_SPEC = /^\d+$/;
const NO_SPACE_SPEC = /^\S*$/;
const LOGIN_SPEC = /^(?![\d+_@.-]+$)[a-zA-Z0-9+_-]{3,20}$/;
const EMAIL_SPEC = /[-.\w]+@([\w-]+\.)+[\w-]+/;
const LATIN_NUMBER_CUSTOM_SPEC = /[a-zA-Z0-9+_-]{1,}/;
const NAME_SPEC = /^[А-ЯA-Z]{1}[a-zа-я-]{1,}$/;
const DISPLAY_NAME_SPEC = /^(?![\d+_@.-]+$)[a-zA-Z0-9+_-]{3,20}$/;
const PHONE_SPEC = /(^8|7|\+7)(\d{10,15})/;
const PASSWORD_SPEC =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/;

enum ValidateType {
  Login = 'login',
  Email = 'email',
  Password = 'password',
  DisplayName = 'display_name',
  FirstName = 'first_name',
  SecondName = 'second_name',
  Phone = 'phone',
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  RepeatNewPassword = 'repeat_new_password',
  Attach = 'attach',
  Message = 'message',
  File = 'file',
  ChatName = 'chatName',
}

const ValidateName: { [key in ValidateType]: string } = {
  [ValidateType.Login]: 'Логин',
  [ValidateType.Email]: 'Почта',
  [ValidateType.Password]: 'Пароль',
  [ValidateType.DisplayName]: 'Имя в чате',
  [ValidateType.FirstName]: 'Имя',
  [ValidateType.SecondName]: 'Фамилия',
  [ValidateType.Phone]: 'Телефон',
  [ValidateType.OldPassword]: 'Старый пароль',
  [ValidateType.NewPassword]: 'Пароль',
  [ValidateType.RepeatNewPassword]: 'repeat_new_password',
  [ValidateType.Attach]: 'attach',
  [ValidateType.Message]: 'message',
  [ValidateType.File]: 'file',
  [ValidateType.ChatName]: 'chatName',
};

type SPEC_TYPE =
  | ValidateType.Login
  | ValidateType.Email
  | ValidateType.DisplayName
  | ValidateType.FirstName
  | ValidateType.SecondName
  | ValidateType.Phone
  | ValidateType.Password
  | ValidateType.OldPassword
  | ValidateType.NewPassword
  | ValidateType.RepeatNewPassword
  | ValidateType.Attach
  | ValidateType.ChatName
  | ValidateType.File
  | ValidateType.Message;

const validateLoginRules = [ValidateType.Login, ValidateType.Password];

const validateSignUpRules = [
  ValidateType.Login,
  ValidateType.Password,
  ValidateType.FirstName,
  ValidateType.SecondName,
  ValidateType.Email,
  ValidateType.Phone,
];

const validateProfileInfoRules = [
  ValidateType.Login,
  ValidateType.FirstName,
  ValidateType.DisplayName,
  ValidateType.SecondName,
  ValidateType.Email,
  ValidateType.Phone,
];

const validateProfilePasswordRules = [
  ValidateType.OldPassword,
  ValidateType.NewPassword,
];

export {
  CYRILLIC_SPEC,
  LATIN_NUMBER_CUSTOM_SPEC,
  NUMBER_SPEC,
  LOGIN_SPEC,
  EMAIL_SPEC,
  DISPLAY_NAME_SPEC,
  NAME_SPEC,
  PASSWORD_SPEC,
  LATIN_SPEC,
  NO_SPACE_SPEC,
  SPEC_TYPE,
  ValidateName,
  ValidateType,
  validateLoginRules,
  validateSignUpRules,
  validateProfileInfoRules,
  validateProfilePasswordRules,
  PHONE_SPEC,
};
