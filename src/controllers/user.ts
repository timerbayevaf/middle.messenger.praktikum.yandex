import { UserAPI } from 'api/user-api';
import { AuthAPI } from 'api/auth-api';
import {
  CHATLIST_VIEW,
  validateProfileInfoRules,
  validateLoginRules,
  ROUTES,
  ROUTE_TYPES,
  validateProfilePasswordRules,
  validateSignUpRules,
} from 'constant';
import { validateFields } from 'utils/validate';
import {
  IChangeUserModel,
  IChangeUserPasswordModel,
  ISignUpUserModel,
  SignInUserModel,
} from 'src/types/user/user';
import { store } from 'store';
import { Router } from 'core';

const router = new Router();
const userApi = new UserAPI();
const authApi = new AuthAPI();
const userProfileInfoValidator = validateFields(validateProfileInfoRules);
const userLoginInfoValidator = validateFields(validateLoginRules);
const userSiignupInfoValidator = validateFields(validateSignUpRules);
const userProfilePasswordValidator = validateFields(
  validateProfilePasswordRules
);

class UserController {
  public async signup(data: ISignUpUserModel) {
    try {
      const validateData = userSiignupInfoValidator(data);

      if (!validateData.isCorrect) {
        throw new Error(Object.values(validateData.errors).join(' '));
      }

      const id = await authApi.signup(data);

      if (id) {
        const user = await authApi.fetchUserInfo();
        const avatar = await userApi.fetchResource(user.avatar);

        const newUser = { ...user, avatar };

        store.setState({
          user: newUser,
          errorMessage: '',
        });
        router.go(ROUTES[ROUTE_TYPES.CHAT_LIST]);
      }
    } catch (error) {
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
        console.error(error);
      }
    }
  }

  public async login(data: SignInUserModel) {
    try {
      const validateData = userLoginInfoValidator(data);
      const res = await authApi.signin(data);

      if (!validateData.isCorrect) {
        throw new Error(Object.values(validateData.errors).join(' '));
      }
      if (res === 'OK') {
        const user = await authApi.fetchUserInfo();
        const avatar = await userApi.fetchResource(user.avatar);

        const newUser = { ...user, avatar };

        store.setState({
          user: newUser,
          errorMessage: '',
        });
        router.go(ROUTES[ROUTE_TYPES.CHAT_LIST]);
      }
    } catch (error) {
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
        console.error(error);
      }
    }
  }

  public async logout() {
    try {
      const res = await authApi.signout();
      if (res === 'OK') {
        store.setState({
          user: null,
          errorMessage: '',
        });
        router.go(ROUTES[ROUTE_TYPES.LOGIN]);
      }
    } catch (error) {
      console.warn(error);
    }
  }

  public async changeUserInfo(userInfo: IChangeUserModel) {
    try {
      const validateData = userProfileInfoValidator(userInfo);

      if (!validateData.isCorrect) {
        throw new Error(Object.values(validateData.errors).join(' '));
      }

      const user = await userApi.changeUserInfo(userInfo);
      const avatar = await userApi.fetchResource(user.avatar);

      const newUser = { ...user, avatar };

      if (user) {
        store.setState({
          user: newUser,
          errorMessage: '',
        });
        router.go(
          ROUTES[ROUTE_TYPES.CHAT_LIST] +
            `?viewType=${CHATLIST_VIEW.VIEW_PROFILE}`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
        console.warn(error);
      }
    }
  }

  public async changeUserPassword(userPassword: IChangeUserPasswordModel) {
    try {
      const validateData = userProfilePasswordValidator(userPassword);

      if (!validateData.isCorrect) {
        throw new Error(Object.values(validateData.errors).join(' '));
      }

      const ok = await userApi.changeUserPassword(userPassword);

      if (ok === 'OK') {
        store.setState({ errorMessage: '' });
        router.go(
          ROUTES[ROUTE_TYPES.CHAT_LIST] +
            `?viewType=${CHATLIST_VIEW.VIEW_PROFILE}`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
        console.warn(error);
      }
    }
  }

  public async changeUserAvatar(data: FormData) {
    try {
      const user = await userApi.changeUserAvatar(data);
      const avatar = await userApi.fetchResource(user.avatar);

      if (user) {
        const newUser = { ...user, avatar };
        store.setState({
          user: newUser,
          errorMessage: '',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        store.setState({ errorMessage: error.message });
        console.warn(error);
      }
    }
  }
}

export default new UserController();
