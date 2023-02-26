import { TBody } from 'src/types/fetch';
import {
  IChangeUserModel,
  IChangeUserPasswordModel,
} from 'src/types/user/user';
import { ISearchUser, IUserDTO } from 'types';
import { HTTP } from 'utils/http';
import { StatusResponse, SearchUserRequestData } from './types';

const userAPIInstance = new HTTP('api/v2/user');
const resourcesAPIInstance = new HTTP('api/v2/resources');

class UserAPI {
  async changeUserInfo(data: IChangeUserModel) {
    // Изменить информацию о пользователе
    return userAPIInstance.put<IUserDTO>('/profile', {
      data,
    });
  }

  async changeUserAvatar(data: TBody) {
    // Изменить аватар
    return userAPIInstance.put<IUserDTO>('/profile/avatar', {
      data,
      headers: {
        'content-type': '',
      },
    });
  }

  async changeUserPassword(data: IChangeUserPasswordModel) {
    // Изменить парольпользователя
    return userAPIInstance.put<StatusResponse>('/password', {
      data,
      responseType: 'text',
    });
  }

  async fetchUser(id: number) {
    // Получить информацию о пользователе
    return userAPIInstance.get<IUserDTO>(`${id}`);
  }

  async searchUsers(data: SearchUserRequestData) {
    // Поиск пользователей по логину
    return userAPIInstance.post<Array<ISearchUser>>('/search', { data });
  }

  async fetchResource(path: string | null) {
    // Поиск ресурса
    if (!path) {
      return null;
    }
    return resourcesAPIInstance
      .get<Blob>(`/${path}`, {
        responseType: 'blob',
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }
}

export { UserAPI };
