import { AIcreateElement } from 'core';
import { chatMessages } from 'mocks';
import ChatsPage from 'pages/main/main';
import LoginPage from 'pages/login/login';
import { CHATLIST_VIEW } from 'constants';
import SignupPage from 'pages/signup';
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

const Main = () => {
  const urlSearchParams = new URLSearchParams(
    window.location.search.replace(/\&amp;/g, '&')
  );
  const params = Object.fromEntries(urlSearchParams.entries());

  const view = getView(params);

  switch (view) {
    case 'chats':
      return new ChatsPage({
        viewType: params.profileViewType as CHATLIST_VIEW,
        chatMessages: chatMessages,
      }).getContent()?.dom;
    case 'signup':
      return new SignupPage({}).getContent()?.dom;
    case 'login':
      return new LoginPage({}).getContent()?.dom;
    case 'brokend':
      return new BrokendPage({}).getContent()?.dom;
    case 'not-found':
      return new NotFoundPage({}).getContent()?.dom;

    default:
      return new Menu({}).getContent()?.dom;
  }
};

const container = document.getElementById('root');
function render(Component: HTMLElement, dom: HTMLElement | null) {
  dom?.appendChild(Component);
}

render(Main() as HTMLElement, container);
