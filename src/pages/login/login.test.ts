import userEvent from '@testing-library/user-event';
import { findByTestId, getByTestId, waitFor } from '@testing-library/dom';
import { ROUTES, ROUTE_TYPES } from 'constant';
import { Block, Router } from 'core';
import LoginPage from './login';
import ChatList from '../chats';
import NotFound from '../not-found';
import sleep from 'utils/test/sleep';
import { store } from 'store';
import userController from 'controllers/user';

describe('pages/login', () => {
  const router = new Router();

  beforeAll(() => {
    document.body.innerHTML = '<div id="test"></div>';
    router.setRootQuery('#test');
    router
      .use(ROUTES[ROUTE_TYPES.LOGIN], LoginPage as typeof Block, {
        isPrivate: false,
      })
      .use(ROUTES[ROUTE_TYPES.CHAT_LIST], ChatList as typeof Block, {
        isPrivate: true,
      })
      .use(ROUTES[ROUTE_TYPES.NOT_FOUND], NotFound as typeof Block, {
        isPrivate: true,
      })
      .start();
  });

  beforeEach(async () => {
    await userController.logout();
  });

  test('login page check', async () => {
    router.go('/login');

    await (async () => {
      const login = 'test110323';
      const inputLoginField = getByTestId(document.body, 'login-field');
      await userEvent.type(inputLoginField, login);
      await waitFor(() => expect(inputLoginField).toHaveValue(login));
    })();

    await (async () => {
      const password = 'sasdf=123A';
      const inputPasswordField = getByTestId(document.body, 'password-field');
      await userEvent.type(inputPasswordField, password);
      await waitFor(() => expect(inputPasswordField).toHaveValue(password));
    })();

    await userEvent.tab();

    await (async () => {
      const loginButton = getByTestId(document.body, 'login-btn');
      loginButton.click();
    })();

    await sleep();

    await (async () => {
      waitFor(() =>
        expect(findByTestId(document.body, 'main')).toBeInTheDocument()
      );
    })();

    await (async () => {
      expect(store.getState().user).not.toBe(null);
    })();
  });

  test('login page element exist', async () => {
    expect(getByTestId(document.body, 'login-form')).toBeInTheDocument();
    expect(getByTestId(document.body, 'password-field')).toBeInTheDocument();
    expect(getByTestId(document.body, 'login-field')).toBeInTheDocument();
    expect(getByTestId(document.body, 'login-btn')).toBeInTheDocument();
    expect(getByTestId(document.body, 'signup-btn')).toBeInTheDocument();
    expect(getByTestId(document.body, 'error-message')).toBeInTheDocument();
  });
});
