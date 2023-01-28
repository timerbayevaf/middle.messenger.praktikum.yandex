type SPEC_TYPE =
  | 'login'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'password'
  | 'second_password'
  | 'old_password'
  | 'new_password'
  | 'second_new_password';

const SPEC_NAMES = [
  'login',
  'email',
  'display_name',
  'first_name',
  'second_name',
  'phone',
  'password',
  'second_password',
  'old_password',
  'new_password',
  'second_new_password',
];

const PASSWORD_SECOND_CHECK = ['second_password', 'second_new_password'];

const SPEC: Record<SPEC_TYPE, [RegExp, string]> = {
  first_name: [
    /^[А-ЯA-Z]{1}[a-zа-я-]{1,}$/,
    `латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).`,
  ],
  display_name: [
    /^(?![\d+_@.-]+$)[a-zA-Z0-9+_-]{3,20}$/,
    `от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
  ],
  second_name: [
    /^[А-ЯA-Z]{1}[a-zа-я-]{1,}$/,
    `латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).`,
  ],
  phone: [
    /(^8|7|\+7)(\d{10,15})/,
    `от 10 до 15 символов, состоит из цифр, может начинается с плюса.`,
  ],
  email: [
    /[-.\w]+@([\w-]+\.)+[\w-]+/,
    `латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.`,
  ],
  /**
   * от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них,
   * без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).
   */
  login: [
    /^(?![\d+_@.-]+$)[a-zA-Z0-9+_-]{3,20}$/,
    `от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
  ],
  /**
   *  от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
   */
  password: [
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  ],
  second_password: [
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  ],
  old_password: [
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  ],
  new_password: [
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  ],
  second_new_password: [
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  ],
};

function checkCorrectField(
  name: SPEC_TYPE,
  str?: string
): { result: boolean; error: string } {
  const nameSpec = SPEC[name];

  if (str?.length === 0 || !str) {
    return { result: false, error: 'Поле не может быть пустым' };
  }

  if (!nameSpec) {
    throw new SyntaxError(`Нет такого названия спецификации`);
  }

  const [regexp, err] = nameSpec;
  const result = regexp.test(str);

  return { result, error: result ? '' : err };
}

function getError(str?: string): string {
  if (str) {
    return str;
  }
  return '';
}

function isSpecName<T extends SPEC_TYPE>(name: string): name is T {
  return SPEC_NAMES.includes(name);
}

export {
  SPEC,
  SPEC_NAMES,
  SPEC_TYPE as SPEC_NAME,
  PASSWORD_SECOND_CHECK,
  isSpecName,
  checkCorrectField,
  getError,
};
