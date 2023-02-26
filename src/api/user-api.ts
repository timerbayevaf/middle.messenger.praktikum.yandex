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
    // Получить информацию о пользователе
    return userAPIInstance.put<StatusResponse>('/password', {
      data,
      responseType: 'text',
    });
  }

  async fetchUser(id: number) {
    return userAPIInstance.get<StatusResponse>(`${id}`);
  }

  async searchUsers(data: SearchUserRequestData) {
    return userAPIInstance.post<Array<ISearchUser>>('/search', { data });
  }

  async fetchResource(path: string | null) {
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
