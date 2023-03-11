import { UserAPI, AuthAPI } from 'api';
import { store } from 'store';
import { showLoader, hideLoader } from 'utils/setLoader';

const authApi = new AuthAPI();
const userApi = new UserAPI();

class AppController {
  public async startApp() {
    try {
      // Запускаем крутилку
      showLoader();
      store.clearError();

      const userInfo = await authApi.fetchUserInfo();

      if (userInfo) {
        const avatar = await userApi.fetchResource(userInfo.avatar);
        store.setState({ user: { ...userInfo, avatar } });
      }
      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      store.clearError();

      hideLoader();
    }
  }
}

export default new AppController();
