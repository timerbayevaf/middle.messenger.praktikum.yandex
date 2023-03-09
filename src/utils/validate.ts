import {
  SPEC_TYPE,
  ValidateType,
  ValidateName,
  LOGIN_SPEC,
  EMAIL_SPEC,
  LATIN_NUMBER_CUSTOM_SPEC,
  NUMBER_SPEC,
  DISPLAY_NAME_SPEC,
  NAME_SPEC,
  CYRILLIC_SPEC,
  LATIN_SPEC,
  PHONE_SPEC,
  PASSWORD_SPEC,
} from 'constant';

function checkCorrectField(type: SPEC_TYPE, str: string): string | null {
  switch (type) {
    case ValidateType.Login: {
      /**
       * от 3 до 20 символов,
       * латиница,
       * может содержать цифры, но не состоять из них, без пробелов,
       * без спецсимволов (допустимы дефис и нижнее подчёркивание)
       */
      if (str.length > 20 || str.length < 3) {
        return 'Логин должен содержать от 3 до 20 символов';
      }

      if (!str.match(LATIN_NUMBER_CUSTOM_SPEC)) {
        return 'Логин может содержать латинские буквы(цифры,-_)';
      }

      if (str.match(NUMBER_SPEC)) {
        return 'Логин может содержать цифры, но не состоять из них';
      }

      if (!str.match(LOGIN_SPEC)) {
        return 'Логин может содержать цифры,латинские буквы(спецсимволы -_)';
      }

      break;
    }

    case ValidateType.Email: {
      if (!str.match(EMAIL_SPEC)) {
        return 'Неверный адрес электронной почты';
      }

      break;
    }

    case ValidateType.DisplayName: {
      /**
       * от 3 до 20 символов,
       * латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)
       */
      if (str.length < 3 || str.length > 20) {
        return 'Имя в чате должен содержать от 3 до 20 символов';
      }

      if (!str.match(LATIN_NUMBER_CUSTOM_SPEC)) {
        return 'Имя в чате может содержать латинские буквы(цифры,-_)';
      }

      if (str.match(NUMBER_SPEC)) {
        return 'Имя в чате может содержать цифры, но не состоять из них';
      }

      if (!str.match(DISPLAY_NAME_SPEC)) {
        return 'Имя в чате может содержать цифры,латинские буквы(спецсимволы -_)';
      }

      break;
    }

    case ValidateType.FirstName:
    case ValidateType.SecondName: {
      /**
       * латиница или кириллица,
       * первая буква должна быть заглавной,
       * без пробелов и без цифр, нет спецсимволов (допустим только дефис).
       */
      if (!str.match(CYRILLIC_SPEC) && !str.match(LATIN_SPEC)) {
        return 'Имя может состоять из латиницы или кириллицы';
      }

      if (!str.match(NAME_SPEC)) {
        return 'Первая буква должна быть заглавной и допустим только дефис ';
      }

      break;
    }

    case ValidateType.Phone: {
      /**
       * от 10 до 15 символов,
       * состоит из цифр,
       * может начинается с плюса.
       */
      if (str.length > 15 || str.length < 10) {
        return 'Номер телефона должен содержать от 10 до 15 символов';
      }

      if (!str.match(PHONE_SPEC)) {
        return 'Номер телефона должен состоять из цифр, может начинаться с плюса ';
      }

      break;
    }

    case ValidateType.RepeatNewPassword:
    case ValidateType.OldPassword:
    case ValidateType.NewPassword:
    case ValidateType.Password: {
      /**
       * от 8 до 40 символов,
       * обязательно хотя бы одна заглавная буква и цифра.
       */

      if (str.length < 8 || str.length > 40) {
        return 'Пароль должен содержать от 8 до 40 символов';
      }

      if (!str.match(PASSWORD_SPEC)) {
        return 'Пароль должен содержать хотя бы одну заглавную букву и цифру';
      }

      break;
    }

    case ValidateType.Message: {
      if (!str.length) {
        return 'Ваше сообщение пустое';
      }

      break;
    }
  }

  return null;
}

function validateFields(validateRules: SPEC_TYPE[]) {
  return function (data: Record<string, string | number | null | undefined>) {
    const errors: Record<string, string> = {};
    let isCorrect = true;

    validateRules.forEach((key) => {
      const value = data[key] && String(data[key]);
      const name = ValidateName[key];

      if (!String(value).length) {
        errors[key] = `Поле ${name} не может быть пустым`;
        isCorrect = false;

        return;
      }

      const error = checkCorrectField(key, String(value));
      if (error) {
        errors[key] = error;
        isCorrect = false;
      }
    });

    return { isCorrect, errors };
  };
}

export { validateFields, checkCorrectField };
