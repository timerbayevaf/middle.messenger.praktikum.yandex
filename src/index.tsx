import SignupPage from 'pages/signup';
import ChatsPage from 'pages/chats/chats';
import LoginPage from 'pages/login/login';
import BrokendPage from 'pages/broken';
import NotFoundPage from 'pages/not-found';
import App from './controllers/app';

import { Block, router } from 'core';
import { ROUTES, ROUTE_TYPES } from 'constants';

// store
// router
// чтобы поменять урл, нужно вызывать апи роутера // go и тд
// роутер отображает страницу

App.startApp().then(() => {
  router
    .use(ROUTES[ROUTE_TYPES.CHAT_LIST], ChatsPage as typeof Block, {
      isPrivate: true,
    })
    .use(ROUTES[ROUTE_TYPES.SIGNUP], SignupPage as typeof Block, {
      isPrivate: false,
    })
    .use(ROUTES[ROUTE_TYPES.LOGIN], LoginPage as typeof Block, {
      isPrivate: false,
    })
    .use(ROUTES[ROUTE_TYPES.BROKEND], BrokendPage as typeof Block, {
      isPrivate: false,
    })
    .use(ROUTES[ROUTE_TYPES.NOT_FOUND], NotFoundPage as typeof Block, {
      isPrivate: false,
    })
    .start();
});
