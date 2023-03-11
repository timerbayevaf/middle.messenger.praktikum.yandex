import { ISignUpUserModel, IUserDTO, SignInUserModel } from 'types';
import { HTTP } from 'utils/http';
import { StatusResponse, SignUpResponseData } from './types';

const chatAPIInstance = new HTTP('auth');

class AuthAPI {
  async signup(data: ISignUpUserModel) {
    // Создать нового пользователя
    return chatAPIInstance
      .post<SignUpResponseData>('/signup', {
        data,
      })
      .then(({ id }: SignUpResponseData) => id);
  }

  async signin(data: SignInUserModel) {
    // Авторизоваться
    return chatAPIInstance.post<StatusResponse>('/signin', {
      data,
      responseType: 'text',
    });
  }

  async fetchUserInfo() {
    // Получить информацию о пользователе
    return chatAPIInstance.get<IUserDTO>('/user');
  }

  async signout() {
    // Выход
    return chatAPIInstance.post<StatusResponse>('/logout', {
      responseType: 'text',
    });
  }
}

export { AuthAPI };
