import { AIcreateElement } from 'core';
import { chatMessages } from 'mocks';
import { CHATLIST_VIEW } from 'constants';
import SignupPage from 'pages/signup';
import ChatsPage from 'pages/chats/chats';
import LoginPage from 'pages/login/login';
import BrokendPage from 'pages/broken';
import NotFoundPage from 'pages/not-found';
import Menu from './pages/menu';

function getView(obj: Record<string, string>) {
  if (
    obj &&
    obj.view !== undefined &&
    obj.view !== null &&
    typeof obj.view === 'string'
  ) {
    return obj.view;
  }

  return '';
}

function getParams() {
  const urlSearchParams = new URLSearchParams(
    window.location.search.replace(/\&amp;/g, '&')
  );
  return Object.fromEntries(urlSearchParams.entries());
}

const Main = () => {
  const getNode = () => {
    const params = getParams();
    const view = getView(params);

    switch (view) {
      case 'chats':
        return new ChatsPage({
          viewType: params.profileViewType as CHATLIST_VIEW,
          chatMessages: chatMessages,
        });
      case 'signup':
        return new SignupPage({});
      case 'login':
        return new LoginPage({});
      case 'brokend':
        return new BrokendPage({});
      case 'not-found':
        return new NotFoundPage({});

      default:
        return new Menu({});
    }
  };
  const node = getNode();

  window.addEventListener('navigate', function () {
    //code
    const params = getParams();

    node.setProps({
      viewType: params.profileViewType as CHATLIST_VIEW,
      chatMessages: chatMessages,
    });
  });

  return node.getContent()?.dom;
};

const container = document.getElementById('root');

export const render = (node: HTMLElement, target: HTMLElement | null) => {
  if (target && node) {
    target.appendChild(node);
  }
};

render(Main() as HTMLElement, container);
